"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbData {
    title: string;
    href: string;
    isLast: boolean;
}

function generateBreadcrumbs(pathname: string): BreadcrumbData[] {
    const segments = pathname.split("/").filter(Boolean);
    const breadcrumbs: BreadcrumbData[] = [];

    // Don't add Dashboard root - start with actual segments
    for (let i = 0; i < segments.length; i++) {
        const segment = segments[i];
        
        // Skip "edit" segments
        if (segment === "edit") {
            continue;
        }
        
        const path = "/" + segments.slice(0, i + 1).join("/");

        const getTitle = (segment: string) => {
            switch (segment) {
                case "products":
                    return "Товары";
                case "orders":
                    return "Заказы";
                case "settings":
                    return "Настройки";
                case "new":
                    return "Новый";
                default:
                    return segment.charAt(0).toUpperCase() + segment.slice(1);
            }
        };

        breadcrumbs.push({
            title: getTitle(segment),
            href: path,
            isLast: i === segments.length - 1,
        });
    }

    // Update isLast for the actual last item after filtering
    if (breadcrumbs.length > 0) {
        breadcrumbs.forEach((breadcrumb, index) => {
            breadcrumb.isLast = index === breadcrumbs.length - 1;
        });
    }

    return breadcrumbs;
}

async function fetchProductName(productId: string): Promise<string | null> {
    try {
        const response = await fetch(`/api/products/${productId}/name`);
        if (!response.ok) {
            return null;
        }
        const data = await response.json();
        return data.name;
    } catch (error) {
        console.error("Failed to fetch product name:", error);
        return null;
    }
}

export function Breadcrumbs() {
    const pathname = usePathname();
    const [breadcrumbs, setBreadcrumbs] = React.useState<BreadcrumbData[]>([]);

    React.useEffect(() => {
        async function updateBreadcrumbs() {
            const initialBreadcrumbs = generateBreadcrumbs(pathname);
            
            // Check if we're in a product route with an ID
            const segments = pathname.split("/").filter(Boolean);
            const isProductRoute = segments[0] === "products" && segments[1] && !isNaN(Number(segments[1]));
            
            if (isProductRoute) {
                const productId = segments[1];
                const productName = await fetchProductName(productId);
                
                if (productName) {
                    // Replace the product ID with the product name
                    const updatedBreadcrumbs = initialBreadcrumbs.map((breadcrumb) => {
                        // Check if this breadcrumb title matches the product ID
                        if (breadcrumb.title === productId || 
                            breadcrumb.title === productId.charAt(0).toUpperCase() + productId.slice(1) ||
                            breadcrumb.href.includes(`/products/${productId}`)) {
                            return {
                                ...breadcrumb,
                                title: productName,
                            };
                        }
                        return breadcrumb;
                    });
                    setBreadcrumbs(updatedBreadcrumbs);
                    return;
                }
            }
            
            setBreadcrumbs(initialBreadcrumbs);
        }

        updateBreadcrumbs();
    }, [pathname]);

    if (breadcrumbs.length === 0) {
        return null;
    }

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {breadcrumbs.map((breadcrumb, index) => (
                    <React.Fragment key={`${breadcrumb.href}-${index}`}>
                        <BreadcrumbItem>
                            {breadcrumb.isLast ? (
                                <BreadcrumbPage>
                                    {breadcrumb.title}
                                </BreadcrumbPage>
                            ) : (
                                <BreadcrumbLink asChild>
                                    <Link href={breadcrumb.href}>
                                        {breadcrumb.title}
                                    </Link>
                                </BreadcrumbLink>
                            )}
                        </BreadcrumbItem>
                        {!breadcrumb.isLast && <BreadcrumbSeparator />}
                    </React.Fragment>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    );
}
