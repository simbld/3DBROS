import {
  IsInt,
  IsNumber,
  IsOptional,
  IsEnum,
  IsPositive,
} from "class-validator";
import { OrderStatus } from "@enums/order-status.enum";

/**
 * DTO for updating a CartItem.
 * This DTO is used to validate the input when updating an existing cart item.
 */
export class UpdateCartItemDto {
  @IsInt()
  @IsOptional()
  productId?: number;

  @IsNumber()
  @IsPositive({ message: "Price must be a positive number" })
  @IsOptional()
  price?: number;

  @IsInt()
  @IsPositive({ message: "Quantity must be a positive integer" })
  @IsOptional()
  quantity?: number;

  @IsEnum(OrderStatus, { message: "Invalid order status" })
  @IsOptional()
  status?: OrderStatus;

  constructor(
    productId: number,
    price: number,
    quantity: number,
    status: OrderStatus,
  ) {
    this.productId = productId;
    this.price = price;
    this.quantity = quantity;
    this.status = status;
  }
}
