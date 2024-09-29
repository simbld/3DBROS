import { Cart } from "@cart/entities/cart.entity";
import { Order } from "@order/entities/order.entity";
import { Field, Int, ObjectType } from "@nestjs/graphql";
import { IsInt, IsString, IsArray, IsDate } from "class-validator";
import { Type } from "class-transformer";
import { Review } from "@review/entities/review.entity";

/**
 * Entity representing a User in the order.
 * This class is used to define the structure of a User for GraphQL responses.
 * @class User
 * @property {number} id - The ID of the user.
 * @property {string} userName - The pseudo of the user.
 * @property {string} firstName - The first name of the user.
 * @property {string} lastName - The last name of the user.
 * @property {string} email - The email of the user.
 * @property {string} password - The password of the user.
 * @property {string} role - The role of the user.
 * @property {Order[]} orders - The list of orders made by the user.
 * @property {Cart} cart - The cart of the user.
 * @property {Review[]} reviews - The list of reviews made by the user.
 * @property {Date} createdAt - The creation date of the user.
 * @property {Date} updatedAt - The last update date of the user.
 * @constructor User
 */
@ObjectType()
export class User {
  @Field(() => Int)
  @IsInt()
  id: number;

  @Field()
  @IsString()
  @Type(() => String)
  userName: string;

  @Field()
  @IsString()
  @Type(() => String)
  firstName: string;

  @Field()
  @IsString()
  @Type(() => String)
  lastName: string;

  @Field()
  @IsString()
  @Type(() => String)
  email: string;

  @Field()
  @IsString()
  @Type(() => String)
  password: string;

  @Field()
  @IsString()
  @Type(() => String)
  role: string;

  @Field(() => [Order])
  @IsArray()
  @Type(() => Order)
  orders: Order[];

  @Field(() => Cart, { nullable: true })
  @Type(() => Cart)
  cart: Cart;

  @Field(() => [Review])
  @IsArray()
  @Type(() => Review)
  reviews: Review[];

  @Field()
  @IsDate()
  @Type(() => Date)
  createdAt: Date;

  @Field()
  @IsDate()
  @Type(() => Date)
  updatedAt: Date;

  constructor(
    id: number,
    userName: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    role: string,
    orders: Order[],
    cart: Cart,
    reviews: Review[],
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id = id;
    this.userName = userName;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.role = role;
    this.orders = orders;
    this.cart = cart;
    this.reviews = reviews;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
