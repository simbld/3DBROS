import { Field, Int, ObjectType, Float } from "@nestjs/graphql";
import { IsInt, IsNumber, IsNotEmpty } from "class-validator";
import { Type } from "class-transformer";
import { Product } from "@product/entities/product.entity";
import { Order } from "@order/entities/order.entity";
import { OrderStatus } from "@enums/order-status.enum";

/**
 * Entity representing an OrderItem in the e-commerce system.
 * This class defines the structure of an OrderItem for GraphQL responses.
 * @class OrderItem
 * @property {number} id - The ID of the order item.
 * @property {number} productId - The ID of the product associated with this order item.
 * @property {Product} product - The product entity associated with this order item.
 * @property {number} orderId - The ID of the order to which this item belongs.
 * @property {Order} order - The order entity associated with this item.
 * @property {number} quantity - The quantity of the product in the order.
 * @property {number} price - The price of the product in the order.
 * @property {OrderStatus} status - The status of the order associated with the item.
 * @constructor OrderItem
 */
@ObjectType()
export class OrderItem {
  @Field(() => Int)
  @IsNotEmpty()
  @IsInt()
  id: number;

  @Field(() => Int)
  @IsNotEmpty()
  @IsInt()
  productId: number;

  @Field(() => Product)
  @IsNotEmpty()
  @Type(() => Product)
  product: Product;

  @Field(() => Int)
  @IsNotEmpty()
  @IsInt()
  orderId: number;

  @Field(() => Order)
  @IsNotEmpty()
  @Type(() => Order)
  order: Order;

  @Field(() => Int)
  @IsNotEmpty()
  @IsInt()
  quantity: number;

  @Field(() => Float)
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @Field(() => OrderStatus)
  @IsNotEmpty()
  @Type(() => String)
  status: OrderStatus;

  constructor(
    id: number,
    productId: number,
    product: Product,
    orderId: number,
    order: Order,
    quantity: number,
    price: number,
    status: OrderStatus,
  ) {
    this.id = id;
    this.productId = productId;
    this.product = product;
    this.orderId = orderId;
    this.order = order;
    this.quantity = quantity;
    this.price = price;
    this.status = status;
  }
}
