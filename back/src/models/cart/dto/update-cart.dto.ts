import { IsInt, IsOptional, IsArray, IsNotEmpty } from "class-validator";
import { Type } from "class-transformer";
import { CartItem } from "@entityCartItem/cart-item.entity";

/**
 * DTO for updating a Cart.
 * This DTO is used to validate the input when updating an existing cart.
 */
export class UpdateCartDto {
  @IsInt()
  @IsOptional() // Le userId est facultatif dans le cas d'une mise à jour
  userId?: number;

  @IsArray()
  @IsOptional() // Les items peuvent être facultatifs lors d'une mise à jour
  @IsNotEmpty({ message: "Cart items cannot be empty" })
  @Type(() => CartItem)
  cartItems?: CartItem[];
}
