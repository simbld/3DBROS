import { Field, Int, ObjectType } from "@nestjs/graphql";
import { IsArray, IsInt, IsNotEmpty, IsPositive } from "class-validator";
import { Type } from "class-transformer";
import { CartItem } from "@entityCartItem";
import { User } from "@entityUser";

/**
 * Entity representing a Cart in the e-commerce system.
 * This class defines the structure of a Cart for GraphQL responses.
 * @class Cart
 * @property {number} id - The ID of the cart.
 * @property {CartItem[]} cartItems - The list of items in the cart.
 * @property {number} userId - The ID of the user associated with the cart.
 * @property {User} user - The user entity associated with the cart.
 * @constructor Cart
 */
@ObjectType()
export class Cart {
  @Field(() => Int)
  @IsInt()
  @IsPositive({ message: "Cart ID must be a positive integer" })
  @IsNotEmpty({ message: "Cart ID is required" })
  id: number;

  @Field(() => [CartItem])
  @IsArray()
  @Type(() => CartItem)
  @IsNotEmpty({ message: "Cart must have at least one item" })
  cartItems: CartItem[];

  @Field(() => Int)
  @IsInt()
  @IsPositive({ message: "User ID must be a positive integer" })
  @IsNotEmpty({ message: "User ID is required" })
  userId: number;

  @Field(() => User)
  @Type(() => User)
  @IsNotEmpty({ message: "User is required" })
  user: User;

  constructor(id: number, cartItems: CartItem[], userId: number, user: User) {
    this.id = id;
    this.cartItems = cartItems;
    this.userId = userId;
    this.user = user;
  }
}
