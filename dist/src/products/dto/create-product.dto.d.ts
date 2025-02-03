export declare class CreateProductDto {
    name: string;
    slug: string;
    description?: string;
    price: number;
    discount_percent?: number;
    quantity?: number;
    images?: string[];
    videos?: string[];
    categoryIds?: number[];
}
