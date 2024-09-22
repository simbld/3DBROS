/**
 * DTO representing the input for updating an existing order.
 * @class UpdateOrderInput
 * @extends CreateOrderInput
 * @property {number} id - The ID of the order to update.
 * @property {number} totalPrice - The updated total price for the order.
 */
import { InputType, Field, Int, PartialType } from "@nestjs/graphql";
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from "class-validator";
import { CartItemUpdateInput } from "./cart-item-update.input";
import { Type } from "class-transformer";

@InputType()
export class UpdateOrderInput {
  @Field(() => Int)
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @Field(() => Int, { nullable: true }) // Optionnel pour les mises à jour
  @IsNumber()
  userId?: number;

  @Field({ nullable: true })
  @IsString()
  customer?: string;

  @Field({ nullable: true })
  @IsString()
  address?: string;

  @Field(() => Int, { nullable: true })
  @IsNumber()
  price?: number;

  @Field(() => Int, { nullable: true })
  @IsNumber()
  quantity?: number;

  @Field(() => Int)
  @IsNotEmpty()
  @IsNumber()
  totalPrice: number; // Updated total price for the order

  @Field(() => [CartItemUpdateInput], { nullable: true })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CartItemUpdateInput)
  items?: CartItemUpdateInput[];

  @Field({ nullable: true })
  @IsString()
  status?: string;
}
