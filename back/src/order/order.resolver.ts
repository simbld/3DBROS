/**
 * OrderResolver handles GraphQL requests for the order entity.
 * It defines the queries and mutations for retrieving, creating, updating, and deleting orders.
 *
 * @class OrderResolver
 */
import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { OrderService } from "./order.service";
import { Order } from "./entities/order.entity";
import { CreateOrderInput } from "./dto/create-order.input";
import { UpdateOrderInput } from "./dto/update-order.input";

@Resolver(() => Order)
export class OrderResolver {
  constructor(private readonly orderService: OrderService) {}

  /**
   * Mutation to create a new order.
   * @param {CreateOrderInput} createOrderInput - The data to create a new order.
   * @returns {Order} - The newly created order.
   */
  @Mutation(() => Order)
  createOrder(@Args("createOrderInput") createOrderInput: CreateOrderInput) {
    return this.orderService.createOrder({
      ...createOrderInput,
      user: { connect: { id: createOrderInput.userId } },
      items: {
        create: createOrderInput.items.map((item) => ({
          productId: item.productId,
          productName: item.productName,
          quantity: item.quantity,
          price: item.price,
          totalPrice: item.totalPrice,
          status: item.status,
        })),
      },
    });
  }

  /**
   * Query to retrieve all orders.
   * @returns {Order[]} - A list of all orders.
   */
  @Query(() => [Order], { name: "orders" })
  findAll() {
    return this.orderService.getAll();
  }

  /**
   * Query to find a single order by ID.
   * @param {number} id - The ID of the order to retrieve.
   * @returns {Order} - The found order.
   */
  @Query(() => Order, { name: "order" })
  findOne(@Args("id", { type: () => Int }) id: number) {
    return this.orderService.findOne(id);
  }

  /**
   * Mutation to update an existing order.
   * @param {UpdateOrderInput} updateOrderInput - The data to update an order.
   * @returns {Order} - The updated order.
   */
  @Mutation(() => Order)
  updateOrder(@Args("updateOrderInput") updateOrderInput: UpdateOrderInput) {
    return this.orderService.updateOrder(updateOrderInput.id, {
      ...updateOrderInput,
      items: {
        updateMany: updateOrderInput.items.map((item) => ({
          where: { productId: item.productId },
          data: {
            productName: item.productName,
            quantity: item.quantity,
            price: item.price,
            totalPrice: item.totalPrice,
            status: item.status,
          },
        })),
      },
    });
  }

  /**
   * Mutation to remove an order by ID.
   * @param {number} id - The ID of the order to remove.
   * @returns {Order} - The removed order.
   */
  @Mutation(() => Order)
  removeOrder(@Args("id", { type: () => Int }) id: number) {
    return this.orderService.removeOrder(id);
  }
}
