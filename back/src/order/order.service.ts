/**
 * Second step of the order feature: create the order service.
 * Service for managing orders in the system.
 * Provides methods for creating, updating, retrieving, and deleting orders.
 * @class OrderService
 * @constructor
 * @param {PrismaService} prisma - The Prisma service for database interactions.
 */
import { Injectable } from "@nestjs/common";
import { PrismaService } from "@prisma/prisma.service";
import { Prisma, Order } from "@prisma/client";

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Retrieve all orders from the database.
   * @returns {Promise<Order[]>} - A promise that resolves to a list of orders.
   */
  async getAll(): Promise<Order[]> {
    return this.prisma.order.findMany({ include: { items: true } });
  }

  /**
   * Create a new order in the database.
   * @param {Prisma.OrderCreateInput} data - The data to create a new order.
   * @returns {Promise<Order>} - The newly created order.
   */
  async createOrder(data: Prisma.OrderCreateInput): Promise<Order> {
    return this.prisma.order.create({
      data: {
        customer: data.customer,
        address: data.address,
        price: data.price,
        quantity: data.quantity,
        status: data.status,
        items: {
          createMany: {
            data: data.items as Prisma.CartItemCreateManyOrderInput[], // Ensure data.items is of the correct type
          },
        },
        user: { connect: { id: data.user.connect.id } }, // Assure-toi que 'user.connect.id' existe
      },
    });
  }

  /**
   * Update an existing order by its ID.
   * @param {number} id - The ID of the order to update.
   * @param {Prisma.OrderUpdateInput} data - The new data to update the order.
   * @returns {Promise<Order>} - The updated order.
   */
  async updateOrder(id: number, data: Prisma.OrderUpdateInput): Promise<Order> {
    return this.prisma.order.update({
      where: { id },
      data,
    });
  }

  /**
   * Find a specific order by its ID.
   * @param {number} id - The ID of the order to retrieve.
   * @returns {Promise<Order | null>} - The found order, or null if not found.
   */
  async findOne(id: number): Promise<Order | null> {
    return this.prisma.order.findUnique({
      where: { id },
      include: { items: true },
    });
  }

  /**
   * Remove an order by its ID.
   * @param {number} id - The ID of the order to remove.
   * @returns {Promise<Order>} - The deleted order.
   */
  async removeOrder(id: number): Promise<Order> {
    return this.prisma.order.update({
      where: { id },
      data: { status: "removed" },
    });
  }

  /**
   * Delete an order by its ID.
   * @param {number} id - The ID of the order to delete.
   */
  async deleteOrder(id: number): Promise<Order> {
    return this.prisma.order.delete({
      where: { id },
    });
  }

  /**
   * Find all orders for a specific user.
   * @param {number} userId - The ID of the user to find orders for.
   * @returns {Promise<Order[]>} - A list of orders for the user.
   */
  async findOrdersByUser(userId: number): Promise<Order[]> {
    return this.prisma.order.findMany({
      where: { userId },
      include: { items: true },
    });
  }
}
