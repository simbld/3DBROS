/**
 * Third step of the order feature: create the order controller.
 * Order management controller for the application which will contain request handling and response management.
 * This controller provides CRUD functionality to manipulate order data.
 * Each method in this controller is designed to be used by application routes,
 * providing a layer of abstraction between request handling and business logic.
 * @class OrderController
 * @constructor
 * @property {OrderService} orderService - Service for order management.
 * @method findAll - Retrieve all orders from the database.
 * @method create - Create a new order in the database.
 * @returns {Promise<Order[]>} - A promise that resolves to an array of orders.
 * @returns {Promise<Order>} - A promise that resolves to the newly created order.
 *
 */

import { Controller, Get, Post, Body } from "@nestjs/common";
import { OrderService } from "./order.service";
import { Order } from "./entities/order.schema";

@Controller("order")
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  async findAll(): Promise<Order[]> {
    return this.orderService.getAll();
  }

  @Post()
  async create(@Body() orderData: Order): Promise<Order> {
    return this.orderService.create(orderData);
  }
}
