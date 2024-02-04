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
