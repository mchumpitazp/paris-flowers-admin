"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Loader2, AlertCircle } from "lucide-react";

export default function NewProductPage() {
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const createProduct = async () => {
            try {
                const response = await fetch("/api/products", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: "Новый товар",
                        is_active: false,
                    }),
                });

                if (!response.ok) {
                    throw new Error("Failed to create product");
                }

                const { product } = await response.json();
                router.push(`/products/${product.id}/edit`);
            } catch (error) {
                console.error("Failed to create product:", error);
                setError("Не удалось создать товар. Попробуйте еще раз.");
            }
        };

        createProduct();
    }, [router]);

    if (error) {
        return (
            <div className="flex min-h-[50vh] items-center justify-center">
                <div className="text-center space-y-4">
                    <AlertCircle className="h-8 w-8 mx-auto text-destructive" />
                    <div>
                        <h3 className="text-lg font-semibold">Ошибка создания товара</h3>
                        <p className="text-sm text-muted-foreground mt-1">{error}</p>
                    </div>
                    <Button onClick={() => router.push("/products")}>
                        Вернуться к товарам
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex min-h-[50vh] items-center justify-center">
            <div className="text-center space-y-4">
                <Loader2 className="h-8 w-8 mx-auto animate-spin" />
                <div>
                    <h3 className="text-lg font-semibold">Создание товара</h3>
                    <p className="text-sm text-muted-foreground">
                        Пожалуйста, подождите...
                    </p>
                </div>
            </div>
        </div>
    );
}
