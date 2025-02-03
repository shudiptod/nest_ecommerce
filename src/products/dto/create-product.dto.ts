// src/products/dto/create-product.dto.ts
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  Max,
  IsArray,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  slug: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(0.01, { message: 'Price must be at least 0.01' })
  price: number;

  @IsNumber()
  @IsOptional()
  @Min(0, { message: 'Discount must be between 0 and 100' })
  @Max(100, { message: 'Discount must be between 0 and 100' })
  discount_percent?: number;

  @IsNumber()
  @IsOptional()
  quantity?: number;

  @IsArray()
  @IsOptional()
  images?: string[];

  @IsArray()
  @IsOptional()
  videos?: string[];

  @IsArray()
  @IsOptional()
  categoryIds?: number[];
}
