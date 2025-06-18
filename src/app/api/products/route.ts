import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name = "Новый товар", is_active = false } = body;

        const product = await prisma.products.create({
            data: {
                name,
                is_active,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        });

        return NextResponse.json({ 
            product,
            message: "Product created successfully" 
        });
    } catch (error) {
        console.error("Failed to create product:", error);
        return NextResponse.json(
            { 
                error: "Failed to create product",
                details: error instanceof Error ? error.message : "Unknown error" 
            },
            { status: 500 }
        );
    }
} 