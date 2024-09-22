import { Field, Int, InputType } from "@nestjs/graphql";
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsArray,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { CartItemInput } from "./cart-item.input";

/**
 * DTO representing the input for creating a new order.
 * This class is used to define the structure of the input when creating a new order via GraphQL mutations.
 *
 * @class CreateOrderInput
 * @property {number} userId - The ID of the user placing the order.
 * @property {string} customer - The customer who placed the order.
 * @property {string} address - The address for the delivery.
 * @property {number} price - The total price of the order.
 * @property {number} quantity - The total quantity of items in the order.
 * @property {CartItemInput[]} items - The list of items in the order.
 * @property {string} status - The status of the order (e.g., pending, shipped, delivered).
 * @property {number} totalPrice - The total price of the order (calculated from all items).
 */
@InputType()
export class CreateOrderInput {
  @Field(() => Int)
  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @Field()
  @IsNotEmpty()
  @IsString()
  customer: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  address: string;

  @Field(() => Int)
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @Field(() => Int)
  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @Field(() => [CartItemInput])
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CartItemInput) // Use CartItemInput for each item in the order
  items: CartItemInput[];

  @Field()
  @IsNotEmpty()
  @IsString()
  status: string; // Example: "pending", "shipped", "delivered"

  @Field(() => Int)
  @IsNotEmpty()
  @IsNumber()
  totalPrice: number; // The total price for the order (sum of all CartItem totalPrices)
}
