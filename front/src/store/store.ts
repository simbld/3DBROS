// store.ts
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productApiSlice } from "@services/productApiSlice";
import { cartApiSlice } from "@services/cartApiSlice";
import { orderApiSlice } from "@services/orderApiSlice";
import { userApiSlice } from "@services/userApiSlice";
import { authReducer } from "@reducers/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [productApiSlice.reducerPath]: productApiSlice.reducer,
    [cartApiSlice.reducerPath]: cartApiSlice.reducer,
    [orderApiSlice.reducerPath]: orderApiSlice.reducer,
    [userApiSlice.reducerPath]: userApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productApiSlice.middleware,
      cartApiSlice.middleware,
      orderApiSlice.middleware,
      userApiSlice.middleware,
    ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
