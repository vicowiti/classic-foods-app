import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await axios.get("http://localhost:5000/api/v1/products");

    return response.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [getProducts.fulfilled]: (state, { payload }) => {
      state.products = payload;
    },
  },
});

export const {} = productSlice.actions;

export default productSlice.reducer;

// Select all products
export const selectAllProducts = (state) => state.products.products;
