import { Cart } from './cart.entity';
import { Product } from '../../products/entities/product.entity';
export declare class CartItem {
    id: number;
    cart: Cart;
    product: Product;
    quantity: number;
}
