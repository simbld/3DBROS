import { Module } from "@nestjs/common";
import { OrderService } from "./order.service";
import { OrderResolver } from "./order.resolver";
import { MongooseModule } from "@nestjs/mongoose";
import { OrderSchema, Order } from "./entities/order.schema";

@Module({
  imports: [
    // Import the MongooseModule and the OrderSchema, and add them to the imports array.
    MongooseModule.forFeature([{ schema: OrderSchema, name: Order.name }]),
  ],
  providers: [OrderResolver, OrderService],
})
export class OrderModule {}
