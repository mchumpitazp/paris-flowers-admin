import prisma from "@/lib/prisma";
import type { ProductWithImages } from "./types";

export async function getAllProducts(): Promise<ProductWithImages[]> {
    try {
        const products = await prisma.products.findMany({
            include: {
                product_images: {
                    where: {
                        is_primary: true,
                    },
                    take: 1,
                },
                product_occasions: {
                    include: {
                        occasions: true,
                    },
                },
                product_categories: {
                    include: {
                        categories: true,
                    },
                },
            },
            orderBy: {
                createdAt: "desc",
            },
        });
        return products;
    } catch (error) {
        console.error("Failed to fetch products:", error);
        return [];
    }
}

export async function getProductById(
    id: string
): Promise<ProductWithImages | null> {
    try {
        const product = await prisma.products.findUnique({
            where: { id: parseInt(id) },
            include: {
                product_images: {
                    orderBy: {
                        display_order: "asc",
                    },
                },
                product_occasions: {
                    include: {
                        occasions: true,
                    },
                },
                product_categories: {
                    include: {
                        categories: true,
                    },
                },
            },
        });
        return product;
    } catch (error) {
        console.error("Failed to fetch product:", error);
        return null;
    }
}

export async function getAllOccasions() {
    try {
        const occasions = await prisma.occasions.findMany({
            orderBy: {
                label: "asc",
            },
        });
        return occasions;
    } catch (error) {
        console.error("Failed to fetch occasions:", error);
        return [];
    }
}

export async function getAllCategories() {
    try {
        const categories = await prisma.categories.findMany({
            orderBy: {
                label: "asc",
            },
        });
        return categories;
    } catch (error) {
        console.error("Failed to fetch categories:", error);
        return [];
    }
}
