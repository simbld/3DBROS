import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from "@nestjs/websockets";
import { CartItemService } from "@serviceCartItem";
import { CreateCartItemDto } from "@dtoCartItem/create-cart-item.dto";
import { UpdateCartItemDto } from "@dtoCartItem/update-cart-item.dto";
import { Socket } from "socket.io";

/**
 * WebSocket Gateway for CartItem events.
 * This gateway handles real-time events related to cart item operations.
 */
@WebSocketGateway({ namespace: "/cart-item", cors: true })
export class CartItemGateway {
  constructor(private readonly cartItemService: CartItemService) {}

  /**
   * Handles adding an item to the cart via WebSocket.
   * @param {CreateCartItemDto} createCartItemDto - The DTO for creating a CartItem.
   * @param {Socket} client - The connected socket client.
   */
  @SubscribeMessage("addItemToCart")
  async handleAddItemToCart(
    @MessageBody() createCartItemDto: CreateCartItemDto,
    @ConnectedSocket() client: Socket,
  ) {
    try {
      const result =
        await this.cartItemService.addItemToCart(createCartItemDto);
      client.emit("cartItemAdded", result); // Emitting the result back to the client
    } catch (error) {
      client.emit("error", { message: (error as Error).message });
    }
  }

  /**
   * Handles updating an item in the cart via WebSocket.
   * @param {UpdateCartItemDto} updateCartItemDto - The DTO for updating a CartItem.
   * @param {Socket} client - The connected socket client.
   */
  @SubscribeMessage("updateCartItem")
  async handleUpdateCartItem(
    @MessageBody() updateCartItemDto: UpdateCartItemDto,
    @ConnectedSocket() client: Socket,
  ) {
    try {
      const result = await this.cartItemService.updateCartItem(
        updateCartItemDto.id,
        updateCartItemDto,
      );
      client.emit("cartItemUpdated", result);
    } catch (error) {
      client.emit("error", { message: (error as Error).message });
    }
  }

  /**
   * Handles removing an item from the cart via WebSocket.
   * @param {number} id - The ID of the cart item to remove.
   * @param {Socket} client - The connected socket client.
   */
  @SubscribeMessage("removeCartItem")
  async handleRemoveCartItem(
    @MessageBody() id: number,
    @ConnectedSocket() client: Socket,
  ) {
    try {
      const result = await this.cartItemService.removeCartItem(id);
      client.emit("cartItemRemoved", result);
    } catch (error) {
      client.emit("error", { message: (error as Error).message });
    }
  }
}
