import { InputType, Field, Int } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

/**
 * DTO representing the input for a CartItem in an order.
 * This class is used to define the structure of a CartItem for GraphQL input.
 *
 * @class CartItemInput
 * @property {number} productId - The ID of the product.
 * @property {string} productName - The name of the product.
 * @property {number} quantity - The quantity of the product.
 * @property {number} price - The price of a single product.
 * @property {number} totalPrice - The total price of the CartItem.
 * @property {string} status - The status of the product (e.g., "in stock", "out of stock").
 */
@InputType() // Used to define input types for GraphQL mutations
export class CartItemInput {
  @Field(() => Int) // Field exposed to GraphQL for inputs
  @IsNotEmpty() // Validation to ensure the field is not empty
  @IsNumber() // Ensures that the input is a number
  productId: number;

  @Field() // String field in GraphQL
  @IsNotEmpty() // Validation to ensure the field is not empty
  @IsString() // Ensures that the input is a string
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

  @Field() // GraphQL field for status
  @IsNotEmpty() // Ensures the status is not empty
  @IsString() // Ensures that the status is a string
  status: string; // Example: "in stock", "out of stock"
}
