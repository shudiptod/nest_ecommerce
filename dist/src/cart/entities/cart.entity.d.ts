import { User } from '../../users/entities/user.entity';
import { CartItem } from './cart-item.entity';
export declare class Cart {
    id: number;
    user: User;
    items: CartItem[];
    created_at: Date;
    updated_at: Date;
}
