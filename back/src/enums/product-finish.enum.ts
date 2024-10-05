import { registerEnumType } from "@nestjs/graphql";

/**
 * Enum representing the finish type for 3D printed products.
 * @enum {string} ProductFinish
 */
export enum ProductFinish {
  RAW = "RAW", // 3D print without any finishing touches
  VARNISHED = "VARNISHED", // Sanded and varnished 3D print
  ENHANCED = "ENHANCED", // Sanded, painted, varnished, and accessorized 3D print
}

registerEnumType(ProductFinish, {
  name: "ProductFinish",
  description: "The finish type of the 3D printed product",
});
