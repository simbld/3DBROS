import { Field, Int, ObjectType, Float } from "@nestjs/graphql";
import { IsInt, IsNumber, IsDate, IsNotEmpty } from "class-validator";
import { Type } from "class-transformer";
import { Product } from "@product/entities/product.entity";

/**
 * Entity representing a VAT (Vat) in the e-commerce system.
 * This class defines the structure of a Vat for GraphQL responses.
 * @class VAT
 * @property {number} id - The ID of the VAT.
 * @property {number} rate - The VAT rate.
 * @property {Product[]} products - The list of products associated with this VAT.
 * @property {Date} createdAt - The date when the VAT was created.
 * @constructor VAT
 */
@ObjectType()
export class Vat {
  @Field(() => Int)
  @IsNotEmpty()
  @IsInt()
  id: number;

  @Field(() => Float)
  @IsNotEmpty()
  @IsNumber()
  rate: number;

  @Field(() => [Product])
  @IsNotEmpty()
  @Type(() => Product)
  products: Product[];

  @Field()
  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  createdAt: Date;

  constructor(id: number, rate: number, products: Product[], createdAt: Date) {
    this.id = id;
    this.rate = rate;
    this.products = products;
    this.createdAt = createdAt;
  }
}
