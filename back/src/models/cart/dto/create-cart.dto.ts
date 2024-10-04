import { IsInt, IsArray, IsNotEmpty } from "class-validator";
import { Type } from "class-transformer";
import { CartItem } from "@entityCartItem/cart-item.entity";

/**
 * DTO for creating a Cart.
 * This DTO is used to validate the input when creating a new cart.
 */
export class CreateCartDto {
  @IsInt()
  @IsNotEmpty({ message: "User ID is required" })
  userId: number;

  @IsArray()
  @IsNotEmpty({ message: "Cart items are required" })
  @Type(() => CartItem)
  cartItems: CartItem[];

  constructor(userId: number, cartItems: CartItem[]) {
    this.userId = userId;
    this.cartItems = cartItems;
  }
}
