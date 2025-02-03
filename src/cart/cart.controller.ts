import {
  Controller,
  Post,
  Body,
  UseGuards,
  Get,
  Param,
  Delete,
  Patch,
  Req,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RequestWithUser } from 'src/auth/request-with-user.interface';

@Controller('cart')
@UseGuards(JwtAuthGuard) // Protect all routes with JWT authentication
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post('add')
  addToCart(@Req() req: RequestWithUser, @Body() addToCartDto: AddToCartDto) {
    return this.cartService.addToCart(req.user, addToCartDto);
  }

  @Get()
  getCart(@Req() req: RequestWithUser) {
    return this.cartService.getCart(req.user);
  }

  @Patch('items/:id')
  updateCartItem(
    @Req() req: RequestWithUser,
    @Param('id') itemId: string,
    @Body() updateCartItemDto: UpdateCartItemDto,
  ) {
    return this.cartService.updateCartItem(
      req.user,
      +itemId,
      updateCartItemDto,
    );
  }

  @Delete('items/:id')
  removeCartItem(@Req() req: RequestWithUser, @Param('id') itemId: string) {
    return this.cartService.removeCartItem(req.user, +itemId);
  }

  @Delete('clear')
  clearCart(@Req() req: RequestWithUser) {
    return this.cartService.clearCart(req.user);
  }
}
