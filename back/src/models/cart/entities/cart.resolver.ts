import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { CartService } from "./cart.service";
import { Cart } from "./cart.entity";
import { CartItem } from "@/models/cartItem/entities/cart-item.entity";

/**
 * Resolver for handling GraphQL operations related to the Cart entity.
 * This resolver exposes queries and mutations for managing cart operations.
 * @class CartResolver
 */
@Resolver(() => Cart)
export class CartResolver {
  constructor(private readonly cartService: CartService) {}

  /**
   * Retrieves a cart by its ID.
   * @param {number} id - The ID of the cart to retrieve.
   * @returns {Promise<Cart>} - The retrieved cart.
   */
  @Query(() => Cart, { name: "cart" })
  async getCartById(
    @Args("id", { type: () => Int }) id: number,
  ): Promise<Cart> {
    return this.cartService.findCartById(id);
  }

  /**
   * Adds an item to a cart.
   * @param {CartItem} cartItem - The cart item to add.
   * @returns {Promise<CartItem>} - The newly added cart item.
   */
  @Mutation(() => CartItem)
  async addItemToCart(@Args("cartItem") cartItem: CartItem): Promise<CartItem> {
    return this.cartService.addItemToCart(cartItem);
  }

  /**
   * Removes an item from a cart by its ID.
   * @param {number} cartItemId - The ID of the cart item to remove.
   * @returns {Promise<boolean>} - Whether the operation was successful.
   */
  @Mutation(() => Boolean)
  async removeItemFromCart(
    @Args("cartItemId", { type: () => Int }) cartItemId: number,
  ): Promise<boolean> {
    await this.cartService.removeItemFromCart(cartItemId);
    return true;
  }

  /**
   * Clears a cart by its ID.
   * @param {number} cartId - The ID of the cart to clear.
   * @returns {Promise<boolean>} - Whether the operation was successful.
   */
  @Mutation(() => Boolean)
  async clearCart(
    @Args("cartId", { type: () => Int }) cartId: number,
  ): Promise<boolean> {
    await this.cartService.clearCart(cartId);
    return true;
  }
}
