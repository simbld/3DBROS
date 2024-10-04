import {
  IsInt,
  IsNumber,
  IsNotEmpty,
  IsEnum,
  IsPositive,
} from "class-validator";
import { OrderStatus } from "@enums/order-status.enum";
import { Field, Float, Int } from "@nestjs/graphql";

/**
 * DTO for creating a CartItem.
 * This DTO is used to validate the input when creating a new cart item.
 */
export class CreateCartItemDto {
  @Field(() => Int)
  @IsInt()
  @IsNotEmpty({ message: "Product ID is required" })
  @IsPositive({ message: "Product ID must be a positive integer" })
  productId: number;

  @Field(() => Float)
  @IsNumber()
  @IsPositive({ message: "Price must be a positive number" })
  @IsNotEmpty({ message: "Price is required" })
  price: number;

  @Field(() => Int)
  @IsInt()
  @IsPositive({ message: "Quantity must be a positive integer" })
  @IsNotEmpty({ message: "Quantity is required" })
  quantity: number;

  @Field(() => OrderStatus)
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
