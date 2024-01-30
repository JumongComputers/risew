import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "../slices/bookingSlice";
import adminReducer from "../slices/adminSlice";
import authReducer from "../slices/authSlice";
import restaurantReducer from "../slices/restaurantSlice";

export const store = configureStore({
  reducer: {
    booking: bookingReducer,
    admin: adminReducer,
    auth: authReducer,
    restaurant: restaurantReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
