// src/cart/cart.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cart } from './entities/cart.entity';
import { CartItem } from './entities/cart-item.entity';
import { User } from '../users/entities/user.entity';
import { Product } from '../products/entities/product.entity';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private readonly cartRepository: Repository<Cart>,
    @InjectRepository(CartItem)
    private readonly cartItemRepository: Repository<CartItem>,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async findOrCreateCart(user: User): Promise<Cart> {
    let cart = await this.cartRepository.findOne({
      where: { user: { id: user.id } },
      relations: ['items', 'items.product'],
    });

    if (!cart) {
      cart = this.cartRepository.create({ user });
      await this.cartRepository.save(cart);
    }

    return cart;
  }

  async addToCart(user: User, addToCartDto: AddToCartDto): Promise<Cart> {
    const cart = await this.findOrCreateCart(user);
    const product = await this.productRepository.findOne({
      where: { id: addToCartDto.product_id },
    });

    if (!product) {
      throw new Error(`Product with ID ${addToCartDto.product_id} not found`);
    }

    let cartItem = await this.cartItemRepository.findOne({
      where: { cart: { id: cart.id }, product: { id: product.id } },
    });

    if (cartItem) {
      cartItem.quantity += addToCartDto.quantity;
    } else {
      cartItem = this.cartItemRepository.create({
        cart,
        product,
        quantity: addToCartDto.quantity,
      });
    }

    await this.cartItemRepository.save(cartItem);
    return this.findOrCreateCart(user); // Refresh the cart
  }

  async updateCartItem(
    user: User,
    itemId: number,
    updateCartItemDto: UpdateCartItemDto,
  ): Promise<Cart> {
    const cart = await this.findOrCreateCart(user);
    const cartItem = await this.cartItemRepository.findOne({
      where: { id: itemId, cart: { id: cart.id } },
    });

    if (!cartItem) {
      throw new Error(`Cart item with ID ${itemId} not found`);
    }

    cartItem.quantity = updateCartItemDto.quantity;
    await this.cartItemRepository.save(cartItem);
    return this.findOrCreateCart(user); // Refresh the cart
  }

  async removeCartItem(user: User, itemId: number): Promise<Cart> {
    const cart = await this.findOrCreateCart(user);
    const cartItem = await this.cartItemRepository.findOne({
      where: { id: itemId, cart: { id: cart.id } },
    });

    if (!cartItem) {
      throw new Error(`Cart item with ID ${itemId} not found`);
    }

    await this.cartItemRepository.remove(cartItem);
    return this.findOrCreateCart(user); // Refresh the cart
  }

  async getCart(user: User): Promise<Cart> {
    return this.findOrCreateCart(user);
  }

  async clearCart(user: User): Promise<void> {
    const cart = await this.findOrCreateCart(user);
    await this.cartItemRepository.delete({ cart: { id: cart.id } });
  }
}
