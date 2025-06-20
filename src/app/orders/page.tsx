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
import { getAllOrders } from "./utils/queries";
import { DeliveryDistrictValue, getDeliveryLabel } from "./utils/constants";

function formatDateTime(date: Date): string {
    return new Intl.DateTimeFormat("ru-RU", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    }).format(date);
}

function formatDate(date: Date): string {
    return new Intl.DateTimeFormat("ru-RU", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    }).format(date);
}

function BooleanBadge({ value }: { value: boolean }) {
    return (
        <Badge
            variant={value ? "outline" : "secondary"}
            className={
                value
                    ? "bg-green-100 text-green-600 border-green-400"
                    : "bg-muted text-muted-foreground"
            }
        >
            {value ? "Да" : "Нет"}
        </Badge>
    );
}

export default async function OrdersPage() {
    const orders = await getAllOrders();

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">
                        Заказы
                    </h1>
                    <p className="text-muted-foreground">
                        Управление заказами и доставками
                    </p>
                </div>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Все заказы</CardTitle>
                    <CardDescription>
                        Список всех заказов с подробной информацией о клиентах и
                        доставке.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {orders.length === 0 ? (
                        <div className="text-center py-8">
                            <p className="text-muted-foreground">
                                Заказы не найдены.
                            </p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>№</TableHead>
                                        <TableHead>Имя клиента</TableHead>
                                        <TableHead>Телефон клиента</TableHead>
                                        <TableHead>Почта клиента</TableHead>
                                        <TableHead>Адрес доставки</TableHead>
                                        <TableHead>Район доставки</TableHead>
                                        <TableHead>
                                            Дата и время доставки
                                        </TableHead>
                                        <TableHead>Нужна открытка</TableHead>
                                        <TableHead>Текст открытки</TableHead>
                                        <TableHead>Другой получатель</TableHead>
                                        <TableHead>
                                            Телефон получателя
                                        </TableHead>
                                        <TableHead>Дата создания</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {orders.map((order) => (
                                        <TableRow key={order.id}>
                                            {/* Order ID */}
                                            <TableCell>#{order.id}</TableCell>

                                            {/* Customer Name */}
                                            <TableCell>
                                                {order.customer_name}
                                            </TableCell>

                                            {/* Customer Phone */}
                                            <TableCell>
                                                {order.customer_phone}
                                            </TableCell>

                                            {/* Customer Email */}
                                            <TableCell>
                                                {order.customer_email || (
                                                    <span className="text-muted-foreground">
                                                        -
                                                    </span>
                                                )}
                                            </TableCell>

                                            {/* Delivery Address */}
                                            <TableCell className="max-w-48">
                                                <span className="truncate block">
                                                    {order.delivery_address}
                                                </span>
                                            </TableCell>

                                            {/* Delivery District */}
                                            <TableCell>
                                                <Badge variant="outline">
                                                    {getDeliveryLabel(
                                                        order.delivery_district as DeliveryDistrictValue
                                                    )}
                                                </Badge>
                                            </TableCell>

                                            {/* Delivery DateTime */}
                                            <TableCell>
                                                {formatDateTime(
                                                    order.delivery_datetime
                                                )}
                                            </TableCell>

                                            {/* Needs Card */}
                                            <TableCell>
                                                <BooleanBadge
                                                    value={order.needs_card}
                                                />
                                            </TableCell>

                                            {/* Card Text */}
                                            <TableCell className="max-w-32">
                                                {order.card_text ? (
                                                    <span className="truncate block text-sm">
                                                        {order.card_text}
                                                    </span>
                                                ) : (
                                                    <span className="text-muted-foreground">
                                                        -
                                                    </span>
                                                )}
                                            </TableCell>

                                            {/* Is Different Recipient */}
                                            <TableCell>
                                                <BooleanBadge
                                                    value={
                                                        order.is_different_recipient
                                                    }
                                                />
                                            </TableCell>

                                            {/* Recipient Phone */}
                                            <TableCell>
                                                {order.recipient_phone || (
                                                    <span className="text-muted-foreground">
                                                        -
                                                    </span>
                                                )}
                                            </TableCell>

                                            {/* Created At */}
                                            <TableCell>
                                                {formatDate(order.created_at)}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
