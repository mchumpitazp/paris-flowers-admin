import { NextRequest, NextResponse } from "next/server";
import sharp from "sharp";
import { randomUUID } from "crypto";
import { s3 } from "@/lib/s3";
import { PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import prisma from "@/lib/prisma";

export async function POST(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const productId = parseInt(id);

        const formData = await request.formData();
        const file = formData.get("file") as File;

        if (!file) {
            return NextResponse.json(
                { error: "No file provided" },
                { status: 400 }
            );
        }

        // Validate file type
        if (!file.type.startsWith("image/")) {
            return NextResponse.json(
                { error: "File must be an image" },
                { status: 400 }
            );
        }

        // Validate file size (10MB max)
        const maxSize = 10 * 1024 * 1024; // 10MB
        if (file.size > maxSize) {
            return NextResponse.json(
                { error: "File size must be less than 10MB" },
                { status: 400 }
            );
        }

        // Convert file to buffer
        const buffer = Buffer.from(await file.arrayBuffer());

        // Generate unique filename
        const filename = `${randomUUID()}.webp`;

        // Process image with Sharp
        const processedBuffer = await sharp(buffer)
            .resize(800, 800, {
                fit: "inside",
                withoutEnlargement: true,
            })
            .webp({
                quality: 80,
                effort: 4,
            })
            .toBuffer();

        // Create database record first (separate from S3 upload to avoid transaction timeout)
        const newImage = await prisma.$transaction(async (tx) => {
            // Check if product exists
            const product = await tx.products.findUnique({
                where: { id: productId },
            });

            if (!product) {
                throw new Error("Product not found");
            }

            // Get existing images count for ordering
            const existingImagesCount = await tx.product_images.count({
                where: { product_id: productId },
            });

            // Create database record FIRST
            return await tx.product_images.create({
                data: {
                    product_id: productId,
                    image_url: filename,
                    is_primary: existingImagesCount === 0, // First image is primary
                    display_order: existingImagesCount, // Next available order
                },
            });
        });

        // Upload to S3 OUTSIDE transaction to avoid timeout
        const uploadResult = await uploadToS3(processedBuffer, filename);

        if (!uploadResult.success) {
            // If S3 upload fails, clean up the database record
            await prisma.product_images.delete({
                where: { id: newImage.id },
            });
            throw new Error("Failed to upload image to storage");
        }

        return NextResponse.json({
            imageUrl: filename,
            success: true,
            image: newImage,
        });
    } catch (error) {
        console.error("Image upload error:", error);

        // Handle specific error types
        if (error instanceof Error) {
            if (error.message === "Product not found") {
                return NextResponse.json(
                    { error: "Product not found" },
                    { status: 404 }
                );
            }

            if (error.message === "Failed to upload image to storage") {
                return NextResponse.json(
                    { error: "Failed to upload image to cloud storage" },
                    { status: 500 }
                );
            }

            // Database constraint errors
            if (error.message.includes("Unique constraint")) {
                return NextResponse.json(
                    { error: "Database constraint error. Please try again." },
                    { status: 400 }
                );
            }
        }

        return NextResponse.json(
            { error: "Failed to process image. Please try again." },
            { status: 500 }
        );
    }
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const productId = parseInt(id);

        const url = new URL(request.url);
        const imageId = url.searchParams.get("imageId");

        if (!imageId) {
            return NextResponse.json(
                { error: "Image ID is required" },
                { status: 400 }
            );
        }

        // Validate imageId is a valid number
        const parsedImageId = parseInt(imageId);
        if (isNaN(parsedImageId)) {
            return NextResponse.json(
                { error: "Invalid image ID" },
                { status: 400 }
            );
        }

        // Get image record to find the filename for S3 deletion
        const imageRecord = await prisma.product_images.findUnique({
            where: { id: parsedImageId },
        });

        if (!imageRecord) {
            return NextResponse.json(
                { error: "Image not found in database" },
                { status: 404 }
            );
        }

        // Safety check: Ensure filename is valid and not empty
        if (!imageRecord.image_url || imageRecord.image_url.trim() === "") {
            console.error("Invalid image URL for deletion:", imageRecord);
            return NextResponse.json(
                { error: "Invalid image URL" },
                { status: 400 }
            );
        }

        // Log what we're about to delete for debugging
        console.log(`Attempting to delete image:`, {
            imageId: parsedImageId,
            productId: productId,
            filename: imageRecord.image_url,
            imageRecord: imageRecord,
        });

        // Delete from database FIRST (safer approach)
        await prisma.product_images.delete({
            where: { id: parsedImageId },
        });

        // Then delete from S3 (if DB deletion succeeds)
        const deleteResult = await deleteFromS3(imageRecord.image_url);

        if (!deleteResult.success) {
            console.warn(
                `Failed to delete ${imageRecord.image_url} from S3, but database record was removed`
            );
            // Don't fail the request if S3 deletion fails - the DB record is already gone
        }

        return NextResponse.json({
            success: true,
            message: "Image deleted successfully",
        });
    } catch (error) {
        console.error("Image deletion error:", error);

        if (error instanceof Error) {
            if (error.message.includes("Record to delete does not exist")) {
                return NextResponse.json(
                    { error: "Image not found" },
                    { status: 404 }
                );
            }
        }

        return NextResponse.json(
            { error: "Failed to delete image. Please try again." },
            { status: 500 }
        );
    }
}

// Upload to Timeweb S3 using AWS SDK
async function uploadToS3(
    buffer: Buffer,
    filename: string
): Promise<{ success: boolean }> {
    try {
        await s3.send(
            new PutObjectCommand({
                Bucket: process.env.NEXT_PUBLIC_TIMEWEB_S3_BUCKET,
                Key: filename,
                Body: buffer,
                ContentType: "image/webp",
                ACL: "public-read",
            })
        );

        console.log(`Image upload: ${filename} (${buffer.length} bytes)`);
        return { success: true };
    } catch (error) {
        console.error("S3 upload error:", error);
        return { success: false };
    }
}

// Delete from Timeweb S3 using AWS SDK
async function deleteFromS3(filename: string): Promise<{ success: boolean }> {
    try {
        await s3.send(
            new DeleteObjectCommand({
                Bucket: process.env.NEXT_PUBLIC_TIMEWEB_S3_BUCKET,
                Key: filename,
            })
        );

        console.log(`Image deleted from S3: ${filename}`);
        return { success: true };
    } catch (error) {
        console.error("S3 delete error:", error);
        return { success: false };
    }
}
