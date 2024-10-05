import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { CartService } from "@serviceCart";
import { Cart } from "@entityCart";

/**
 * Resolver for handling GraphQL requests related to the Cart.
 * This resolver is responsible for querying and mutating cart data.
 */
@Resolver(() => Cart)
export class CartResolver {
  constructor(private readonly cartService: CartService) {}

  /**
   * Queries the cart by user ID.
   * @param {number} userId - The user ID to query the cart for.
   * @returns {Promise<Cart>} - The cart associated with the user.
   */
  @Query(() => Cart, { name: "getUserCart" })
  async getUserCart(
    @Args("userId", { type: () => Int }) userId: number,
  ): Promise<Cart> {
    return await this.cartService.findOrCreateCart(userId);
  }

  /**
   * Deletes a cart by its ID.
   * @param {number} cartId - The ID of the cart to delete.
   * @returns {Promise<{ success: boolean; message: string }>} - Success message.
   */
  @Mutation(() => Boolean, { name: "deleteCartById" })
  async deleteCartById(
    @Args("cartId", { type: () => Int }) cartId: number,
  ): Promise<{ success: boolean; message: string }> {
    return await this.cartService.deleteCartById(cartId);
  }

  /**
   * Clears the user's cart.
   * @param {number} userId - The user ID whose cart will be cleared.
   * @returns {Promise<{ success: boolean; message: string }>} - Success message.
   */
  @Mutation(() => Boolean, { name: "clearCartByUserId" })
  async clearCartByUserId(
    @Args("userId", { type: () => Int }) userId: number,
  ): Promise<{ success: boolean; message: string }> {
    return await this.cartService.clearCartByUserId(userId);
  }
}
