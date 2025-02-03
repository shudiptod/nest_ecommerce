// src/cart/dto/add-to-cart.dto.ts
import { IsNumber, IsNotEmpty } from 'class-validator';

export class AddToCartDto {
  @IsNumber()
  @IsNotEmpty()
  product_id: number;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;
}
