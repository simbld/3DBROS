import {
  createApi,
  fetchBaseQuery,
  type BaseQueryApi,
  type FetchArgs,
} from "@reduxjs/toolkit/query/react";
import type { ApiResponse, Product } from "@interfaces/apiType";
import { refreshToken } from "@store/reducers/authSlice";
import type { RootState } from "@store/store";

/**
 * BaseQuery pour gérer les requêtes avec token d'authentification.
 */
const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:4001",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

/**
 * BaseQuery avec gestion des erreurs et de la réauthentification.
 */
const baseQueryWithReauth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: {},
) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    await api.dispatch(refreshToken() as any);
    result = await baseQuery(args, api, extraOptions);
  }
  return result;
};

/**
 * API Slice pour gérer les produits (CRUD).
 */
export const productApiSlice = createApi({
  reducerPath: "productApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    /**
     * Récupérer la liste des produits avec pagination.
     * @param {Object} param - Objet contenant la page et la limite.
     * @returns {ApiResponse<Product[]>} Liste des produits.
     */
    getProducts: builder.query<
      ApiResponse<Product[]>,
      { page: number; limit: number }
    >({
      query: ({ page, limit }) => `products?page=${page}&limit=${limit}`,
      keepUnusedDataFor: 60,
    }),
    /**
     * Ajouter un nouveau produit.
     * @param {Product} body - Détails du produit.
     * @returns {Product} Le produit créé.
     */
    addProduct: builder.mutation<Product, Partial<Product>>({
      query: (body) => ({
        url: "products",
        method: "POST",
        body,
      }),
    }),
    /**
     * Mettre à jour un produit.
     * @param {Partial<Product>} body - Détails du produit mis à jour.
     * @returns {Product} Le produit mis à jour.
     */
    updateProduct: builder.mutation<Product, Partial<Product>>({
      query: ({ id, ...body }) => ({
        url: `products/${id}`,
        method: "PUT",
        body,
      }),
    }),
    /**
     * Supprimer un produit.
     * @param {number} id - ID du produit à supprimer.
     */
    deleteProduct: builder.mutation<void, number>({
      query: (id) => ({
        url: `products/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApiSlice;
