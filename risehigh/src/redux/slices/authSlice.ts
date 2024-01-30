import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../services/authService";
import { LoginTypes } from "@/types/auth";
import { toast } from "react-toastify";

export interface AuthState {
  user: any;
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: "idle",
  error: null,
};

// Async thunk for user login
export const userLogin = createAsyncThunk("auth/userLogin", async (loginData: LoginTypes, thunkAPI) => {
  try {
    console.log("Logging in with data:", loginData);
    const response = await authService.login(loginData);
    console.log("Response from userLogin:", response);
    return response;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.user = action.payload;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = "failed";
        toast.error("login failed");
        state.error = action.error.message || null;
      });
  },
});

export default authSlice.reducer;
