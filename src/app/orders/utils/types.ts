export type Order = {
    id: number;
    customer_name: string;
    customer_phone: string;
    customer_email: string | null;
    delivery_address: string;
    delivery_district: string;
    delivery_datetime: Date;
    needs_card: boolean;
    card_text: string | null;
    is_different_recipient: boolean;
    recipient_phone: string | null;
    created_at: Date;
}; 