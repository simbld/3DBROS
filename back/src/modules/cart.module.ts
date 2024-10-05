import { Module } from "@nestjs/common";
import { CartResolver } from "@resolverCart";
import { CartService } from "@services/cart.service";
import { CartGateway } from "@gatewayCart";
import { CartController } from "@controllers/cart.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Cart } from "@entityCart";

/**
 * Module responsible for the cart-related operations in the e-commerce system.
 * This module provides the necessary services, resolvers, controllers, and gateways.
 */
@Module({
  imports: [TypeOrmModule.forFeature([Cart])],
  providers: [CartService, CartResolver, CartGateway],
  controllers: [CartController],
  exports: [CartService],
})
export class CartModule {}
