import { CartService } from './cart.service';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';
import { RequestWithUser } from 'src/auth/request-with-user.interface';
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    addToCart(req: RequestWithUser, addToCartDto: AddToCartDto): Promise<import("./entities/cart.entity").Cart>;
    getCart(req: RequestWithUser): Promise<import("./entities/cart.entity").Cart>;
    updateCartItem(req: RequestWithUser, itemId: string, updateCartItemDto: UpdateCartItemDto): Promise<import("./entities/cart.entity").Cart>;
    removeCartItem(req: RequestWithUser, itemId: string): Promise<import("./entities/cart.entity").Cart>;
    clearCart(req: RequestWithUser): Promise<void>;
}
