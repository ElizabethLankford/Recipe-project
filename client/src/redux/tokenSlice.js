import { createSlice } from "@reduxjs/toolkit";
import recipeApi from "./recipeApi";

const tokenSlice = createSlice({
  name: "token",
  initialState: null,
  reducers: {
    setToken: (state, { payload }) => {
      const { token } = payload;
      console.log("setToken :", token);
      return token;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      recipeApi.endpoints.register.matchFulfilled,
      (state, { payload }) => {
        const { token } = payload;
        return token;
      }
    );
    builder.addMatcher(
      recipeApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        const { token } = payload;
        return token;
      }
    );
  },
});

export default tokenSlice.reducer;
export const { setToken } = tokenSlice.actions;
