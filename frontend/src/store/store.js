import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import cartSlice from "../features/cartSlice";
import productsSlice from "../features/productsSlice";

export const store = configureStore({
  reducer: { products: productsSlice, cart: cartSlice, auth: authSlice },
});
