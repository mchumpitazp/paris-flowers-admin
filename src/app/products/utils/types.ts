import type {
    products,
    product_images,
    occasions,
    product_occasions,
    categories,
    product_categories,
} from "@/lib/prisma/client";

// Base Prisma types
export type Product = products;
export type ProductImage = product_images;
export type Occasion = occasions;
export type ProductOccasion = product_occasions;
export type Category = categories;
export type ProductCategory = product_categories;

// Composite types
export type ProductWithImages = Product & {
    product_images: ProductImage[];
    product_occasions: (ProductOccasion & {
        occasions: Occasion;
    })[];
    product_categories: (ProductCategory & {
        categories: Category;
    })[];
};

// Re-export schema types
export type { ProductEditFormData, ProductImageFormData, ItemFormData } from "./schemas";
