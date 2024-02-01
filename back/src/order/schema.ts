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

export const OrderSchema = SchemaFactory.createForClass(Order);

// types
export type OrderDocument = HydratedDocument<Order>;
