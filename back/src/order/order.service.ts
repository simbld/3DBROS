/**
 * Second step of the order feature: create the order service.
 * Order management service for the application which will contain business logic and interactions with the database
 * This service provides CRUD functionality to manipulate order data
 * Uses Mongoose for interaction with the MongoDB database, relying on the `Order` model.
 * Each method in this service is designed to be used by application controllers,
 * providing a layer of abstraction between business logic and data access.
 *
 * @class OrderService
 * @constructor
 * @property {Model<Order>} orderModel - Mongoose model for the `Order` entity.
 * @property {OrderGateway} orderGateway - Gateway for order-related events.
 * @method getAll() - Retrieve all orders from the database.
 * @method create - Create a new order in the database.
 * @method findOne - Retrieve a single order from the database by its ID.
 * @method update - Update an existing order in the database.
 * @method remove - Remove an existing order from the database.
 * @method notify - Notify the gateway of an order-related event.
 * @returns {Promise<Order[]>} - A promise that resolves to an array of orders.
 * @returns {Promise<Order>} - A promise that resolves to the newly created order.
 * @returns {Promise<Order | null>} - A promise that resolves to the fetched, updated, or deleted order, or null if not found.
 *
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
    this.orderGateway.notify("order-added", newOrder);

    return newOrder;
  }

  async findOne(id: string): Promise<Order | null> {
    const order = await this.orderModel.findById(id);
    await this.orderGateway.notify("order-fetched", order);
    return this.orderModel.findById(id);
  }

  async update(id: string, orderData: Order): Promise<Order | null> {
    const updatedOrder = await this.orderModel.findByIdAndUpdate(
      id,
      orderData,
      { new: true },
    );
    await this.orderGateway.notify("order-updated", updatedOrder);
    return this.orderModel.findByIdAndUpdate(id, orderData, { new: true });
  }

  async remove(id: string): Promise<Order | null> {
    const deletedOrder = await this.orderModel.findByIdAndDelete(id);
    await this.orderGateway.notify("order-deleted", deletedOrder);
    return this.orderModel.findByIdAndDelete(id);
  }
}
