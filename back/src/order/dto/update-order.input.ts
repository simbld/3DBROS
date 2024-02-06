/**
 * This file will define the input type for the updateOrder mutation.
 * It will be used to update an existing order in the database.
 * @class UpdateOrderInput
 * @extends CreateOrderInput
 * @property {string} id - The ID of the order.
 * @returns {String} - The GraphQL string type.
 */

import { CreateOrderInput } from "./create-order.input";
import { InputType, Field, Int, PartialType } from "@nestjs/graphql";

@InputType()
export class UpdateOrderInput extends PartialType(CreateOrderInput) {
  @Field(() => String, { description: "The ID of the order" })
  id: string;
}
