import { registerEnumType } from "@nestjs/graphql";

/**
 * Enum for reaction types
 * @enum {string} ReactionType
 */
export enum ReactionType {
  LIKE = "LIKE",
  DISLIKE = "DISLIKE",
}

registerEnumType(ReactionType, {
  name: "ReactionType",
  description: "The type of reaction",
});
