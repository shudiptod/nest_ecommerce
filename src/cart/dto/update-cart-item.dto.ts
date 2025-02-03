// src/cart/dto/update-cart-item.dto.ts
import { IsNumber, IsNotEmpty } from 'class-validator';

export class UpdateCartItemDto {
  @IsNumber()
  @IsNotEmpty()
  quantity: number;
}
