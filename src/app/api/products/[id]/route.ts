import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function PUT(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const body = await request.json();
        const { id } = await params;
        const productId = parseInt(id);

        // Use transaction to ensure data consistency
        const result = await prisma.$transaction(async (tx) => {
            // Prepare product data for Prisma
            const productData = {
                name: body.name,
                descriptionRu: body.descriptionRu || null,
                price: body.price || null,
                category: body.category || null,
                // status: body.status || null,
                occasion: body.occasion || null,
                width: body.width || null,
                height: body.height || null,
                items: body.items || null,
                is_active: body.is_active,
                updatedAt: new Date(),
            };

            // Update the product
            const updatedProduct = await tx.products.update({
                where: { id: productId },
                data: productData,
            });

            // Handle many-to-many relationship for occasions
            if (body.occasion_ids !== undefined) {
                // Delete existing relationships
                await tx.product_occasions.deleteMany({
                    where: { product_id: productId },
                });

                // Create new relationships
                if (body.occasion_ids?.length > 0) {
                    await tx.product_occasions.createMany({
                        data: body.occasion_ids.map((occasion_id: number) => ({
                            product_id: productId,
                            occasion_id: occasion_id,
                        })),
                    });
                }
            }

            // Handle product images updates (display order and primary status)
            if (body.product_images && Array.isArray(body.product_images)) {
                for (const imageData of body.product_images) {
                    if (imageData.dbId) {
                        await tx.product_images.update({
                            where: { id: imageData.dbId },
                            data: {
                                is_primary: imageData.is_primary,
                                display_order: imageData.display_order,
                            },
                        });
                    }
                }
            }

            return updatedProduct;
        });

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
