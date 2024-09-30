import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Cart } from "./cart.entity";
import { CartItem } from "@/models/cartItem/entities/cart-item.entity";

/**
 * Service for managing cart operations in the e-commerce system.
 * This service handles business logic related to the Cart entity.
 * @class CartService
 */
@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private readonly cartRepository: Repository<Cart>, // Injecting Cart repository
    @InjectRepository(CartItem)
    private readonly cartItemRepository: Repository<CartItem>, // Injecting CartItem repository
  ) {}

  /**
   * Finds a cart by its ID.
   * @param {number} id - The ID of the cart to find.
   * @returns {Promise<Cart>} - The cart with the specified ID.
   */
  async findCartById(id: number): Promise<Cart> {
    const cart = await this.cartRepository.findOne({
      where: { id },
      relations: ["cartItems"],
    });
    if (!cart) {
      throw new Error(`Cart with ID ${id} not found`);
    }
    return cart;
  }

  /**
   * Adds an item to a cart.
   * @param {CartItem} cartItem - The cart item to add.
   * @returns {Promise<CartItem>} - The newly added cart item.
   */
  async addItemToCart(cartItem: CartItem): Promise<CartItem> {
    return await this.cartItemRepository.save(cartItem);
  }

  /**
   * Removes an item from a cart.
   * @param {number} cartItemId - The ID of the cart item to remove.
   * @returns {Promise<void>}
   */
  async removeItemFromCart(cartItemId: number): Promise<void> {
    await this.cartItemRepository.delete(cartItemId);
  }

  /**
   * Clears the cart by removing all items.
   * @param {number} cartId - The ID of the cart to clear.
   * @returns {Promise<void>}
   */
  async clearCart(cartId: number): Promise<void> {
    await this.cartItemRepository.delete({ cartId });
  }
}
