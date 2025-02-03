export class CreateOrderDto {
  userId: number;
  items: Array<{
    productId: number;
    quantity: number;
  }>;
}
