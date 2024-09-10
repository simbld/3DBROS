import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Cart } from "@interfaces/apiType";
import type { RootState } from "@store/store";

/**
 * API Slice pour gérer le panier (CRUD).
 */
export const cartApiSlice = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4001",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    /**
     * Récupérer les produits dans le panier de l'utilisateur.
     * @returns {Cart} Le contenu du panier.
     */
    getCart: builder.query<Cart, void>({
      query: () => "cart",
    }),
    /**
     * Ajouter un produit au panier.
     * @param {number} productId - ID du produit à ajouter au panier.
     */
    addToCart: builder.mutation<void, { productId: number }>({
      query: ({ productId }) => ({
        url: "cart/add",
        method: "POST",
        body: { productId },
      }),
    }),
    /**
     * Supprimer un produit du panier.
     * @param {number} productId - ID du produit à supprimer du panier.
     */
    removeFromCart: builder.mutation<void, { productId: number }>({
      query: ({ productId }) => ({
        url: "cart/remove",
        method: "DELETE",
        body: { productId },
      }),
    }),
  }),
});

export const {
  useGetCartQuery,
  useAddToCartMutation,
  useRemoveFromCartMutation,
} = cartApiSlice;
