import { registerEnumType } from "@nestjs/graphql";

/**
 * Enum representing the status of a payment in the e-commerce system.
 * @enum {string} PaymentStatus
 */
export enum PaymentStatus {
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
}

registerEnumType(PaymentStatus, {
  name: "PaymentStatus",
  description: "The status of the payment",
});
