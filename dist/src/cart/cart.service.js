"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const cart_entity_1 = require("./entities/cart.entity");
const cart_item_entity_1 = require("./entities/cart-item.entity");
const product_entity_1 = require("../products/entities/product.entity");
let CartService = class CartService {
    constructor(cartRepository, cartItemRepository, productRepository) {
        this.cartRepository = cartRepository;
        this.cartItemRepository = cartItemRepository;
        this.productRepository = productRepository;
    }
    async findOrCreateCart(user) {
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
    async addToCart(user, addToCartDto) {
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
        }
        else {
            cartItem = this.cartItemRepository.create({
                cart,
                product,
                quantity: addToCartDto.quantity,
            });
        }
        await this.cartItemRepository.save(cartItem);
        return this.findOrCreateCart(user);
    }
    async updateCartItem(user, itemId, updateCartItemDto) {
        const cart = await this.findOrCreateCart(user);
        const cartItem = await this.cartItemRepository.findOne({
            where: { id: itemId, cart: { id: cart.id } },
        });
        if (!cartItem) {
            throw new Error(`Cart item with ID ${itemId} not found`);
        }
        cartItem.quantity = updateCartItemDto.quantity;
        await this.cartItemRepository.save(cartItem);
        return this.findOrCreateCart(user);
    }
    async removeCartItem(user, itemId) {
        const cart = await this.findOrCreateCart(user);
        const cartItem = await this.cartItemRepository.findOne({
            where: { id: itemId, cart: { id: cart.id } },
        });
        if (!cartItem) {
            throw new Error(`Cart item with ID ${itemId} not found`);
        }
        await this.cartItemRepository.remove(cartItem);
        return this.findOrCreateCart(user);
    }
    async getCart(user) {
        return this.findOrCreateCart(user);
    }
    async clearCart(user) {
        const cart = await this.findOrCreateCart(user);
        await this.cartItemRepository.delete({ cart: { id: cart.id } });
    }
};
exports.CartService = CartService;
exports.CartService = CartService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cart_entity_1.Cart)),
    __param(1, (0, typeorm_1.InjectRepository)(cart_item_entity_1.CartItem)),
    __param(2, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], CartService);
//# sourceMappingURL=cart.service.js.map