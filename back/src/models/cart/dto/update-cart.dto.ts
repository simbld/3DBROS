import { IsInt, IsOptional, IsArray, IsPositive } from "class-validator";
import { Type } from "class-transformer";
import { CartItem } from "@entityCartItem";
import { Field, Int } from "@nestjs/graphql";

/**
 * DTO for updating a Cart.
 * This DTO is used to validate the input when updating an existing cart.
 */
export class UpdateCartDto {
  @Field(() => Int)
  @IsInt()
  @IsOptional()
  @IsPositive({ message: "User ID must be a positive integer" })
  userId?: number;

  @Field(() => [CartItem])
  @IsArray()
  @IsOptional()
  @Type(() => CartItem)
  cartItems?: CartItem[];

  constructor(userId?: number, cartItems?: CartItem[]) {
    this.userId = userId;
    this.cartItems = cartItems;
  }
}
