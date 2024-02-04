/**
 * Order management service for the application.
 * This service provides CRUD functionality to manipulate order data
 * stored in MongoDB. It allows you to create new orders, recover one or more
 * orders, update an existing order, and delete an order.
 *
 * Uses Mongoose for interaction with the MongoDB database, relying on the `Order` model.
 * Each method in this service is designed to be used by application controllers,
 * providing a layer of abstraction between business logic and data access.
 *
 * @class OrderService
 * @constructor
 * @property {Model<Order>} orderModel - Mongoose model for the `Order` entity.
 */

import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Order } from "./entities/order.schema";
import { Model } from "mongoose";
import { OrderGateway } from "./order.gateway";

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<Order>,
    private orderGateway: OrderGateway,
  ) {}

  async getAll(): Promise<Order[]> {
    return this.orderModel.find({});
  }

  async create(orderData: Order): Promise<Order> {
    const newOrder = await this.orderModel.create(orderData);
    await newOrder.save();

    return newOrder;
  }
}
