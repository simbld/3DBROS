/**
 * The OrderGateway class is a WebSocketGateway that listens for connections and disconnections.
 * It also has a notify method that emits events to all connected clients.
 * The notify method is used in the OrderService to notify clients about order-related events.
 *
 * @class OrderGateway
 * @constructor
 * @property {Server} server - The WebSocket server.
 * @method notify - Emits an event to all connected clients.
 *
 */

import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
  WebSocketServer,
} from "@nestjs/websockets";
import { Server, Socket } from "socket.io";

@WebSocketGateway({ cors: true })
export class OrderGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  handleConnection(client: Socket, ...args: any[]) {
    console.log(`Client connected:${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected:${client.id}`);
  }

  notify<T>(event: string, data: T): void {
    this.server.emit(event, data);
  }
}
