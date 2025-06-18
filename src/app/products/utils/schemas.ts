import { z } from "zod";

// Item schema for product items array
export const itemSchema = z.object({
    name: z.string().min(1, "Item name is required"),
    quantity: z.number().min(1, "Quantity must be at least 1"),
});

// Product edit form schema
export const productEditSchema = z.object({
    name: z.string().min(1, "Name is required"),
    descriptionRu: z.string().optional(),
    price: z.number().optional(),
    category: z.string().optional(),
    status: z.string().optional(),
    image: z.string().optional(),
    occasion: z.string().optional(),
    occasion_ids: z.array(z.number()).optional(),
    width: z.number().optional(),
    height: z.number().optional(),
    items: z.array(itemSchema).optional(),
    is_active: z.boolean(),
    product_images: z.array(
        z.object({
            dbId: z.number().optional(), // Database ID (separate from react-hook-form ID)
            image_url: z.string().min(1, "Image URL is required"),
            is_primary: z.boolean(),
            display_order: z.number().min(0),
        })
    ),
});

// Product image schema
export const productImageSchema = z.object({
    image_url: z.string().url("Must be a valid URL"),
    is_primary: z.boolean().default(false),
    display_order: z.number().min(0, "Display order must be positive").default(0),
});

// Export inferred types
export type ProductEditFormData = z.infer<typeof productEditSchema>;
export type ProductImageFormData = z.infer<typeof productImageSchema>;
export type ItemFormData = z.infer<typeof itemSchema>; 