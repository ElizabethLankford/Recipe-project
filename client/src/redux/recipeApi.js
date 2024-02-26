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
  tagTypes: ["Recipe", "Ingredient", "User", "Favorites"],

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
      providesTags: ["Ingredient"],
    }),
    register: builder.mutation({
      query: ({ username, password, firstname, lastname, email }) => ({
        url: "users/register",
        method: "POST",
        body: { username, password, firstname, lastname, email },
      }),
      providesTags: ["User"],
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "users/login",
        method: "POST",
        body: { ...data },
      }),
      providesTags: ["User"],
    }),
    fetchAllUsers: builder.query({
      query: () => "users",
      providesTags: ["User"],
    }),
    fetchUsersFavRecipes: builder.query({
      query: (userId) => `users/${userId}/favorites`,
      providesTags: ["User", "Favorites"],
    }),
    addRecipeToFavs: builder.mutation({
      query: ({ userId, recipeId }) => ({
        url: `recipes/${recipeId}`,
        method: "POST",
        body: { userId, recipeId },
      }),
      invalidatesTags: ["User", "Favorites"],
    }),
    addNewRecipe: builder.mutation({
      query: (data) => ({
        url: "recipes",
        method: "POST",
        body: { ...data },
      }),
      invalidatesTags: ["Recipe"],
    }),
    addIngToRecipe: builder.mutation({
      query: (data) => ({
        url: `recipes/addrecipe`,
        method: "POST",
        body: { ...data },
      }),
      invalidatesTags: ["Ingredient", "Recipe"],
    }),
    addIngredients: builder.mutation({
      query: (nameParam, recipeId) => ({
        url: `recipes/addrecipe/${recipeId}`,
        method: "POST",
        body: { nameParam },
      }),
      invalidatesTags: ["Ingredient", "Recipe"],
    }),
    deleteRecipe: builder.mutation({
      query: ({ recipeId }) => ({
        url: `recipes/${recipeId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Recipe"],
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
  useAddIngredientsMutation,
  useAddIngToRecipeMutation,
  useFetchUsersFavRecipesQuery,
  useAddRecipeToFavsMutation,
  useAddNewRecipeMutation,
  useDeleteRecipeMutation,
} = recipeApi;
