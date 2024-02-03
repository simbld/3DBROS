/**
 * @module Order/SchemaFactory
 *
 * @property {string} customer - Customer name.
 * @property {number} price - Order price.
 * @property {string} address - Order address.
 * @property {Date} createdAt - Order creation date with timestamp.
 * @property {Date} updatedAt - Order update date with timestamp.
 *
 */

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

@Schema({ timestamps: true })
export class Order {
  @Prop({ required: true })
  customer: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  address: string;
}

// Mongoose schema
export const OrderSchema = SchemaFactory.createForClass(Order);

// types
export type OrderDocument = HydratedDocument<Order>;
