import { Field, Int, ObjectType, Float } from "@nestjs/graphql";
import {
  IsInt,
  IsString,
  IsArray,
  IsDate,
  IsNumber,
  IsNotEmpty,
} from "class-validator";
import { Type } from "class-transformer";
import { OrderItem } from "@orderItem/entities/order-item.entity";
import { User } from "@user/entities/user.entity";
import { Payment } from "@payment/entities/payment.entity";
import { Delivery } from "@delivery/entities/delivery.entity";
import { OrderStatus } from "@enums/order-status.enum";

/**
 * Entity representing an Order in the e-commerce system.
 * This class defines the structure of an Order for GraphQL responses.
 * @class Order
 * @property {number} id - The ID of the order.
 * @property {string} address - The delivery address for the order.
 * @property {number} price - The total price of the order.
 * @property {number} quantity - The total quantity of items in the order.
 * @property {OrderStatus} status - The current status of the order.
 * @property {OrderItem[]} items - The list of items in the order.
 * @property {User} user - The user who placed the order.
 * @property {Payment} payment - The payment details for the order.
 * @property {Delivery} delivery - The delivery details for the order.
 * @property {Date} createdAt - The creation date of the order.
 * @property {Date} updatedAt - The last update date of the order.
 * @constructor Order
 */
@ObjectType()
export class Order {
  @Field(() => Int)
  @IsNotEmpty()
  @IsInt()
  id: number;

  @Field()
  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  address: string;

  @Field(() => Float)
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @Field(() => Int)
  @IsNotEmpty()
  @IsInt()
  quantity: number;

  @Field(() => OrderStatus)
  @IsNotEmpty()
  @Type(() => String)
  status: OrderStatus;

  @Field(() => [OrderItem])
  @IsNotEmpty()
  @IsArray()
  @Type(() => OrderItem)
  items: OrderItem[];

  @Field(() => User)
  @IsNotEmpty()
  @Type(() => User)
  user: User;

  @Field(() => Payment, { nullable: true })
  @Type(() => Payment)
  payment?: Payment;

  @Field(() => Delivery, { nullable: true })
  @Type(() => Delivery)
  delivery?: Delivery;

  @Field()
  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  createdAt: Date;

  @Field()
  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  updatedAt: Date;

  constructor(
    id: number,
    address: string,
    price: number,
    quantity: number,
    status: OrderStatus,
    items: OrderItem[],
    user: User,
    payment: Payment,
    delivery: Delivery,
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id = id;
    this.address = address;
    this.price = price;
    this.quantity = quantity;
    this.status = status;
    this.items = items;
    this.user = user;
    this.payment = payment;
    this.delivery = delivery;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
