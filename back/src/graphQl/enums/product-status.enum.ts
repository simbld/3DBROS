import { registerEnumType } from "@nestjs/graphql";

/**
 * Enum representing the availability status of a product in the e-commerce system.
 * @enum {string} ProductStatus
 */
export enum ProductStatus {
  AVAILABLE = "AVAILABLE",
  OUT_OF_STOCK = "OUT_OF_STOCK",
  LIMITED_EDITION = "LIMITED_EDITION",
}

registerEnumType(ProductStatus, {
  name: "ProductStatus",
  description: "The availability status of the product",
});
