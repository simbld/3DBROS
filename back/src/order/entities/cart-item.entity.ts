import { Field, Int, ObjectType } from "@nestjs/graphql";

/**
 * Entity representing a CartItem in the order.
 * This class is used to define the structure of a CartItem for GraphQL responses.
 *
 * @class CartItem
 * @property {number} productId - The ID of the product.
 * @property {string} productName - The name of the product.
 * @property {number} quantity - The quantity of the product.
 * @property {number} price - The price of a single product.
 * @property {number} totalPrice - The total price of the CartItem.
 */
@ObjectType() // Used to expose fields in GraphQL responses
export class CartItem {
  @Field(() => Int) // Indicates an integer field in GraphQL
  productId: number;

  @Field() // Default is string in GraphQL
  productName: string;

  @Field(() => Int)
  quantity: number;

  @Field(() => Int)
  price: number;

  @Field(() => Int)
  totalPrice: number; // Should be calculated: price * quantity
}
