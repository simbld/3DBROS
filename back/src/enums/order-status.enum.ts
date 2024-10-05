import { registerEnumType } from "@nestjs/graphql";

/**
 * Enum representing the status of an order in the e-commerce system.
 * @enum {string} OrderStatus
 */
export enum OrderStatus {
  PENDING = "PENDING",
  PAID = "PAID",
  SHIPPED = "SHIPPED",
  DELIVERED = "DELIVERED",
  CANCELLED = "CANCELLED",
}

registerEnumType(OrderStatus, {
  name: "OrderStatus",
  description: "The status of the order",
});
