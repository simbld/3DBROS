import {
  IsInt,
  IsNumber,
  IsOptional,
  IsEnum,
  IsPositive,
} from "class-validator";
import { OrderStatus } from "@enums/order-status.enum";
import { Field, Float, Int } from "@nestjs/graphql";

/**
 * DTO for updating a CartItem.
 * This DTO is used to validate the input when updating an existing cart item.
 */
export class UpdateCartItemDto {
  @Field(() => Int)
  @IsInt()
  @IsOptional()
  @IsPositive({ message: "Product ID must be a positive integer" })
  productId?: number;

  @Field(() => Float)
  @IsNumber()
  @IsPositive({ message: "Price must be a positive number" })
  @IsOptional()
  price?: number;

  @Field(() => Int)
  @IsInt()
  @IsPositive({ message: "Quantity must be a positive integer" })
  @IsOptional()
  quantity?: number;

  @Field(() => OrderStatus)
  @IsEnum(OrderStatus, { message: "Invalid order status" })
  @IsOptional()
  status?: OrderStatus;

  constructor(
    productId?: number,
    price?: number,
    quantity?: number,
    status?: OrderStatus,
  ) {
    this.productId = productId;
    this.price = price;
    this.quantity = quantity;
    this.status = status;
  }
}
