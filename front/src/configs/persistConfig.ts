import * as localforage from "localforage";
import { persistReducer } from "redux-persist";
import rootReducer from "@store/rootReducer";

import { Reducer, type AnyAction } from "@reduxjs/toolkit";

localforage.config({
  driver: localforage.INDEXEDDB,
  name: "3DBROS",
  storeName: "imageDataStore",
});

const persistConfig = {
  key: "root",
  version: 1,
  storage: localforage,
  whitelist: ["auth"],
};

export const persistedReducer: Reducer<any, AnyAction> = persistReducer(
  persistConfig,
  rootReducer,
);
