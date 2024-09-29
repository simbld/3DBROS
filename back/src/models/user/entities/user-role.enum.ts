import { registerEnumType } from "@nestjs/graphql";

/**
 * Enum representing the roles a user can have in the system.
 * This enum is used for GraphQL schema and ensures role validation.
 * @enum {string} UserRole
 * @property {string} CUSTOMER - Represents a customer role.
 * @property {string} ADMIN - Represents an admin role.
 */
export enum UserRole {
  CUSTOMER = "CUSTOMER",
  ADMIN = "ADMIN",
}

registerEnumType(UserRole, {
  name: "UserRole",
});
