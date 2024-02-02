import { Module } from "@nestjs/common";
import { OrderService } from "./order.service";
import { OrderResolver } from "./order.resolver";
import { MongooseModule } from "@nestjs/mongoose";
import { OrderSchema, Order } from "./schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ schema: OrderSchema, name: Order.name }]),
  ],
  providers: [OrderResolver, OrderService],
})
export class OrderModule {}
