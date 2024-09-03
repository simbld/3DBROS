import {
  createApi,
  fetchBaseQuery,
  type BaseQueryFn,
  type FetchArgs,
  type FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import type { ApiResponse, Post, Product } from "src/interfaces/apiType";
import type { RootState } from "src/store/store";
import { refreshToken } from "src/store/slices/authSlice";

/**
 * Fonction pour gérer les erreurs globales, comme l'expiration de session.
 * @param {Object} args - Arguments de la requête.
 * @returns {Object} La réponse ou une erreur gérée.
 */
const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:4001",
  prepareHeaders: (headers, { getState }) => {
    // Exemple: ajout d'un token JWT dans les headers si disponible
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

/**
 * Fonction pour gérer les requêtes avec re-authentification automatique en cas d'erreur 401.
 * @param {Object} args - Arguments de la requête.
 * @param {Object} api - Objet API de RTK Query.
 * @param {Object} extraOptions - Options supplémentaires pour la requête.
 * @returns {Object} La réponse ou une erreur gérée.
 */
const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  // Si une erreur 401 (non autorisé) est rencontrée, on pourrait tenter de se reconnecter
  if (result.error && result.error.status === 401) {
    await api.dispatch(refreshToken() as any);
    result = await baseQuery(args, api, extraOptions);
  }

  return result;
};

/**
 * Création d'un API slice avec RTK Query pour gérer les opérations CRUD sur les posts et produits.
 */
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    // Endpoints pour les Posts
    getPosts: builder.query<
      ApiResponse<Post[]>,
      { page: number; limit: number }
    >({
      query: ({ page, limit }) => `posts?page=${page}&limit=${limit}`,
    }),
    addPost: builder.mutation<Post, Partial<Post>>({
      query: (body) => ({
        url: `posts`,
        method: "POST",
        body,
      }),
    }),
    updatePost: builder.mutation<Post, Partial<Post>>({
      query: ({ id, ...body }) => ({
        url: `posts/${id}`,
        method: "PUT",
        body,
      }),
    }),
    deletePost: builder.mutation<void, number>({
      query: (id) => ({
        url: `posts/${id}`,
        method: "DELETE",
      }),
    }),

    // Endpoints pour les Products
    getProducts: builder.query<
      ApiResponse<Product[]>,
      { page: number; limit: number }
    >({
      query: ({ page, limit }) => `products?page=${page}&limit=${limit}`,
    }),
    addProduct: builder.mutation<Product, Partial<Product>>({
      query: (body) => ({
        url: `products`,
        method: "POST",
        body,
      }),
    }),
    updateProduct: builder.mutation<Product, Partial<Product>>({
      query: ({ id, ...body }) => ({
        url: `products/${id}`,
        method: "PUT",
        body,
      }),
    }),
    deleteProduct: builder.mutation<void, number>({
      query: (id) => ({
        url: `products/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

// Export des hooks générés automatiquement par RTK Query pour utilisation dans les composants
export const {
  useGetPostsQuery,
  useAddPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
  useGetProductsQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = apiSlice;
