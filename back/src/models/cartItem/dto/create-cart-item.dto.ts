import {
  IsInt,
  IsNumber,
  IsNotEmpty,
  IsEnum,
  IsPositive,
} from "class-validator";
import { OrderStatus } from "@enums/order-status.enum";

/**
 * DTO for creating a CartItem.
 * This DTO is used to validate the input when creating a new cart item.
 */
export class CreateCartItemDto {
  @IsInt()
  @IsNotEmpty({ message: "Product ID is required" })
  productId: number;

  @IsNumber()
  @IsPositive({ message: "Price must be a positive number" })
  @IsNotEmpty({ message: "Price is required" })
  price: number;

  @IsInt()
  @IsPositive({ message: "Quantity must be a positive integer" })
  @IsNotEmpty({ message: "Quantity is required" })
  quantity: number;

  @IsEnum(OrderStatus, { message: "Invalid order status" })
  @IsNotEmpty({ message: "Order status is required" })
  status: OrderStatus;

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
