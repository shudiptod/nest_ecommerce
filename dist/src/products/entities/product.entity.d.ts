import { Category } from '../../categories/entities/categories.entity';
export declare class Product {
    id: number;
    name: string;
    slug: string;
    description: string;
    price: number;
    discount_percent: number | null;
    discounted_price: number;
    quantity: number;
    images: string[];
    videos: string[];
    categories: Category[];
    created_at: Date;
    updated_at: Date;
    calculateDiscountedPrice(): void;
}
