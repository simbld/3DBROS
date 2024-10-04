import { Field, Int, ObjectType, Float } from "@nestjs/graphql";
import {
  IsInt,
  IsNumber,
  IsNotEmpty,
  IsString,
  IsEnum,
  IsPositive,
} from "class-validator";
import { Type } from "class-transformer";
import { Product } from "@entityProduct/product.entity";
import { Cart } from "@entityCart/cart.entity";
import { OrderStatus } from "@enums/order-status.enum";

/**
 * Entity representing an item in the cart in the e-commerce system.
 * This class defines the structure of a CartItem for GraphQL responses.
 * @class CartItem
 * @property {number} id - The ID of the cart item.
 * @property {number} productId - The ID of the product.
 * @property {Product} product - The product entity associated with this cart item.
 * @property {number} cartId - The ID of the cart.
 * @property {Cart} cart - The cart entity associated with this item.
 * @property {number} quantity - The quantity of the product in the cart.
 * @property {number} price - The price of the product.
 * @property {OrderStatus} status - The status of the order associated with the cart item.
 * @constructor CartItem
 */
@ObjectType()
export class CartItem {
  @Field(() => Int)
  @IsInt()
  @IsPositive({ message: "ID must be a positive integer" })
  id: number;

  @Field(() => Int)
  @IsInt()
  @IsNotEmpty({ message: "Product ID is required" })
  @IsPositive({ message: "Product ID must be a positive integer" })
  productId: number;

  @Field(() => Product)
  @Type(() => Product)
  @IsNotEmpty({ message: "Product is required" })
  product: Product;

  @Field(() => Int)
  @IsInt()
  @IsNotEmpty({ message: "Cart ID is required" })
  @IsPositive({ message: "Cart ID must be a positive integer" })
  cartId: number;

  @Field(() => Cart)
  @Type(() => Cart)
  @IsNotEmpty({ message: "Cart is required" })
  cart: Cart;

  @Field(() => Int)
  @IsInt()
  @IsPositive({ message: "Quantity must be a positive integer" })
  @IsNotEmpty({ message: "Quantity is required" })
  quantity: number;

  @Field(() => Float)
  @IsNumber()
  @IsPositive({ message: "Price must be a positive number" })
  @IsNotEmpty({ message: "Price is required" })
  price: number;

  @Field(() => OrderStatus)
  @IsEnum(OrderStatus, { message: "Invalid order status" })
  @IsNotEmpty({ message: "Order status is required" })
  status: OrderStatus;

  constructor(
    id: number,
    productId: number,
    product: Product,
    cartId: number,
    cart: Cart,
    quantity: number,
    price: number,
    status: OrderStatus,
  ) {
    this.id = id;
    this.productId = productId;
    this.product = product;
    this.cartId = cartId;
    this.cart = cart;
    this.quantity = quantity;
    this.price = price;
    this.status = status;
  }
}
