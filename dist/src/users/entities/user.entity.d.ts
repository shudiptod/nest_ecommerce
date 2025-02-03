import { Cart } from '../../cart/entities/cart.entity';
import { Order } from '../../order/entities/order.entity';
export declare class User {
    id: number;
    name: string;
    email: string;
    password: string;
    created_at: Date;
    updated_at: Date;
    is_active: boolean;
    carts: Cart[];
    orders: Order[];
    hashPassword(): Promise<void>;
}
