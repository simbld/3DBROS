import { OrderStatus } from "@prisma/client";

/**
 * Maps a string status to its corresponding OrderStatus enum value.
 * @param {string} status - The status string to map.
 * @returns {OrderStatus} The corresponding OrderStatus enum value.
 * @throws Will throw an error if the status is invalid.
 */
export function mapStatus(status: string): OrderStatus {
  switch (status.toUpperCase()) {
    case "PENDING":
      return OrderStatus.PENDING;
    case "PAID":
      return OrderStatus.PAID;
    case "SHIPPED":
      return OrderStatus.SHIPPED;
    case "DELIVERED":
      return OrderStatus.DELIVERED;
    case "CANCELLED":
      return OrderStatus.CANCELLED;
    default:
      throw new Error(`Invalid status: ${status}`);
  }
}
