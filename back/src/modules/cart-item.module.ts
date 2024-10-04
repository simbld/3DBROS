import { Module } from "@nestjs/common";
import { CartItemResolver } from "@resolverCartItem";
import { CartItemGateway } from "@gatewayCartItem";
import { CartItemService } from "@services/cart-item.service";
import { CartItemController } from "@controllers/cart-item.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CartItem } from "@entityCartItem";

/**
 * Module responsible for the cart item-related operations in the e-commerce system.
 * This module provides the necessary services, resolvers, controllers, and gateways for CartItem.
 */
@Module({
  imports: [TypeOrmModule.forFeature([CartItem])],
  providers: [CartItemService, CartItemResolver, CartItemGateway],
  controllers: [CartItemController],
  exports: [CartItemService],
})
export class CartItemModule {}
