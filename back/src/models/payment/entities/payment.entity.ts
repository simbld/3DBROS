import { Field, Int, ObjectType, Float } from "@nestjs/graphql";
import { IsInt, IsNumber, IsString, IsDate } from "class-validator";
import { Type } from "class-transformer";
import { Order } from "@order/entities/order.entity";
import { PaymentStatus } from "@enums/payment-status.enum";

/**
 * Entity representing a Payment in the e-commerce system.
 * This class defines the structure of a Payment for GraphQL responses.
 * @class Payment
 * @property {number} id - The ID of the payment.
 * @property {number} amount - The amount paid.
 * @property {PaymentStatus} status - The status of the payment (pending/completed/failed).
 * @property {string} method - The payment method used.
 * @property {number} orderId - The ID of the order associated with the payment.
 * @property {Order} order - The order entity associated with the payment.
 * @property {Date} createdAt - The date when the payment was created.
 * @constructor Payment
 */
@ObjectType()
export class Payment {
  @Field(() => Int)
  @IsInt()
  id: number;

  @Field(() => Float)
  @IsNumber()
  amount: number;

  @Field(() => PaymentStatus)
  @Type(() => String)
  status: PaymentStatus;

  @Field()
  @IsString()
  @Type(() => String)
  method: string;

  @Field(() => Int)
  @IsInt()
  orderId: number;

  @Field(() => Order)
  @Type(() => Order)
  order: Order;

  @Field()
  @IsDate()
  @Type(() => Date)
  createdAt: Date;

  constructor(
    id: number,
    amount: number,
    status: PaymentStatus,
    method: string,
    orderId: number,
    order: Order,
    createdAt: Date,
  ) {
    this.id = id;
    this.amount = amount;
    this.status = status;
    this.method = method;
    this.orderId = orderId;
    this.order = order;
    this.createdAt = createdAt;
  }
}
