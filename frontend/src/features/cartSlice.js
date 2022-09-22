import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addingToCart: (state, { payload }) => {
      state.push(payload);
      // localStorage.setItem("cart", JSON.stringify(state));
    },
    clearCart: (state) => {
      state.length = 0;
    },
    removeItem: (state, { payload }) => {
      console.log("payload", payload);

      console.log("state before", state);
      state = state.filter((item) => item._id !== payload._id);
      console.log("state after", state);
    },
  },
  extraReducers: {},
});

export const { addingToCart, clearCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;

// Selector functions

export const selectCart = (state) => state.cart;
