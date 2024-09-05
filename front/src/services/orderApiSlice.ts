import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Order } from "@interfaces/apiType";
import type { RootState } from "@store/store";

/**
 * API Slice pour gérer les commandes (CRUD).
 */
export const orderApiSlice = createApi({
  reducerPath: "orderApi",
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
     * Récupérer les commandes de l'utilisateur.
     * @returns {Order[]} Liste des commandes de l'utilisateur.
     */
    getOrders: builder.query<Order[], void>({
      query: () => "orders",
    }),
    /**
     * Créer une nouvelle commande.
     * @param {Order} body - Détails de la commande.
     * @returns {Order} La commande créée.
     */
    createOrder: builder.mutation<Order, Partial<Order>>({
      query: (body) => ({
        url: "orders",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetOrdersQuery, useCreateOrderMutation } = orderApiSlice;
