import { Field, Int, ObjectType } from "@nestjs/graphql";
import { IsInt, IsString, IsArray, IsDate, IsNotEmpty } from "class-validator";
import { Type } from "class-transformer";
import { ProductCollection } from "@productCollection/entities/product-collection.entity";

/**
 * Entity representing a Collection in the e-commerce system.
 * This class defines the structure of a Collection for GraphQL responses.
 * @class Collection
 * @property {number} id - The ID of the collection.
 * @property {string} collectionName - The name of the collection.
 * @property {ProductCollection[]} products - The list of products associated with the collection.
 * @property {Date} createdAt - The creation date of the collection.
 * @constructor Collection
 */
@ObjectType()
export class Collection {
  @Field(() => Int)
  @IsNotEmpty()
  @IsInt()
  id: number;

  @Field()
  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  collectionName: string;

  @Field(() => [ProductCollection])
  @IsNotEmpty()
  @IsArray()
  @Type(() => ProductCollection)
  products: ProductCollection[];

  @Field()
  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  createdAt: Date;

  constructor(
    id: number,
    collectionName: string,
    products: ProductCollection[],
    createdAt: Date,
  ) {
    this.id = id;
    this.collectionName = collectionName;
    this.products = products;
    this.createdAt = createdAt;
  }
}
