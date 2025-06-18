import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, ShoppingCart } from "lucide-react";
import prisma from "@/lib/prisma";

export default async function Dashboard() {
    // Get counts from database
    const [productsCount, ordersCount] = await Promise.all([
        prisma.products.count(),
        prisma.orders.count(),
    ]);

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">
                    Панель управления
                </h1>
                <p className="text-muted-foreground">
                    Добро пожаловать в панель администратора Paris Flowers
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {/* All Products */}
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Всего товаров
                        </CardTitle>
                        <Package className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">
                            {productsCount}
                        </div>
                        <p className="text-xs text-muted-foreground">
                            Цветочные композиции
                        </p>
                    </CardContent>
                </Card>

                {/* All Orders */}
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Всего заказов
                        </CardTitle>
                        <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{ordersCount}</div>
                        <p className="text-xs text-muted-foreground">
                            Заказы клиентов
                        </p>
                    </CardContent>
                </Card>
                {/* 
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Выручка
                        </CardTitle>
                        <BarChart3 className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">€0</div>
                        <p className="text-xs text-muted-foreground">
                            В этом месяце
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Клиенты
                        </CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">0</div>
                        <p className="text-xs text-muted-foreground">
                            Всего клиентов
                        </p>
                    </CardContent>
                </Card> */}
            </div>
        </div>
    );
}
