/**
 * DTO representing the input for updating a CartItem.
 * @class CartItemUpdateInput
 * @property {number} productId - The ID of the product.
 * @property {string} productName - The name of the product.
 * @property {number} quantity - The updated quantity of the product.
 * @property {number} price - The updated price of the product.
 * @property {number} totalPrice - The updated total price for the CartItem.
 * @property {string} status - The updated status of the product.
 */
import { Field, Int, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

@InputType()
export class CartItemUpdateInput {
  @Field(() => Int)
  @IsNotEmpty()
  @IsNumber()
  productId: number;

  @Field()
  @IsNotEmpty()
  @IsString()
  productName: string;

  @Field(() => Int)
  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @Field(() => Int)
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @Field(() => Int)
  @IsNotEmpty()
  @IsNumber()
  totalPrice: number; // Calculated as price * quantity

  @Field()
  @IsNotEmpty()
  @IsString()
  status: string; // Example: "in stock", "out of stock"
}
