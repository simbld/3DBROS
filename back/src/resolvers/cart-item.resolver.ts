import { Resolver, Mutation, Args, Int } from "@nestjs/graphql";
import { CartItemService } from "@serviceCartItem";
import { CartItem } from "@entityCartItem";
import { CreateCartItemDto } from "@dtoCartItem/create-cart-item.dto";
import { UpdateCartItemDto } from "@dtoCartItem/update-cart-item.dto";

/**
 * Resolver for handling GraphQL requests related to the CartItem.
 * This resolver is responsible for querying and mutating cart item data.
 */
@Resolver(() => CartItem)
export class CartItemResolver {
  constructor(private readonly cartItemService: CartItemService) {}

  /**
   * Adds an item to the cart.
   * @param {CreateCartItemDto} createCartItemDto - The input to add an item to the cart.
   * @returns {Promise<CartItem>} - The newly added cart item.
   */
  @Mutation(() => CartItem)
  async addItemToCart(
    @Args("createCartItemDto") createCartItemDto: CreateCartItemDto,
  ): Promise<CartItem> {
    return await this.cartItemService.addItemToCart(createCartItemDto);
  }

  /**
   * Updates an existing cart item.
   * @param {UpdateCartItemDto} updateCartItemDto - The input to update the cart item.
   * @returns {Promise<CartItem>} - The updated cart item.
   */
  @Mutation(() => CartItem)
  async updateCartItem(
    @Args("id", { type: () => Int }) id: number,
    @Args("updateCartItemDto") updateCartItemDto: UpdateCartItemDto,
  ): Promise<CartItem> {
    return await this.cartItemService.updateCartItem(id, updateCartItemDto);
  }

  /**
   * Removes an item from the cart.
   * @param {number} id - The ID of the cart item to remove.
   * @returns {Promise<{ success: boolean; message: string }>} - Success response.
   */
  @Mutation(() => Boolean)
  async removeCartItem(
    @Args("id", { type: () => Int }) id: number,
  ): Promise<{ success: boolean; message: string }> {
    return await this.cartItemService.removeCartItem(id);
  }
}
