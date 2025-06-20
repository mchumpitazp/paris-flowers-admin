import { notFound } from "next/navigation";
import { ProductEditForm } from "./components/ProductEditForm";
import {
    getProductById,
    getAllOccasions,
    getAllCategories,
} from "../../utils/queries";

interface ProductEditPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function ProductEditPage({
    params,
}: ProductEditPageProps) {
    const { id } = await params;
    const [product, occasions, categories] = await Promise.all([
        getProductById(id),
        getAllOccasions(),
        getAllCategories(),
    ]);

    if (!product) {
        notFound();
    }

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">
                    Редактировать товар
                </h1>
                <p className="text-muted-foreground">
                    Обновите детали товара и управляйте изображениями
                </p>
            </div>

            <ProductEditForm
                product={product}
                occasions={occasions}
                categories={categories}
            />
        </div>
    );
}
