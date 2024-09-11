import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "@reducers/authSlice";
import { productApiSlice } from "@services/productApiSlice";
import { cartApiSlice } from "@services/cartApiSlice";

// Création d'un mock du store Redux
export const mockStore = (preloadedState?: any) => {
  return configureStore({
    reducer: {
      auth: authReducer,
      [productApiSlice.reducerPath]: jest.fn(() => ({})), // Mock du reducer de productApi
      [cartApiSlice.reducerPath]: jest.fn(() => ({})), // Mock du reducer de cartApi
    },
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        // Simule les middlewares d'API si nécessaire
        jest.fn(),
        jest.fn(),
      ),
  });
};

export type AppDispatch = ReturnType<typeof mockStore>["dispatch"];
export type RootState = ReturnType<typeof mockStore>["getState"];
