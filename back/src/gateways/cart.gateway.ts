import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from "@nestjs/websockets";
import { CartService } from "@serviceCart";
import { Socket } from "socket.io";

/**
 * WebSocket Gateway for Cart events.
 * This gateway handles real-time events related to cart operations.
 */
@WebSocketGateway({ namespace: "/cart", cors: true })
export class CartGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(private readonly cartService: CartService) {}

  /**
   * Handles the WebSocket connection event.
   * @param {Socket} client - The connected socket client.
   */
  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  /**
   * Handles the WebSocket disconnection event.
   * @param {Socket} client - The disconnected socket client.
   */
  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  /**
   * Handles clearing the user's cart via WebSocket.
   * @param {number} userId - The ID of the user whose cart will be cleared.
   * @param {Socket} client - The connected socket client.
   */
  @SubscribeMessage("clearCart")
  async handleClearCart(
    @MessageBody() userId: number,
    @ConnectedSocket() client: Socket,
  ) {
    try {
      const result = await this.cartService.clearCartByUserId(userId);
      client.emit("cartCleared", result); // Emitting the result back to the client
    } catch (error) {
      client.emit("error", { message: (error as Error).message });
    }
  }
}
