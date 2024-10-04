import {
  Controller,
  Get,
  Delete,
  Param,
  ParseIntPipe,
  NotFoundException,
} from "@nestjs/common";
import { CartService } from "@serviceCart";
import { Cart } from "@entityCart";

/**
 * REST controller for managing carts.
 * This controller handles HTTP requests related to the Cart entity.
 */
@Controller("cart")
export class CartController {
  constructor(private readonly cartService: CartService) {}

  /**
   * Retrieves the cart for a given user.
   * @param {number} userId - The ID of the user to retrieve the cart for.
   * @returns {Promise<Cart>} - The cart of the specified user.
   * @throws {NotFoundException} - If the cart is not found.
   */
  @Get("/:userId")
  async getUserCart(
    @Param("userId", ParseIntPipe) userId: number,
  ): Promise<Cart> {
    const cart = await this.cartService.findOrCreateCart(userId);
    if (!cart) {
      throw new NotFoundException(`Cart for user with ID ${userId} not found`);
    }
    return cart;
  }

  /**
   * Deletes a cart by its ID.
   * @param {number} cartId - The ID of the cart to delete.
   * @returns {Promise<{ success: boolean; message: string }>}
   * @throws {NotFoundException} - If the cart is not found.
   */
  @Delete("/:id")
  async deleteCart(
    @Param("id", ParseIntPipe) cartId: number,
  ): Promise<{ success: boolean; message: string }> {
    return await this.cartService.deleteCartById(cartId);
  }

  /**
   * Clears the cart for a given user.
   * @param {number} userId - The ID of the user whose cart will be cleared.
   * @returns {Promise<{ success: boolean; message: string }>} - Success message.
   */
  @Delete("/clear/:userId")
  async clearCart(
    @Param("userId", ParseIntPipe) userId: number,
  ): Promise<{ success: boolean; message: string }> {
    return await this.cartService.clearCartByUserId(userId);
  }
}
