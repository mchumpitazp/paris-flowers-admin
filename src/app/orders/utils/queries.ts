import prisma from "@/lib/prisma";

export async function getAllOrders() {
    try {
        const orders = await prisma.orders.findMany({
            orderBy: {
                created_at: "desc",
            },
        });
        return orders;
    } catch (error) {
        console.error("Failed to fetch orders:", error);
        return [];
    }
}

export async function getOrderById(id: string) {
    try {
        const order = await prisma.orders.findUnique({
            where: { id: parseInt(id) },
        });
        return order;
    } catch (error) {
        console.error("Failed to fetch order:", error);
        return null;
    }
} 