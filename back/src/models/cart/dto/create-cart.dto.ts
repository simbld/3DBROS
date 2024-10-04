import { IsInt, IsArray, IsNotEmpty, IsPositive } from "class-validator";
import { Type } from "class-transformer";
import { CartItem } from "@entityCartItem";
import { Field, Int } from "@nestjs/graphql";

/**
 * DTO for creating a Cart.
 * This DTO is used to validate the input when creating a new cart.
 */
export class CreateCartDto {
  @Field(() => Int)
  @IsInt()
  @IsPositive({ message: "User ID must be a positive integer" })
  @IsNotEmpty({ message: "User ID is required" })
  userId: number;

  @Field(() => [CartItem])
  @IsArray()
  @Type(() => CartItem)
  @IsNotEmpty({ message: "Cart must have at least one item" })
  cartItems: CartItem[];

  constructor(userId: number, cartItems: CartItem[]) {
    this.userId = userId;
    this.cartItems = cartItems;
  }
}
