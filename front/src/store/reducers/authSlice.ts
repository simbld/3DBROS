import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import type { AppDispatch } from "@store/store";

const initialState = {
  token: null as string | null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = null;
    },
    refreshTokenSuccess: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export const { setToken, clearToken, refreshTokenSuccess } = authSlice.actions;

// Thunk pour rafraîchir le token
export const refreshToken = () => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.post(
      "/api/refresh-token",
      {},
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const newToken = response.data.token;

    dispatch(refreshTokenSuccess(newToken));

    axios.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;
  } catch (error) {
    console.error("Failed to refresh token", error);
    dispatch(clearToken());
  }
};

export const authReducer = authSlice.reducer;
