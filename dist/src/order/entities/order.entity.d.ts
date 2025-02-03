import { User } from '../../users/entities/user.entity';
import { OrderItem } from './order-item.entity';
export declare class Order {
    id: number;
    totalAmount: number;
    status: string;
    user: User;
    userId: number;
    items: OrderItem[];
}
