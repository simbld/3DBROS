/**
 * This file will define the input type for creating an order.
 *
 * @summary Input type for order creation.
 * @param target The class that the decorator is declared in.
 * @param propertyKey The property that the decorator is applied to.
 *
 */

import { InputType, Int, Field } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

@InputType()
export class CreateOrderInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  customer: string;

  @Field(() => Int)
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @Field()
  @IsNotEmpty()
  @IsString()
  address: string;
}
