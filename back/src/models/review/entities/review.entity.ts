import { Field, Int, ObjectType } from "@nestjs/graphql";
import { IsInt, IsString, IsOptional, IsDate } from "class-validator";
import { Type } from "class-transformer";
import { Product } from "@product/entities/product.entity";
import { User } from "@user/entities/user.entity";

/**
 * Entity representing a Review in the e-commerce system.
 * This class defines the structure of a Review for GraphQL responses.
 * @class Review
 * @property {number} id - The ID of the review.
 * @property {number} rating - The rating given by the user.
 * @property {string} comment - The optional comment provided by the user.
 * @property {number} productId - The ID of the reviewed product.
 * @property {Product} product - The product entity associated with this review.
 * @property {number} userId - The ID of the user who made the review.
 * @property {User} user - The user entity who made the review.
 * @property {Date} createdAt - The date when the review was created.
 * @constructor Review
 */
@ObjectType()
export class Review {
  @Field(() => Int)
  @IsInt()
  id: number;

  @Field(() => Int)
  @IsInt()
  rating: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @Type(() => String)
  comment?: string;

  @Field(() => Int)
  @IsInt()
  productId: number;

  @Field(() => Product)
  @Type(() => Product)
  product: Product;

  @Field(() => Int)
  @IsInt()
  userId: number;

  @Field(() => User)
  @Type(() => User)
  user: User;

  @Field()
  @IsDate()
  @Type(() => Date)
  createdAt: Date;

  constructor(
    id: number,
    rating: number,
    comment: string,
    productId: number,
    product: Product,
    userId: number,
    user: User,
    createdAt: Date,
  ) {
    this.id = id;
    this.rating = rating;
    this.comment = comment;
    this.productId = productId;
    this.product = product;
    this.userId = userId;
    this.user = user;
    this.createdAt = createdAt;
  }
}
