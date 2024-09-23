/**
 *  * First step of the order feature. Create the order module.
 *
 * OrderModule is responsible for grouping all parts of the order feature.
 * It imports and provides the necessary services and resolvers to manage orders.
 *
 * @module OrderModule
 */
import { Module } from "@nestjs/common";
import { OrderService } from "./order.service";
import { OrderResolver } from "./order.resolver";
import { OrderGateway } from "./order.gateway";

@Module({
  imports: [],
  providers: [OrderResolver, OrderService, OrderGateway],
})
export class OrderModule {}
