export declare class Category {
    id: number;
    name: string;
    slug: string;
    parent: Category | null;
    children: Category[];
    path: string;
    created_at: Date;
    updated_at: Date;
    generatePath(): void;
}
