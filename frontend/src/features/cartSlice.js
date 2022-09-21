import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addingToCart: (state, { payload }) => {
      state.push(payload);
      localStorage.setItem("cart", JSON.stringify(state));
    },
    clearCart: (state) => {
      state = [];
    },
  },
  extraReducers: {},
});

export const { addingToCart } = cartSlice.actions;

export default cartSlice.reducer;

// Selector functions

export const selectCart = (state) => state.cart;
