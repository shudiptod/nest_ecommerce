import { Order } from './order.entity';
import { Product } from '../../products/entities/product.entity';
export declare class OrderItem {
    id: number;
    quantity: number;
    price: number;
    order: Order;
    product: Product;
    productId: number;
}
