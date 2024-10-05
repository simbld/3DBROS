import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CartItem } from "@entityCartItem";
import { CreateCartItemDto } from "@dtoCartItem/create-cart-item.dto";
import { UpdateCartItemDto } from "@dtoCartItem/update-cart-item.dto";

/**
 * Service for managing cart item operations in the e-commerce system.
 * This service handles business logic related to the CartItem entity.
 */
@Injectable()
export class CartItemService {
  constructor(
    @InjectRepository(CartItem)
    private readonly cartItemRepository: Repository<CartItem>,
  ) {}

  /**
   * Adds an item to a cart.
   * @param {CreateCartItemDto} createCartItemDto - The DTO for creating a new cart item.
   * @returns {Promise<CartItem>} - The created cart item.
   */
  async addItemToCart(createCartItemDto: CreateCartItemDto): Promise<CartItem> {
    const newCartItem = this.cartItemRepository.create(createCartItemDto);
    return await this.cartItemRepository.save(newCartItem);
  }

  /**
   * Updates a cart item.
   * @param {UpdateCartItemDto} updateCartItemDto - The DTO for updating a cart item.
   * @returns {Promise<CartItem>} - The updated cart item.
   */
  async updateCartItem(
    id: number,
    updateCartItemDto: UpdateCartItemDto,
  ): Promise<CartItem> {
    const cartItem = await this.findCartItemById(id);
    if (!cartItem) {
      throw new NotFoundException(`Cart item with ID ${id} not found`);
    }

    Object.assign(cartItem, updateCartItemDto);
    return this.cartItemRepository.save(cartItem);
  }

  /**
   * Removes an item from a cart by its ID.
   * @param {number} id - The ID of the cart item to remove.
   * @returns {Promise<{ success: boolean; message: string }>} - The result of the removal operation.
   */
  async removeCartItem(
    id: number,
  ): Promise<{ success: boolean; message: string }> {
    const cartItem = await this.findCartItemById(id);
    if (!cartItem) {
      throw new NotFoundException(`Cart item with ID ${id} not found`);
    }

    await this.cartItemRepository.remove(cartItem);

    return {
      success: true,
      message: "Cart item successfully removed",
    };
  }

  /**
   * Finds a cart item by its ID.
   * @param {number} id - The ID of the cart item to find.
   * @returns {Promise<CartItem>} - The found cart item.
   */
  async findCartItemById(id: number): Promise<CartItem> {
    const cartItem = await this.cartItemRepository.findOne({ where: { id } });
    if (!cartItem) {
      throw new NotFoundException(`Cart item with ID ${id} not found`);
    }
    return cartItem;
  }
}
