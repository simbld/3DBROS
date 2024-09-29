import { Field, Int, ObjectType } from "@nestjs/graphql";
import { IsInt } from "class-validator";
import { Type } from "class-transformer";
import { Product } from "@product/entities/product.entity";
import { Collection } from "@collection/entities/collection.entity";

/**
 * Entity representing the relationship between a Product and a Collection in the e-commerce system.
 * This class defines the structure of a ProductCollection for GraphQL responses.
 * @class ProductCollection
 * @property {number} productId - The ID of the product.
 * @property {number} collectionId - The ID of the collection.
 * @property {Product} product - The product entity in the collection.
 * @property {Collection} collection - The collection entity associated with the product.
 * @constructor ProductCollection
 */
@ObjectType()
export class ProductCollection {
  @Field(() => Int)
  @IsInt()
  productId: number;

  @Field(() => Int)
  @IsInt()
  collectionId: number;

  @Field(() => Product)
  @Type(() => Product)
  product: Product;

  @Field(() => Collection)
  @Type(() => Collection)
  collection: Collection;

  constructor(
    productId: number,
    collectionId: number,
    product: Product,
    collection: Collection,
  ) {
    this.productId = productId;
    this.collectionId = collectionId;
    this.product = product;
    this.collection = collection;
  }
}
