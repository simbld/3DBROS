import { Module } from "@nestjs/common";
import { CartService } from "./cart.service";
import { CartResolver } from "./cart.resolver";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Cart } from "./cart.entity";
import { CartItem } from "@models/cartItem/entities/cart-item.entity";

/**
 * Module representing the Cart feature in the e-commerce system.
 * This module bundles all the necessary components (entities, services, resolvers) related to the Cart.
 * @module CartModule
 */
@Module({
  imports: [
    TypeOrmModule.forFeature([Cart, CartItem]), // Importing Cart and CartItem entities
  ],
  providers: [CartService, CartResolver], // Declaring the Cart service and resolver
  exports: [CartService], // Exporting the service for use in other modules
})
export class CartModule {}
