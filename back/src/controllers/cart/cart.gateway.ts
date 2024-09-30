import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
} from "@nestjs/websockets";
import { CartService } from "@cart/entities/cart.service";
import type { CartItem } from "@models/cartItem/entities/cart-item.entity";

/**
 * Gateway for handling real-time communication related to the Cart.
 * This WebSocket gateway exposes events for cart operations.
 * @class CartGateway
 */
@WebSocketGateway()
export class CartGateway {
  constructor(private readonly cartService: CartService) {}

  /**
   * Handles real-time updates for adding an item to the cart.
   * @param {CartItem} cartItem - The cart item to add.
   * @returns {Promise<CartItem>} - The added cart item.
   */
  @SubscribeMessage("addItem")
  async handleAddItem(@MessageBody() cartItem: CartItem): Promise<CartItem> {
    return this.cartService.addItemToCart(cartItem);
  }

  /**
   * Handles real-time updates for removing an item from the cart.
   * @param {number} cartItemId - The ID of the cart item to remove.
   * @returns {Promise<void>}
   */
  @SubscribeMessage("removeItem")
  async handleRemoveItem(@MessageBody() cartItemId: number): Promise<void> {
    return this.cartService.removeItemFromCart(cartItemId);
  }

  /**
   * Handles real-time updates for clearing the cart.
   * @param {number} cartId - The ID of the cart to clear.
   * @returns {Promise<void>}
   */
  @SubscribeMessage("clearCart")
  async handleClearCart(@MessageBody() cartId: number): Promise<void> {
    return this.cartService.clearCart(cartId);
  }
}
