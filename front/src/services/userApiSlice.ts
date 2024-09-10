import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { User } from "@interfaces/apiType";
import type { RootState } from "@store/store";

/**
 * API Slice pour gérer les utilisateurs (CRUD).
 */
export const userApiSlice = createApi({
  reducerPath: "userApi",
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
     * Récupérer les informations de l'utilisateur.
     * @returns {User} Détails de l'utilisateur.
     */
    getUser: builder.query<User, void>({
      query: () => "user",
    }),
    /**
     * Mettre à jour les informations de l'utilisateur.
     * @param {Partial<User>} body - Détails mis à jour de l'utilisateur.
     * @returns {User} L'utilisateur mis à jour.
     */
    updateUser: builder.mutation<User, Partial<User>>({
      query: (body) => ({
        url: "user/update",
        method: "PUT",
        body,
      }),
    }),
  }),
});

export const { useGetUserQuery, useUpdateUserMutation } = userApiSlice;
