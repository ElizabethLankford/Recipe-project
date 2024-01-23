import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const recipeApi = createApi({
  reducerPath: "recipeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8081/api/",
    prepareHeaders: (headers, { getState }) => {
      const { token } = getState();
      token
        ? headers.set("Authorization", `Bearer ${token}`)
        : headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  tagTypes: ["Recipe", "User"],

  endpoints: (builder) => ({
    fetchRecipes: builder.query({
      query: () => "recipes",
      providesTags: ["Recipe"],
    }),
    fetchSingleRecipe: builder.query({
      query: (recipeId) => `recipes/${recipeId}`,
      providesTags: ["Recipe"],
    }),
    fetchRecipeIngredients: builder.query({
      query: (recipeId) => `recipes/${recipeId}/ingredients`,
      providesTags: ["Recipe"],
    }),
    register: builder.mutation({
      query: ({ username, password, firstname, lastname, email }) => ({
        url: "users/register",
        method: "POST",
        body: { username, password, firstname, lastname, email },
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "users/login",
        method: "POST",
        body: { ...data },
      }),
    }),
    fetchAllUsers: builder.query({
      query: () => "users",
      providesTags: ["User"],
    }),
    fetchUsersFavRecipes: builder.query({
      query: (userId) => `users/${userId}`,
      providesTags: ["User"],
    }),
    addRecipeToFavs: builder.mutation({
      query: (userId, { recipeId }) => ({
        url: `users/${userId}`,
        method: "POST",
        body: { recipeId },
      }),
    }),
  }),
});

export default recipeApi;

export const {
  useFetchRecipesQuery,
  useFetchSingleRecipeQuery,
  useFetchRecipeIngredientsQuery,
  useRegisterMutation,
  useLoginMutation,
  useFetchAllUsersQuery,
  useFetchUsersFavRecipesQuery,
  useAddRecipeToFavsMutation,
} = recipeApi;
