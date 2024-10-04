import {
  IsInt,
  IsNumber,
  IsNotEmpty,
  IsEnum,
  IsPositive,
} from "class-validator";
import { OrderStatus } from "@enums/order-status.enum";

/**
 * DTO for creating a CartItem.
 * This DTO is used to validate the input when creating a new cart item.
 */
export class CreateCartItemDto {
  @IsInt()
  @IsNotEmpty({ message: "Product ID is required" }) // Le productId ne peut pas être vide
  productId: number;

  @IsNumber()
  @IsPositive({ message: "Price must be a positive number" }) // Le prix doit être positif
  @IsNotEmpty({ message: "Price is required" }) // Le prix ne peut pas être vide
  price: number;

  @IsInt()
  @IsPositive({ message: "Quantity must be a positive integer" }) // La quantité doit être un entier positif
  @IsNotEmpty({ message: "Quantity is required" }) // La quantité ne peut pas être vide
  quantity: number;

  @IsEnum(OrderStatus, { message: "Invalid order status" }) // Vérifie que le statut est une valeur valide de l'énumération OrderStatus
  @IsNotEmpty({ message: "Order status is required" }) // Le statut de la commande ne peut pas être vide
  status: OrderStatus;

  constructor(
    productId: number,
    price: number,
    quantity: number,
    status: OrderStatus,
  ) {
    this.productId = productId;
    this.price = price;
    this.quantity = quantity;
    this.status = status;
  }
}
