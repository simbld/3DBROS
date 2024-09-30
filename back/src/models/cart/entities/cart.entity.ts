import { Field, Int, ObjectType } from "@nestjs/graphql";
import { IsInt, IsArray, IsNotEmpty } from "class-validator";
import { Type } from "class-transformer";
import { User } from "@user/entities/user.entity";
import { CartItem } from "@cartItem/entities/cart-item.entity";

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
  @IsNotEmpty()
  @IsInt()
  id: number;

  @Field(() => [CartItem])
  @IsNotEmpty()
  @IsArray()
  @Type(() => CartItem)
  cartItems: CartItem[];

  @Field(() => Int)
  @IsNotEmpty()
  @IsInt()
  userId: number;

  @Field(() => User)
  @IsNotEmpty()
  @Type(() => User)
  user: User;

  constructor(id: number, cartItems: CartItem[], userId: number, user: User) {
    this.id = id;
    this.cartItems = cartItems;
    this.userId = userId;
    this.user = user;
  }
}
