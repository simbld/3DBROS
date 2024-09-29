import { InputType, Field, Int } from "@nestjs/graphql";
import { IsInt, IsString, IsOptional, IsNumber } from "class-validator";

/**
 * DTO for updating an item in an order.
 * It ensures proper validation of input data for updating a CartItem.
 *
 * @class UpdateOrderItemInput
 * @property {number} productId - The ID of the product.
 * @property {string} productName - The name of the product.
 * @property {number} quantity - The quantity of the product.
 * @property {number} price - The price of the product.
 * @property {number} totalPrice - The total price of the product (price * quantity).
 * @property {string} status - The status of the item (e.g., "shipped", "pending").
 */
@InputType()
export class UpdateOrderItemInput {
  @Field(() => Int)
  @IsInt()
  productId: number;

  @Field(() => String)
  @IsString()
  @IsOptional() // Optional field for partial updates (e.g., updating name)
  productName?: string;

  @Field(() => Int)
  @IsInt()
  @IsOptional() // Optional for partial updates (e.g., updating quantity)
  quantity?: number;

  @Field(() => Int)
  @IsNumber()
  @IsOptional() // Optional for partial updates (e.g., updating price)
  price?: number;

  @Field(() => Int)
  @IsNumber()
  @IsOptional() // Optional field if not updated (e.g., updating quantity)
  totalPrice?: number;

  @Field(() => String)
  @IsString()
  @IsOptional() // Optional for partial updates (e.g., updating status)
  status?: string;
}
