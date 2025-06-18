"use client";

import { useState, useRef } from "react";
import { useFieldArray, Control } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import {
    Upload,
    Trash2,
    Star,
    StarOff,
    Image as ImageIcon,
    Loader2,
    MoveUp,
    MoveDown,
} from "lucide-react";
import { ProductEditFormData } from "@/app/products/utils/types";
import { toast } from "sonner";
import Image from "next/image";

interface ProductImageManagerProps {
    control: Control<ProductEditFormData>;
    productId: number;
}

export function ProductImageManager({
    control,
    productId,
}: ProductImageManagerProps) {
    const [uploading, setUploading] = useState(false);
    const [deletingImageId, setDeletingImageId] = useState<number | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const { fields, append, remove, update } = useFieldArray({
        control,
        name: "product_images",
    });

    const getImageFullUrl = (imageUrl: string) => {
        if (!imageUrl) return "";
        if (imageUrl.startsWith("http")) return imageUrl;

        const s3Url = process.env.NEXT_PUBLIC_TIMEWEB_S3_URL;
        const bucket = process.env.NEXT_PUBLIC_TIMEWEB_S3_BUCKET;

        if (!s3Url || !bucket) {
            console.warn("S3 environment variables not configured");
            return imageUrl;
        }

        return `${s3Url}/${bucket}/${imageUrl}`;
    };

    const handleFileUpload = async (files: FileList | null) => {
        if (!files || files.length === 0) return;

        setUploading(true);
        let successCount = 0;
        let errorCount = 0;

        try {
            for (let i = 0; i < files.length; i++) {
                const file = files[i];

                // Validate file type
                if (!file.type.startsWith("image/")) {
                    toast.error(`${file.name} is not a valid image file`);
                    errorCount++;
                    continue;
                }

                // Validate file size (10MB max)
                const maxSize = 10 * 1024 * 1024; // 10MB
                if (file.size > maxSize) {
                    toast.error(
                        `${file.name} is too large. Maximum size is 10MB`
                    );
                    errorCount++;
                    continue;
                }

                try {
                    const formData = new FormData();
                    formData.append("file", file);

                    const response = await fetch(
                        `/api/products/${productId}/images`,
                        {
                            method: "POST",
                            body: formData,
                        }
                    );

                    const result = await response.json();

                    if (!response.ok) {
                        throw new Error(
                            result.error || `Failed to upload ${file.name}`
                        );
                    }

                    const { imageUrl, image } = result;

                    // Add the new image to the form
                    append({
                        dbId: image.id, // Database ID (number)
                        image_url: imageUrl, // Filename (string)
                        is_primary: image.is_primary,
                        display_order: image.display_order,
                    });

                    successCount++;
                    toast.success(`${file.name} uploaded successfully`);
                } catch (fileError) {
                    console.error(`Upload error for ${file.name}:`, fileError);
                    toast.error(
                        `Failed to upload ${file.name}: ${
                            fileError instanceof Error
                                ? fileError.message
                                : "Unknown error"
                        }`
                    );
                    errorCount++;
                }
            }

            // Show summary if multiple files
            if (files.length > 1) {
                if (successCount > 0 && errorCount === 0) {
                    toast.success(
                        `All ${successCount} images uploaded successfully!`
                    );
                } else if (successCount > 0 && errorCount > 0) {
                    toast.warning(
                        `${successCount} images uploaded, ${errorCount} failed`
                    );
                } else if (errorCount > 0) {
                    toast.error(`Failed to upload all ${errorCount} images`);
                }
            }
        } catch (error) {
            console.error("Upload error:", error);
            toast.error("An unexpected error occurred during upload");
        } finally {
            setUploading(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        handleFileUpload(files);
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };

    const setPrimary = (index: number) => {
        // Remove primary from all images
        fields.forEach((_, i) => {
            update(i, { ...fields[i], is_primary: false });
        });
        // Set the selected image as primary
        update(index, { ...fields[index], is_primary: true });
    };

    const moveImage = (index: number, direction: "up" | "down") => {
        const newIndex = direction === "up" ? index - 1 : index + 1;
        if (newIndex < 0 || newIndex >= fields.length) return;

        const currentImage = { ...fields[index] };
        const targetImage = { ...fields[newIndex] };

        // Swap display orders
        const tempOrder = currentImage.display_order;
        currentImage.display_order = targetImage.display_order;
        targetImage.display_order = tempOrder;

        update(index, targetImage);
        update(newIndex, currentImage);
    };

    const handleRemoveImage = async (index: number) => {
        const imageToRemove = fields[index];

        // If the image has a database ID, it exists in the database and needs to be deleted
        if (imageToRemove.dbId) {
            setDeletingImageId(imageToRemove.dbId);
            try {
                const response = await fetch(
                    `/api/products/${productId}/images?imageId=${imageToRemove.dbId}`,
                    {
                        method: "DELETE",
                    }
                );

                const result = await response.json();

                if (!response.ok) {
                    throw new Error(result.error || "Failed to delete image");
                }

                toast.success("Image deleted successfully");
            } catch (error) {
                console.error("Delete error:", error);
                toast.error(
                    `Failed to delete image: ${
                        error instanceof Error ? error.message : "Unknown error"
                    }`
                );
                return; // Don't remove from form if API call failed
            } finally {
                setDeletingImageId(null);
            }
        }

        // Remove from form state
        remove(index);
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <ImageIcon className="h-5 w-5" />
                    Изображения товара
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                {/* Upload Area */}
                <div
                    className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors cursor-pointer"
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onClick={() => fileInputRef.current?.click()}
                >
                    <div className="flex flex-col items-center gap-4">
                        {uploading ? (
                            <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
                        ) : (
                            <Upload className="h-8 w-8 text-gray-400" />
                        )}
                        <div>
                            <p className="text-sm font-medium text-gray-900">
                                {uploading
                                    ? "Загружается..."
                                    : "Нажмите для загрузки или перетащите файлы"}
                            </p>
                            <p className="text-sm text-gray-500">
                                Изображения в формате PNG, JPG, JPEG до 10MB
                            </p>
                        </div>
                    </div>
                    <input
                        ref={fileInputRef}
                        type="file"
                        multiple
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleFileUpload(e.target.files)}
                        disabled={uploading}
                    />
                </div>

                {/* Images Grid */}
                {fields.length > 0 && (
                    <div className="space-y-4">
                        <h4 className="text-sm font-medium text-gray-900">
                            Загруженные изображения ({fields.length})
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {fields.map((field, index) => (
                                <div
                                    key={field.id}
                                    className="relative group border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
                                >
                                    {/* Image Preview */}
                                    <div className="aspect-square relative bg-gray-100">
                                        {field.image_url ? (
                                            <Image
                                                width={250}
                                                height={250}
                                                src={getImageFullUrl(
                                                    field.image_url
                                                )}
                                                alt={`Product image ${
                                                    index + 1
                                                }`}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    const target =
                                                        e.target as HTMLImageElement;
                                                    target.src =
                                                        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIxIDEyQzIxIDEwLjc5IDIwLjIxIDEwIDIwIDEwSDEzTDE0LjUgN0wxMy41IDRINUMzLjkgNCAzIDQuOSAzIDZWMThDMyAxOS4xIDMuOSAyMCA1IDIwSDE5QzIwLjEgMjAgMjEgMTkuMSAyMSAxOFYxMloiIGZpbGw9IiNlNWU3ZWIiLz4KPC9zdmc+";
                                                }}
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center">
                                                <ImageIcon className="h-8 w-8 text-gray-400" />
                                            </div>
                                        )}

                                        {/* Primary Badge */}
                                        {field.is_primary && (
                                            <Badge className="absolute top-2 left-2 bg-yellow-500 text-white">
                                                <Star className="h-3 w-3 mr-1" />
                                                Основное
                                            </Badge>
                                        )}

                                        {/* Order Badge */}
                                        <Badge
                                            variant="secondary"
                                            className="absolute top-2 right-2"
                                        >
                                            #{field.display_order + 1}
                                        </Badge>
                                    </div>

                                    {/* Controls */}
                                    <div className="p-3 space-y-3">
                                        {/* Image URL (hidden from display) */}
                                        <FormField
                                            control={control}
                                            name={`product_images.${index}.image_url`}
                                            render={({ field: urlField }) => (
                                                <FormItem className="hidden">
                                                    <FormControl>
                                                        <Input {...urlField} />
                                                    </FormControl>
                                                </FormItem>
                                            )}
                                        />

                                        {/* Display Order (hidden from display) */}
                                        <FormField
                                            control={control}
                                            name={`product_images.${index}.display_order`}
                                            render={({ field: orderField }) => (
                                                <FormItem className="hidden">
                                                    <FormControl>
                                                        <Input
                                                            type="number"
                                                            {...orderField}
                                                            onChange={(e) =>
                                                                orderField.onChange(
                                                                    parseInt(
                                                                        e.target
                                                                            .value
                                                                    ) || 0
                                                                )
                                                            }
                                                        />
                                                    </FormControl>
                                                </FormItem>
                                            )}
                                        />

                                        {/* Is Primary (hidden from display) */}
                                        <FormField
                                            control={control}
                                            name={`product_images.${index}.is_primary`}
                                            render={({
                                                field: primaryField,
                                            }) => (
                                                <FormItem className="hidden">
                                                    <FormControl>
                                                        <Checkbox
                                                            checked={
                                                                primaryField.value
                                                            }
                                                            onCheckedChange={
                                                                primaryField.onChange
                                                            }
                                                        />
                                                    </FormControl>
                                                </FormItem>
                                            )}
                                        />

                                        {/* Action Buttons */}
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-1">
                                                {/* Move buttons */}
                                                <Button
                                                    type="button"
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() =>
                                                        moveImage(index, "up")
                                                    }
                                                    disabled={index === 0}
                                                    className="cursor-pointer size-8 p-0"
                                                >
                                                    <MoveUp className="h-3 w-3" />
                                                </Button>
                                                <Button
                                                    type="button"
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() =>
                                                        moveImage(index, "down")
                                                    }
                                                    disabled={
                                                        index ===
                                                        fields.length - 1
                                                    }
                                                    className="cursor-pointer size-8 p-0"
                                                >
                                                    <MoveDown className="h-3 w-3" />
                                                </Button>
                                            </div>

                                            <div className="flex items-center gap-1">
                                                {/* Primary toggle */}
                                                <Button
                                                    type="button"
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() =>
                                                        setPrimary(index)
                                                    }
                                                    className="cursor-pointer size-8 p-0"
                                                    title={
                                                        field.is_primary
                                                            ? "Убрать как основное"
                                                            : "Установить как основное"
                                                    }
                                                >
                                                    {field.is_primary ? (
                                                        <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                                                    ) : (
                                                        <StarOff className="h-3 w-3" />
                                                    )}
                                                </Button>

                                                {/* Delete button */}
                                                <Button
                                                    type="button"
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() =>
                                                        handleRemoveImage(index)
                                                    }
                                                    disabled={
                                                        deletingImageId ===
                                                        field.dbId
                                                    }
                                                    className="cursor-pointer size-8 p-0 text-red-500 hover:text-red-700 hover:bg-red-50 disabled:opacity-50"
                                                >
                                                    {deletingImageId ===
                                                    field.dbId ? (
                                                        <Loader2 className="h-3 w-3 animate-spin" />
                                                    ) : (
                                                        <Trash2 className="h-3 w-3" />
                                                    )}
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {fields.length === 0 && (
                    <div className="text-center py-8">
                        <ImageIcon className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                        <p className="text-sm text-gray-500">
                            Изображения еще не загружены
                        </p>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
