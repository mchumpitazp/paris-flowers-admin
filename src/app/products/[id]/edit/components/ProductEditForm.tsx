"use client";

import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Trash2, Plus, Save } from "lucide-react";
import { productEditSchema } from "../../../utils/schemas";
import type {
    ProductWithImages,
    Occasion,
    Category,
    ProductEditFormData,
} from "../../../utils/types";
import { ProductImageManager } from "./ProductImageManager";
import { toast } from "sonner";

interface ProductEditFormProps {
    product: ProductWithImages;
    occasions: Occasion[];
    categories: Category[];
}

function formatJSON(value: unknown): string {
    if (!value) return "";
    if (typeof value === "string") return value;
    return JSON.stringify(value, null, 2);
}

function parseItems(items: unknown): { name: string; quantity: number }[] {
    if (!items) return [];
    if (Array.isArray(items)) {
        return items
            .filter(
                (item) =>
                    item &&
                    typeof item === "object" &&
                    "name" in item &&
                    "quantity" in item
            )
            .map((item) => ({
                name: String(item.name),
                quantity: Number(item.quantity) || 1,
            }));
    }
    return [];
}

export function ProductEditForm({
    product,
    occasions,
    categories,
}: ProductEditFormProps) {
    const [isLoading, setIsLoading] = useState(false);

    const [selectedOccasionIds, setSelectedOccasionIds] = useState<number[]>(
        product.product_occasions?.map((po) => po.occasion_id) || []
    );

    const form = useForm<ProductEditFormData>({
        resolver: zodResolver(productEditSchema),
        defaultValues: {
            name: product.name || "",
            descriptionRu: product.descriptionRu || "",
            price: product.price || 0,
            category: product.category || "",
            status: formatJSON(product.status),
            image: formatJSON(product.image),
            occasion: product.occasion || "",
            occasion_ids:
                product.product_occasions?.map((po) => po.occasion_id) || [],
            width: product.width || 0,
            height: product.height || 0,
            items: parseItems(product.items),
            is_active: product.is_active ?? true,
            product_images:
                product.product_images.map((img) => ({
                    dbId: img.id, // Store database ID separately
                    image_url: img.image_url,
                    is_primary: img.is_primary || false,
                    display_order: img.display_order || 0,
                })) || [],
        },
    });

    const {
        fields: itemFields,
        append: appendItem,
        remove: removeItem,
    } = useFieldArray({
        control: form.control,
        name: "items",
    });

    const onSubmit = async (formData: ProductEditFormData) => {
        setIsLoading(true);
        try {
            const response = await fetch(`/api/products/${product.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || "Failed to update product");
            }

            toast.success("Product updated successfully!");
        } catch (error) {
            console.error("Error updating product:", error);
            toast.error(
                `Failed to update product: ${
                    error instanceof Error ? error.message : "Unknown error"
                }`
            );
        } finally {
            setIsLoading(false);
        }
    };

    const addItem = () => {
        appendItem({
            name: "",
            quantity: 1,
        });
    };

    const toggleOccasionId = (occasionId: number) => {
        const currentIds = selectedOccasionIds;
        const newIds = currentIds.includes(occasionId)
            ? currentIds.filter((id) => id !== occasionId)
            : [...currentIds, occasionId];

        form.setValue("occasion_ids", newIds);
        setSelectedOccasionIds(newIds);
    };

    const removeOccasionId = (occasionId: number) => {
        const newIds = selectedOccasionIds.filter((id) => id !== occasionId);
        form.setValue("occasion_ids", newIds);
        setSelectedOccasionIds(newIds);
    };

    return (
        <Form {...form}>
            <div className="relative">
                {/* Loading Overlay */}
                {isLoading && (
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm z-10 flex items-center justify-center rounded-lg">
                        <div className="flex items-center space-x-2">
                            <div className="animate-spin rounded-full h-4 w-4 border-2 border-foreground border-t-transparent"></div>
                            <span className="text-sm font-medium">
                                Сохранение...
                            </span>
                        </div>
                    </div>
                )}

                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                >
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <div>
                                <CardTitle>Основная информация</CardTitle>
                            </div>
                            <FormField
                                control={form.control}
                                name="is_active"
                                render={({ field }) => (
                                    <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                                        <div className="flex items-center space-x-2">
                                            <Badge
                                                variant={
                                                    field.value
                                                        ? "outline"
                                                        : "secondary"
                                                }
                                                className={
                                                    field.value
                                                        ? "border-green-500 text-green-600 bg-green-50"
                                                        : "border-red-500 text-red-600 bg-red-50"
                                                }
                                            >
                                                {field.value
                                                    ? "Активен"
                                                    : "Неактивен"}
                                            </Badge>
                                            <FormControl>
                                                <Switch
                                                    checked={field.value}
                                                    onCheckedChange={
                                                        field.onChange
                                                    }
                                                />
                                            </FormControl>
                                        </div>
                                    </FormItem>
                                )}
                            />
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                {/* Name */}
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Название</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Название товара"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* Price */}
                                <FormField
                                    control={form.control}
                                    name="price"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Цена (₽)</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="number"
                                                    placeholder="0"
                                                    value={field.value || ""}
                                                    onChange={(e) =>
                                                        field.onChange(
                                                            e.target.value
                                                                ? Number(
                                                                      e.target
                                                                          .value
                                                                  )
                                                                : undefined
                                                        )
                                                    }
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            {/* Description */}
                            <FormField
                                control={form.control}
                                name="descriptionRu"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Описание</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Описание товара на русском языке"
                                                className="min-h-[100px]"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Dimensions: Width and Height */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="width"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Ширина (см)</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="number"
                                                    placeholder="0"
                                                    value={field.value || ""}
                                                    onChange={(e) =>
                                                        field.onChange(
                                                            e.target.value
                                                                ? Number(
                                                                      e.target
                                                                          .value
                                                                  )
                                                                : undefined
                                                        )
                                                    }
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="height"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Высота (см)</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="number"
                                                    placeholder="0"
                                                    value={field.value || ""}
                                                    onChange={(e) =>
                                                        field.onChange(
                                                            e.target.value
                                                                ? Number(
                                                                      e.target
                                                                          .value
                                                                  )
                                                                : undefined
                                                        )
                                                    }
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            {/* Category */}
                            <FormField
                                control={form.control}
                                name="category"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="h-4">
                                            Категория
                                        </FormLabel>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <FormControl>
                                                <SelectTrigger className="w-full cursor-pointer">
                                                    <SelectValue placeholder="Выберите категорию" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {categories.map((category) => (
                                                    <SelectItem
                                                        key={category.id}
                                                        value={category.slug}
                                                    >
                                                        {category.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Occasions */}
                            <FormField
                                control={form.control}
                                name="occasion_ids"
                                render={() => (
                                    <FormItem>
                                        <FormLabel className="h-4">
                                            Поводы
                                        </FormLabel>
                                        <div className="space-y-2">
                                            <Select
                                                onValueChange={(value) =>
                                                    toggleOccasionId(
                                                        parseInt(value)
                                                    )
                                                }
                                            >
                                                <SelectTrigger className="w-full cursor-pointer">
                                                    <SelectValue placeholder="Выберите поводы" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {occasions.map(
                                                        (occasion) => (
                                                            <SelectItem
                                                                key={
                                                                    occasion.id
                                                                }
                                                                value={occasion.id.toString()}
                                                            >
                                                                {occasion.label}
                                                            </SelectItem>
                                                        )
                                                    )}
                                                </SelectContent>
                                            </Select>
                                            {selectedOccasionIds.length > 0 && (
                                                <div className="flex flex-wrap gap-2">
                                                    {selectedOccasionIds.map(
                                                        (occasionId) => {
                                                            const occasion =
                                                                occasions.find(
                                                                    (o) =>
                                                                        o.id ===
                                                                        occasionId
                                                                );

                                                            return (
                                                                <Badge
                                                                    key={
                                                                        occasionId
                                                                    }
                                                                    variant="secondary"
                                                                    onClick={() =>
                                                                        removeOccasionId(
                                                                            occasionId
                                                                        )
                                                                    }
                                                                    className="hover:line-through active:line-through cursor-pointer"
                                                                >
                                                                    {occasion?.label ||
                                                                        occasion?.slug}
                                                                </Badge>
                                                            );
                                                        }
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Элементы</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {itemFields.length > 0 && (
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Название элемента</TableHead>
                                                <TableHead>Количество</TableHead>
                                                <TableHead className="text-right">
                                                    Действия
                                                </TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {itemFields.map((field, index) => (
                                                <TableRow key={field.id}>
                                                    <TableCell>
                                                        <FormField
                                                            control={
                                                                form.control
                                                            }
                                                            name={`items.${index}.name`}
                                                            render={({
                                                                field,
                                                            }) => (
                                                                <FormItem>
                                                                    <FormControl>
                                                                        <Input
                                                                            placeholder="Роза, Гипсофила и т.д."
                                                                            {...field}
                                                                        />
                                                                    </FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )}
                                                        />
                                                    </TableCell>
                                                    <TableCell>
                                                        <FormField
                                                            control={
                                                                form.control
                                                            }
                                                            name={`items.${index}.quantity`}
                                                            render={({
                                                                field,
                                                            }) => (
                                                                <FormItem>
                                                                    <FormControl>
                                                                        <Input
                                                                            type="number"
                                                                            min="1"
                                                                            {...field}
                                                                            onChange={(
                                                                                e
                                                                            ) =>
                                                                                field.onChange(
                                                                                    parseInt(
                                                                                        e
                                                                                            .target
                                                                                            .value
                                                                                    ) ||
                                                                                        1
                                                                                )
                                                                            }
                                                                        />
                                                                    </FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )}
                                                        />
                                                    </TableCell>
                                                    <TableCell className="text-right">
                                                        <Button
                                                            type="button"
                                                            variant="ghost"
                                                            size="sm"
                                                            onClick={() =>
                                                                removeItem(
                                                                    index
                                                                )
                                                            }
                                                        >
                                                            <Trash2 className="h-4 w-4" />
                                                        </Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                )}

                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={addItem}
                                >
                                    <Plus className="mr-2 h-4 w-4" />
                                    Добавить элемент
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    <ProductImageManager
                        control={form.control}
                        productId={product.id}
                    />

                    <div className="flex justify-end">
                        <Button
                            type="submit"
                            size="lg"
                            disabled={isLoading}
                            className="cursor-pointer w-full"
                        >
                            {isLoading ? (
                                "Сохранение..."
                            ) : (
                                <>
                                    <Save className="mr-2 h-4 w-4" />
                                    Сохранить товар
                                </>
                            )}
                        </Button>
                    </div>
                </form>
            </div>
        </Form>
    );
}
