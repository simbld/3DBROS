import { Field, Int, ObjectType, Float } from "@nestjs/graphql";
import { IsInt, IsNumber, IsDate } from "class-validator";
import { Type } from "class-transformer";
import { Product } from "@product/entities/product.entity";
import { Cart } from "@cart/entities/cart.entity";
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
  id: number;

  @Field(() => Int)
  @IsInt()
  productId: number;

  @Field(() => Product)
  @Type(() => Product)
  product: Product;

  @Field(() => Int)
  @IsInt()
  cartId: number;

  @Field(() => Cart)
  @Type(() => Cart)
  cart: Cart;

  @Field(() => Int)
  @IsInt()
  quantity: number;

  @Field(() => Float)
  @IsNumber()
  price: number;

  @Field(() => OrderStatus)
  @Type(() => String)
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
