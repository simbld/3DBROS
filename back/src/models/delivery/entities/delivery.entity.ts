import { Field, Int, ObjectType, Float } from "@nestjs/graphql";
import { IsInt, IsString, IsNumber, IsDate, IsNotEmpty } from "class-validator";
import { Type } from "class-transformer";
import { Order } from "@order/entities/order.entity";

/**
 * Entity representing a Delivery in the e-commerce system.
 * This class defines the structure of a Delivery for GraphQL responses.
 * @class Delivery
 * @property {number} id - The ID of the delivery.
 * @property {string} address - The delivery address.
 * @property {number} deliveryFee - The fee for the delivery.
 * @property {number} orderId - The ID of the order associated with the delivery.
 * @property {Order} order - The order entity associated with the delivery.
 * @property {Date} createdAt - The date when the delivery was created.
 * @constructor Delivery
 */
@ObjectType()
export class Delivery {
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
  deliveryFee: number;

  @Field(() => Int)
  @IsNotEmpty()
  @IsInt()
  orderId: number;

  @Field(() => Order)
  @IsNotEmpty()
  @Type(() => Order)
  order: Order;

  @Field()
  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  createdAt: Date;

  constructor(
    id: number,
    address: string,
    deliveryFee: number,
    orderId: number,
    order: Order,
    createdAt: Date,
  ) {
    this.id = id;
    this.address = address;
    this.deliveryFee = deliveryFee;
    this.orderId = orderId;
    this.order = order;
    this.createdAt = createdAt;
  }
}
