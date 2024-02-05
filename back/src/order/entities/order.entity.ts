/**
 * This file is generated from the NestJS CLI.
 * It is the schema definition for the `Order` entity.
 * The `Order` entity is a representation of a single order in the application.
 * It is used to define the structure of the `Order` model in the database.
 * @class Order
 * @property {number} exampleField - An example field for the `Order` entity.
 * @returns {number} - The value of the example field.
 * @returns {Order} - The `Order` entity.
 * @returns {ObjectType} - The GraphQL object type.
 * @returns {Int} - The GraphQL integer type.
 *
 */

import { ObjectType, Field, Int } from "@nestjs/graphql";

@ObjectType()
export class Order {
  @Field(() => Int, { description: "Example field (placeholder)" })
  exampleField: number;
}
