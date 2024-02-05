/**
 * First step of the order feature. Create the order module.
 *
 * The `OrderModule` is a feature module that encapsulates the      `OrderService` (business logic) and  `OrderResolver` (request management).
 * It integrates `MongooseModule` for defining and manipulating command data schemas through `OrderSchema`.
 * `OrderGateway` is a provider in the OrderModule, and it is used to notify clients about order-related events.
 *
 * @class OrderModule
 * @constructor
 * @property {OrderService} orderService - Service for order management.
 * @property {OrderResolver} orderResolver - Resolver for order management.
 * @property {OrderGateway} orderGateway - Gateway for order-related events.
 * @property {MongooseModule} MongooseModule - Module for defining and manipulating command data schemas.
 * @property {OrderSchema} OrderSchema - Schema for the `Order` entity.
 * @property {Order} Order - Entity for the `Order` model.
 *
 */

import { Module } from "@nestjs/common";
import { OrderService } from "./order.service";
import { OrderResolver } from "./order.resolver";
import { MongooseModule } from "@nestjs/mongoose";
import { OrderSchema, Order } from "./entities/order.schema";
import { OrderGateway } from "./order.gateway";

@Module({
  imports: [
    MongooseModule.forFeature([{ schema: OrderSchema, name: Order.name }]),
  ],
  providers: [OrderResolver, OrderService, OrderGateway],
})
export class OrderModule {}
