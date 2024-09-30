import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  HttpCode,
} from "@nestjs/common";
import { CartService } from "@cart/entities/cart.service";
import { CartItem } from "@/models/cartItem/entities/cart-item.entity";

/**
 * Controller for managing HTTP requests related to the Cart.
 * This controller handles routes for adding, removing, and viewing cart items.
 * @class CartController
 */
@Controller("cart")
export class CartController {
  constructor(private readonly cartService: CartService) {}

  /**
   * Retrieves the cart by its ID.
   * @param {number} id - The ID of the cart.
   * @returns {Promise<Cart>} - The cart with its items.
   */
  @Get(":id")
  async getCartById(@Param("id") id: number) {
    return this.cartService.findCartById(id);
  }

  /**
   * Adds an item to the cart.
   * @param {CartItem} cartItem - The cart item to add.
   * @returns {Promise<CartItem>} - The newly added cart item.
   */
  @Post("add")
  async addItemToCart(@Body() cartItem: CartItem) {
    return this.cartService.addItemToCart(cartItem);
  }

  /**
   * Removes an item from the cart by its ID.
   * @param {number} cartItemId - The ID of the cart item to remove.
   * @returns {Promise<void>}
   */
  @Delete("remove/:cartItemId")
  @HttpCode(204) // No content on successful deletion
  async removeItemFromCart(@Param("cartItemId") cartItemId: number) {
    return this.cartService.removeItemFromCart(cartItemId);
  }

  /**
   * Clears the cart by its ID.
   * @param {number} cartId - The ID of the cart to clear.
   * @returns {Promise<void>}
   */
  @Delete("clear/:cartId")
  @HttpCode(204)
  async clearCart(@Param("cartId") cartId: number) {
    return this.cartService.clearCart(cartId);
  }
}
