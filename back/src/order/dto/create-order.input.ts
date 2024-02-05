/**
 * This file will define the input type for creating an order.
 *
 * @summary Input type for order creation.
 * @param target The class that the decorator is declared in.
 * @param propertyKey The property that the decorator is applied to.
 *
 */

import { InputType, Int, Field } from "@nestjs/graphql";

@InputType()
export class CreateOrderInput {
  @Field()
  @IsNotEmpty()
  customer: string;

  @Field(() => Int)
  price: number;

  @Field()
  address: string;
}
function IsNotEmpty(): (
  target: CreateOrderInput,
  propertyKey: "customer",
) => void {
  throw new Error("Function not implemented.");
}
