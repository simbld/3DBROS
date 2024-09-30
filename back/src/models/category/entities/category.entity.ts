import { Field, Int, ObjectType } from "@nestjs/graphql";
import { IsInt, IsString, IsArray, IsDate, IsNotEmpty } from "class-validator";
import { Type } from "class-transformer";
import { Product } from "@product/entities/product.entity";

/**
 * Entity representing a Category in the e-commerce system.
 * This class defines the structure of a Category for GraphQL responses.
 * @class Category
 * @property {number} id - The ID of the category.
 * @property {string} categoryName - The name of the category.
 * @property {Product[]} products - The list of products under this category.
 * @property {Date} createdAt - The creation date of the category.
 * @constructor Category
 */
@ObjectType()
export class Category {
  @Field(() => Int)
  @IsNotEmpty()
  @IsInt()
  id: number;

  @Field()
  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  categoryName: string;

  @Field(() => [Product])
  @IsNotEmpty()
  @IsArray()
  @Type(() => Product)
  products: Product[];

  @Field()
  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  createdAt: Date;

  constructor(
    id: number,
    categoryName: string,
    products: Product[],
    createdAt: Date,
  ) {
    this.id = id;
    this.categoryName = categoryName;
    this.products = products;
    this.createdAt = createdAt;
  }
}
