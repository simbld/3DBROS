import { Module } from "@nestjs/common";
import { CartService } from "./cart.service";
import { CartResolver } from "./cart.resolver";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Cart } from "./cart.entity";
import { CartItem } from "@models/cartItem/entities/cart-item.entity";
import { CartGateway } from "@controllers/cart/cart.gateway";
import { CartController } from "@controllers/cart/cart.controller";

/**
 * Module representing the Cart feature in the e-commerce system.
 * This module bundles all the necessary components (entities, services, resolvers) related to the Cart.
 * @module CartModule
 */
@Module({
  imports: [TypeOrmModule.forFeature([Cart, CartItem])],
  providers: [CartService, CartResolver, CartGateway],
  controllers: [CartController],
  exports: [CartService],
})
export class CartModule {}
