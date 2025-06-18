export type Category = {
    value: string;
    label: string;
    image: string;
};

export const CATEGORIES: Category[] = [
    {
        value: "discount",
        label: "Акции",
        image: "/category-discounts.webp",
    },
    {
        value: "popular",
        label: "Популярные",
        image: "/category-popular.webp",
    },
    {
        value: "signature_bouquet",
        label: "Авторские букеты",
        image: "/category-designer.webp",
    },
    {
        value: "mono_bouquet",
        label: "Монобукеты",
        image: "/category-mono.webp",
    },
    {
        value: "soft_toy",
        label: "Мягкие игрушки",
        image: "/category-toys.webp",
    },
    {
        value: "wedding_bouquet",
        label: "Свадебные букеты",
        image: "/category-wedding.webp",
    },
    {
        value: "single_flower",
        label: "Цветы поштучно",
        image: "/category-single.webp",
    },
    {
        value: "box_basket",
        label: "Коробки/Корзины",
        image: "/category-boxes.webp",
    },
    {
        value: "chocolate",
        label: "Шоколадные композиции",
        image: "/category-chocolate.webp",
    },
    {
        value: "balloon",
        label: "Шары",
        image: "/category-balloons.webp",
    },
];

// Helper function to get category by slug
export function getCategoryBySlug(slug: string): Category | undefined {
    return CATEGORIES.find((category) => category.value === slug);
}
