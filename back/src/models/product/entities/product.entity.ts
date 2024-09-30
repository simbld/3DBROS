import { Field, Int, ObjectType, Float } from "@nestjs/graphql";
import {
  IsInt,
  IsString,
  IsArray,
  IsDate,
  IsOptional,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
} from "class-validator";
import { Type } from "class-transformer";
import { Category } from "@category/entities/category.entity";
import { Review } from "@review/entities/review.entity";
import { CartItem } from "@cartItem/entities/cart-item.entity";
import { OrderItem } from "@orderItem/entities/order-item.entity";
import { Vat } from "@vat/entities/vat.entity";

/**
 * Entity representing a Product in the e-commerce system.
 * This class defines the structure of a Product for GraphQL responses.
 * @class Product
 * @property {number} id - The ID of the product.
 * @property {string} productName - The name of the product.
 * @property {string} description - The description of the product.
 * @property {number} price - The price of the product (excluding tax).
 * @property {number} vatId - The ID of the VAT applied to the product.
 * @property {Vat} vat - The VAT entity applied to the product.
 * @property {number} stock - The number of items in stock.
 * @property {string} status - The availability status of the product.
 * @property {string} condition - The condition of the product (new, used, refurbished).
 * @property {string} brand - The brand of the product.
 * @property {string} color - The color of the product.
 * @property {string} size - The size of the product.
 * @property {Category} category - The category of the product.
 * @property {boolean} bestSeller - Whether the product is a bestseller.
 * @property {boolean} newArrival - Whether the product is a newly arrived product.
 * @property {number} popularity - The popularity score of the product.
 * @property {Date} createdAt - The creation date of the product.
 * @property {Date} updatedAt - The last update date of the product.
 * @constructor Product
 */
@ObjectType()
export class Product {
  @Field(() => Int)
  @IsNotEmpty()
  @IsInt()
  id: number;

  @Field()
  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  productName: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  description: string;

  @Field(() => Float)
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @Field(() => Int)
  @IsNotEmpty()
  @IsInt()
  vatId: number;

  @Field(() => Vat)
  @IsNotEmpty()
  @Type(() => Vat)
  vat: Vat;

  @Field(() => Int)
  @IsNotEmpty()
  @IsInt()
  stock: number;

  @Field()
  @IsNotEmpty()
  @IsString()
  status: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  condition: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  brand: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  color?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  size?: string;

  @Field(() => Category)
  @IsNotEmpty()
  @Type(() => Category)
  category: Category;

  @Field(() => [Review])
  @IsNotEmpty()
  @IsArray()
  @Type(() => Review)
  reviews: Review[];

  @Field(() => [CartItem])
  @IsNotEmpty()
  @IsArray()
  @Type(() => CartItem)
  cartItems: CartItem[];

  @Field(() => [OrderItem])
  @IsNotEmpty()
  @IsArray()
  @Type(() => OrderItem)
  orderItems: OrderItem[];

  @Field()
  @IsNotEmpty()
  @IsBoolean()
  bestSeller: boolean;

  @Field()
  @IsNotEmpty()
  @IsBoolean()
  newArrival: boolean;

  @Field(() => Int)
  @IsNotEmpty()
  @IsInt()
  popularity: number;

  @Field()
  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  createdAt: Date;

  @Field()
  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  updatedAt: Date;

  constructor(
    id: number,
    productName: string,
    description: string,
    price: number,
    vatId: number,
    vat: Vat,
    stock: number,
    status: string,
    condition: string,
    brand: string,
    color: string,
    size: string,
    category: Category,
    reviews: Review[],
    cartItems: CartItem[],
    orderItems: OrderItem[],
    bestSeller: boolean,
    newArrival: boolean,
    popularity: number,
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id = id;
    this.productName = productName;
    this.description = description;
    this.price = price;
    this.vatId = vatId;
    this.vat = vat;
    this.stock = stock;
    this.status = status;
    this.condition = condition;
    this.brand = brand;
    this.color = color;
    this.size = size;
    this.category = category;
    this.reviews = reviews;
    this.cartItems = cartItems;
    this.orderItems = orderItems;
    this.bestSeller = bestSeller;
    this.newArrival = newArrival;
    this.popularity = popularity;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
