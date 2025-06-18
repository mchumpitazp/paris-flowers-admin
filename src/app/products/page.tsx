import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Edit, ImageIcon, Plus } from "lucide-react";
import { getCategoryBySlug } from "@/lib/constants/categories";
import { getAllProducts } from "./utils/queries";

function formatPrice(price: number): string {
    return new Intl.NumberFormat("ru-RU", {
        style: "currency",
        currency: "RUB",
        maximumFractionDigits: 2,
        minimumFractionDigits: 0,
    }).format(price);
}

export default async function ProductsPage() {
    const products = await getAllProducts();
    const baseImageUrl = `${process.env.NEXT_PUBLIC_TIMEWEB_S3_URL}/${process.env.NEXT_PUBLIC_TIMEWEB_S3_BUCKET}`;

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">
                        Товары
                    </h1>
                    <p className="text-muted-foreground">
                        Управляйте цветочными композициями и товарами
                    </p>
                </div>
                <Button asChild>
                    <Link href="/products/new">
                        <Plus className="mr-2 h-4 w-4" />
                        Добавить товар
                    </Link>
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Все товары</CardTitle>
                    <CardDescription>
                        Список всех ваших товаров с их деталями и статусом.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {products.length === 0 ? (
                        <div className="text-center py-8">
                            <p className="text-muted-foreground mb-4">
                                Товары не найдены.
                            </p>
                            <Button asChild>
                                <Link href="/products/new">
                                    <Plus className="mr-2 h-4 w-4" />
                                    Создать первый товар
                                </Link>
                            </Button>
                        </div>
                    ) : (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>
                                        <div className="w-12 flex justify-center">
                                            <ImageIcon className="size-4" />
                                        </div>
                                    </TableHead>
                                    <TableHead>Статус</TableHead>
                                    <TableHead>Название</TableHead>
                                    <TableHead>Категория</TableHead>
                                    <TableHead>Цена</TableHead>
                                    <TableHead>Повод</TableHead>
                                    <TableHead>Создан</TableHead>
                                    <TableHead className="text-right">
                                        Действия
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {products.map((product) => (
                                    <TableRow key={product.id}>
                                        {/* Primary Image */}
                                        <TableCell>
                                            {product.product_images[0]
                                                ?.image_url ? (
                                                <Image
                                                    src={`${baseImageUrl}/${product.product_images[0].image_url}`}
                                                    alt={product.name}
                                                    width={48}
                                                    height={48}
                                                    className="size-12 rounded-md object-cover"
                                                />
                                            ) : (
                                                <div className="w-12 h-12 rounded-md bg-muted flex items-center justify-center">
                                                    <ImageIcon className="size-4 text-muted-foreground" />
                                                </div>
                                            )}
                                        </TableCell>

                                        {/* Status */}
                                        <TableCell>
                                            <Badge
                                                variant={
                                                    product.is_active
                                                        ? "outline"
                                                        : "secondary"
                                                }
                                                className={
                                                    product.is_active
                                                        ? "border-green-500 text-green-600 bg-green-100"
                                                        : "border-muted text-muted-foreground bg-muted"
                                                }
                                            >
                                                {product.is_active
                                                    ? "Активен"
                                                    : "Неактивен"}
                                            </Badge>
                                        </TableCell>

                                        {/* Name */}
                                        <TableCell className="font-medium">
                                            {product.name}
                                        </TableCell>

                                        {/* Category */}
                                        <TableCell>
                                            {product.category ? (
                                                <Badge variant="secondary">
                                                    {getCategoryBySlug(
                                                        product.category
                                                    )?.label ||
                                                        product.category}
                                                </Badge>
                                            ) : (
                                                <span className="text-muted-foreground">
                                                    -
                                                </span>
                                            )}
                                        </TableCell>

                                        {/* Price */}
                                        <TableCell>
                                            {product.price ? (
                                                formatPrice(product.price)
                                            ) : (
                                                <span className="text-muted-foreground">
                                                    -
                                                </span>
                                            )}
                                        </TableCell>

                                        {/* Occasion */}
                                        <TableCell>
                                            {product.occasion ? (
                                                <Badge
                                                    variant="outline"
                                                    className="max-w-48"
                                                >
                                                    <span className="truncate">
                                                        {product.occasion}
                                                    </span>
                                                </Badge>
                                            ) : (
                                                <span className="text-muted-foreground">
                                                    -
                                                </span>
                                            )}
                                        </TableCell>
                                        <TableCell>
                                            {product.createdAt ? (
                                                new Date(
                                                    product.createdAt
                                                ).toLocaleDateString("ru-RU", {
                                                    day: "2-digit",
                                                    month: "2-digit",
                                                    year: "numeric",
                                                })
                                            ) : (
                                                <span className="text-muted-foreground">
                                                    -
                                                </span>
                                            )}
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                asChild
                                            >
                                                <Link
                                                    href={`/products/${product.id}/edit`}
                                                >
                                                    <Edit className="h-4 w-4" />
                                                </Link>
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
