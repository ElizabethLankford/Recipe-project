import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user:
    sessionStorage.getItem("user") === null
      ? {}
      : JSON.parse(sessionStorage.getItem("user")),
  token:
    sessionStorage.getItem("token") === null
      ? ""
      : JSON.parse(sessionStorage.getItem("token")),
};

const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      sessionStorage.setItem("user", JSON.stringify(state.user));
    },
    setToken: (state, payload) => {
      state.token = payload;
      sessionStorage.setItem("token", JSON.stringify(state.token));
    },
  },
});

/**
 * extraReducers: (builder) => {
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
 */

export default tokenSlice.reducer;
export const { setToken, setCredentials } = tokenSlice.actions;

export const selectCurrentUser = (state) => state.token.user;
export const selectCurrentToken = (state) => state.token.token;
