import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addingToCart: (state, { payload }) => {
      const isPresent = state.cart.find((item) => item._id === payload._id);

      if (isPresent) {
        state.cart = state.cart.map((item) => {
          if (item._id === payload._id) {
            return {
              ...item,
              qty: item.qty + 1,
            };
          }
        });
      } else {
        state.cart.push({ ...payload, qty: 1 });
      }

      // localStorage.setItem("cart", JSON.stringify(state));
    },
    clearCart: (state) => {
      state.cart = [];
    },
    removeItem: (state, { payload }) => {
      const data = state.cart.filter((item) => item._id != payload);
      state.cart = data;
    },
  },
  extraReducers: {},
});

export const { addingToCart, clearCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;

// Selector functions

export const selectCart = (state) => state.cart.cart;
