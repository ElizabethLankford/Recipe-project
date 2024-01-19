import { createSlice } from "@reduxjs/toolkit";
import recipeApi from "./recipeApi";

const initialState = {
  username: {},
  token:
    sessionStorage.getItem("token") === null
      ? ""
      : JSON.parse(sessionStorage.getItem("token")),
};

const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setUsername: (state, { payload }) => {
      state.username = payload;
    },
    setToken: (state, { payload }) => {
      state.token = payload;
      sessionStorage.setItem("token", JSON.stringify(state.token));
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
export const { setToken, setUsername } = tokenSlice.actions;
