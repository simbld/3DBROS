import { Cart } from "@entityCart";
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

/**
 * Service for managing cart operations in the e-commerce system.
 * This service handles business logic related to the Cart entity.
 * @class CartService
 */
@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private readonly cartRepository: Repository<Cart>,
  ) {}

  /**
   * Finds or creates a cart for the user.
   * @param {number} userId - The ID of the user to find or create the cart for.
   * @returns {Promise<Cart>} - The user's cart.
   */
  async findOrCreateCart(userId: number): Promise<Cart> {
    let cart = await this.cartRepository.findOne({
      where: { userId },
      relations: ["cartItems"],
    });

    if (!cart) {
      cart = this.cartRepository.create({
        userId,
        cartItems: [],
      });
      await this.cartRepository.save(cart);
    }

    return cart;
  }

  /**
   * Finds a cart by its ID.
   * @param {number} id - The ID of the cart to find.
   * @returns {Promise<Cart>} - The found cart.
   */
  async findCartById(id: number): Promise<Cart> {
    const cart = await this.cartRepository.findOne({
      where: { id },
      relations: ["cartItems"],
    });
    if (!cart) {
      throw new NotFoundException(`Cart with ID ${id} not found`);
    }
    return cart;
  }

  /**
   * Deletes a cart by its ID.
   * @param {number} id - The ID of the cart to delete.
   * @returns {Promise<{ success: boolean; message: string }>}
   */
  async deleteCartById(
    id: number,
  ): Promise<{ success: boolean; message: string }> {
    const cart = await this.findCartById(id);

    if (!cart) {
      throw new NotFoundException(`Cart with ID ${id} not found`);
    }

    // Cascade delete associated cart items
    await this.cartRepository.remove(cart);

    return {
      success: true,
      message: "Panier supprimé avec succès",
    };
  }

  /**
   * Clears a cart by user ID.
   * @param {number} userId - The ID of the user whose cart will be cleared.
   * @returns {Promise<{ success: boolean; message: string }>} - Success message.
   */
  async clearCartByUserId(
    userId: number,
  ): Promise<{ success: boolean; message: string }> {
    const cart = await this.findOrCreateCart(userId);

    if (!cart) {
      throw new NotFoundException(`Cart for user with ID ${userId} not found`);
    }

    cart.cartItems = [];
    await this.cartRepository.save(cart);

    return {
      success: true,
      message: "Panier vidé avec succès",
    };
  }
}
