import { Repository } from 'typeorm';
import { Cart } from './entities/cart.entity';
import { CartItem } from './entities/cart-item.entity';
import { User } from '../users/entities/user.entity';
import { Product } from '../products/entities/product.entity';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';
export declare class CartService {
    private readonly cartRepository;
    private readonly cartItemRepository;
    private readonly productRepository;
    constructor(cartRepository: Repository<Cart>, cartItemRepository: Repository<CartItem>, productRepository: Repository<Product>);
    findOrCreateCart(user: User): Promise<Cart>;
    addToCart(user: User, addToCartDto: AddToCartDto): Promise<Cart>;
    updateCartItem(user: User, itemId: number, updateCartItemDto: UpdateCartItemDto): Promise<Cart>;
    removeCartItem(user: User, itemId: number): Promise<Cart>;
    getCart(user: User): Promise<Cart>;
    clearCart(user: User): Promise<void>;
}
