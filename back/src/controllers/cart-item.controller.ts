import {
  Controller,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  ParseIntPipe,
} from "@nestjs/common";
import { CartItemService } from "@serviceCartItem";
import { CreateCartItemDto } from "@dtoCartItem/create-cart-item.dto";
import { UpdateCartItemDto } from "@dtoCartItem/update-cart-item.dto";
import type { CartItem } from "@entityCartItem";

/**
 * REST controller for managing cart items.
 * This controller handles HTTP requests related to the CartItem entity.
 */
@Controller("cart-item")
export class CartItemController {
  constructor(private readonly cartItemService: CartItemService) {}

  /**
   * Adds a new item to the cart.
   * @param {CreateCartItemDto} createCartItemDto - The DTO for creating a new cart item.
   * @returns {Promise<CartItem>} - The created cart item.
   */
  @Post()
  async addItemToCart(
    @Body() createCartItemDto: CreateCartItemDto,
  ): Promise<CartItem> {
    return await this.cartItemService.addItemToCart(createCartItemDto);
  }

  /**
   * Updates an existing cart item.
   * @param {number} id - The ID of the cart item to update.
   * @param {UpdateCartItemDto} updateCartItemDto - The DTO for updating the cart item.
   * @returns {Promise<CartItem>} - The updated cart item.
   */
  @Patch("/:id")
  async updateCartItem(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateCartItemDto: UpdateCartItemDto,
  ): Promise<CartItem> {
    return await this.cartItemService.updateCartItem(id, updateCartItemDto);
  }

  /**
   * Removes an item from the cart.
   * @param {number} id - The ID of the cart item to remove.
   * @returns {Promise<{ success: boolean; message: string }>} - Success message.
   */
  @Delete("/:id")
  async removeCartItem(
    @Param("id", ParseIntPipe) id: number,
  ): Promise<{ success: boolean; message: string }> {
    return await this.cartItemService.removeCartItem(id);
  }
}
