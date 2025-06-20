import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { product_images } from "@/lib/prisma/client";

export async function PUT(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const body = await request.json();
        const { id } = await params;
        const productId = parseInt(id);

        // Use transaction with proper timeout and isolation for data integrity
        const result = await prisma.$transaction(
            async (tx) => {
                // 1. Update the product
                const productData = {
                    name: body.name,
                    descriptionRu: body.descriptionRu || null,
                    price: body.price || null,
                    category: body.category || null,
                    occasion: body.occasion || null,
                    width: body.width || null,
                    height: body.height || null,
                    items: body.items || null,
                    is_active: body.is_active,
                    updatedAt: new Date(),
                };

                const updatedProduct = await tx.products.update({
                    where: { id: productId },
                    data: productData,
                });

                // 2. Handle occasions relationship
                if (body.occasion_ids !== undefined) {
                    await tx.product_occasions.deleteMany({
                        where: { product_id: productId },
                    });

                    if (body.occasion_ids?.length > 0) {
                        await tx.product_occasions.createMany({
                            data: body.occasion_ids.map((occasion_id: number) => ({
                                product_id: productId,
                                occasion_id: occasion_id,
                            })),
                        });
                    }
                }

                // 3. Handle categories relationship
                if (body.category_ids !== undefined) {
                    await tx.product_categories.deleteMany({
                        where: { product_id: productId },
                    });

                    if (body.category_ids?.length > 0) {
                        await tx.product_categories.createMany({
                            data: body.category_ids.map((category_id: number) => ({
                                product_id: productId,
                                category_id: category_id,
                            })),
                        });
                    }
                }

                // 4. Handle product images
                if (body.product_images && Array.isArray(body.product_images)) {
                    const primaryImage = body.product_images.find(
                        (img: product_images) => img.is_primary
                    );

                    if (primaryImage) {
                        await tx.product_images.updateMany({
                            where: { product_id: productId },
                            data: { is_primary: false },
                        });
                    }

                    // Update images in batch for better performance
                    const imageUpdates = body.product_images
                        .filter((img: { dbId?: number }) => img.dbId)
                        .map((imageData: { dbId: number; is_primary: boolean; display_order: number }) =>
                            tx.product_images.update({
                                where: { id: imageData.dbId },
                                data: {
                                    is_primary: imageData.is_primary,
                                    display_order: imageData.display_order,
                                },
                            })
                        );

                    if (imageUpdates.length > 0) {
                        await Promise.all(imageUpdates);
                    }
                }

                return updatedProduct;
            },
            {
                maxWait: 5000, // Maximum time to wait for a transaction slot (5s)
                timeout: 10000, // Maximum time for the transaction to complete (10s)
                isolationLevel: "ReadCommitted", // Appropriate isolation level
            }
        );

        return NextResponse.json({ success: true, product: result });
    } catch (error) {
        console.error("Error updating product:", error);
        return NextResponse.json(
            { success: false, error: "Internal server error" },
            { status: 500 }
        );
    }
}

export async function DELETE(
    _request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const productId = parseInt(id);

        await prisma.products.delete({
            where: { id: productId },
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error deleting product:", error);
        return NextResponse.json(
            { success: false, error: "Internal server error" },
            { status: 500 }
        );
    }
}
