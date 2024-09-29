import { InputType, Field, Int } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

/**
 * DTO for creating a CartItem.
 * This class defines the structure of the input needed to create an item for a specific order.
 *
 * @class CreateCartItemInput
 * @property {number} productId - The ID of the product.
 * @property {string} productName - The name of the product.
 * @property {number} quantity - The quantity of the product.
 * @property {number} price - The price of the product.
 * @property {number} totalPrice - The total price for this CartItem.
 * @property {string} status - The status of the CartItem (e.g., 'available', 'out of stock').
 */
@InputType()
export class CreateCartItemInput {
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
  totalPrice: number;

  @Field()
  @IsNotEmpty()
  @IsString()
  status: string;
}
