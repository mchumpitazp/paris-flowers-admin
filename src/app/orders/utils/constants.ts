export const DELIVERY_DISTRICTS = [
    {
        value: "pickup",
        label: "Самовывоз",
        price: 0,
        displayPrice: "Бесплатно",
    },
    {
        value: "adler",
        label: "Адлерский район",
        price: 900,
        displayPrice: "900₽",
    },
    {
        value: "dagomys",
        label: "Дагомыс",
        price: 650,
        displayPrice: "650₽",
    },
    {
        value: "krasnaya-polyana",
        label: "Красная Поляна",
        price: 1900,
        displayPrice: "1900₽",
    },
    {
        value: "lazarevskoye",
        label: "Лазаревское",
        price: 1500,
        displayPrice: "1500₽",
    },
    {
        value: "loo",
        label: "Лоо",
        price: 800,
        displayPrice: "800₽",
    },
    {
        value: "sirius",
        label: "Сириус",
        price: 1000,
        displayPrice: "1000₽",
    },
    {
        value: "khosta-kudepsta",
        label: "Хоста-Кудепста",
        price: 600,
        displayPrice: "600₽",
    },
    {
        value: "central",
        label: "Центральный район",
        price: 300,
        displayPrice: "300₽",
    },
] as const;

// Type definitions for better TypeScript support
export type DeliveryDistrictValue =
    (typeof DELIVERY_DISTRICTS)[number]["value"];

export const getDeliveryLabel = (
    districtValue: DeliveryDistrictValue
): string => {
    const district = DELIVERY_DISTRICTS.find((d) => d.value === districtValue);
    return district?.label ?? "";
};
