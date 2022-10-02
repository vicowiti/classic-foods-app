import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user || null,
  isPending: false,
  isError: false,
};

// Registration Logic

export const regNewUser = createAsyncThunk("auth/regNewUser", async (user) => {
  const response = await axios.post(
    "http://localhost:5000/auth/register",
    user
  );
  localStorage.setItem("user", JSON.stringify(response?.data));

  return response.data;
});

// Login Logic
export const loginUser = createAsyncThunk("auth/loginUser", async (user) => {
  const response = await axios.post("http://localhost:5000/auth/login", user);

  localStorage.setItem("user", JSON.stringify(response?.data));

  return response.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      localStorage.removeItem("user");
      state.user = null;
    },
  },
  extraReducers: {
    [regNewUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isPending = false;
      state.isError = false;
    },
    [regNewUser.pending]: (state, { payload }) => {
      state.user = null;
      state.isPending = true;
      state.isError = false;
    },
    [regNewUser.rejected]: (state, { payload }) => {
      state.user = payload;
      state.isPending = false;
      state.isError = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isPending = false;
      state.isError = false;
    },
    [loginUser.pending]: (state, { payload }) => {
      state.user = null;
      state.isPending = true;
      state.isError = false;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.user = null;
      state.isPending = true;
      state.isError = false;
    },
  },
});

export default authSlice.reducer;

export const { logOut } = authSlice.actions;

export const selectAuth = (state) => state.auth;
