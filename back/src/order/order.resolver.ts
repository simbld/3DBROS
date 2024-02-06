/**
 * This file is responsible for the communication between the client and the server.
 * It is the resolver for the order feature.
 * The `OrderResolver` class is a GraphQL resolver that defines the queries and mutations for the `Order` entity.
 * It is used to handle incoming requests and send responses to the client.
 * @class OrderResolver
 * @constructor
 * @property {OrderService} orderService - Service for order management.
 * @method createOrder - Create a new order in the database.
 * @method findAll - Retrieve all orders from the database.
 * @method findOne - Retrieve a single order from the database by its ID.
 * @method updateOrder - Update an existing order in the database.
 * @method removeOrder - Remove an existing order from the database.
 * @returns {Order} - The `Order` entity.
 * @returns {CreateOrderInput} - Input for creating a new order.
 * @returns {UpdateOrderInput} - Input for updating an existing order.
 * @returns {Int} - The GraphQL integer type.
 * @returns {String} - The GraphQL string type.
 *
 */

import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { OrderService } from "./order.service";
import { Order } from "./entities/order.entity";
import { CreateOrderInput } from "./dto/create-order.input";
import { UpdateOrderInput } from "./dto/update-order.input";

@Resolver(() => Order)
export class OrderResolver {
  constructor(private readonly orderService: OrderService) {}

  @Mutation(() => Order)
  createOrder(@Args("createOrderInput") createOrderInput: CreateOrderInput) {
    return this.orderService.create(createOrderInput);
  }

  @Query(() => [Order], { name: "order" })
  findAll() {
    return this.orderService.getAll();
  }

  @Query(() => Order, { name: "order" })
  findOne(@Args("id", { type: () => String }) id: string) {
    return this.orderService.findOne(id);
  }

  @Mutation(() => Order)
  updateOrder(@Args("updateOrderInput") updateOrderInput: UpdateOrderInput) {
    return this.orderService.update(updateOrderInput.id, updateOrderInput);
  }

  @Mutation(() => Order)
  removeOrder(@Args("id", { type: () => Int }) id: number) {
    return this.orderService.remove("id");
  }
}
