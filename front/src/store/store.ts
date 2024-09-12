import { cartApiSlice } from "@services/cartApiSlice";
import { orderApiSlice } from "@services/orderApiSlice";
import { productApiSlice } from "@services/productApiSlice";
import { userApiSlice } from "@services/userApiSlice";
import { authReducer } from "@reducers/authSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  PERSIST,
  FLUSH,
  PAUSE,
  REHYDRATE,
} from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

// Création d'un stockage factice pour éviter les erreurs côté serveur
const createNoopStorage = () => {
  return {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getItem(_key: string) {
      return Promise.resolve(null);
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setItem(_key: string, _value: any) {
      return Promise.resolve();
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    removeItem(_key: string) {
      return Promise.resolve();
    },
  };
};

// Utilisation du stockage factice côté serveur et localStorage côté client
const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

// Configuration de persist
const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  auth: authReducer,
  [productApiSlice.reducerPath]: productApiSlice.reducer,
  [cartApiSlice.reducerPath]: cartApiSlice.reducer,
  [orderApiSlice.reducerPath]: orderApiSlice.reducer,
  [userApiSlice.reducerPath]: userApiSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      productApiSlice.middleware,
      cartApiSlice.middleware,
      orderApiSlice.middleware,
      userApiSlice.middleware,
    ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type RootStateProps = ReturnType<typeof rootReducer>;
export default rootReducer;
export const persistor = persistStore(store);
