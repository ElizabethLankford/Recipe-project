//Recipe calls
const fetchAllRecipes = async () => {
  try {
    const request = await fetch(`http://localhost:8081/api/recipes`);
    const response = request.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};
const fetchRecipeById = async (id) => {
  try {
    const request = await fetch(`http://localhost:8081/api/recipes/${id}`);
    const response = await request.json();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

const fetchRecipeIngredients = async (id) => {
  try {
    const request = await fetch(
      `http://localhost:8081/api/recipes/${id}/ingredients`
    );
    const response = await request.json();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

const addNewRecipe = async () => {
  try {
    const request = await fetch(`http://localhost:8081/api/recipes`);
    const response = await request.json();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
const updateRecipe = async (id) => {
  try {
    const request = await fetch(`http://localhost:8081/api/recipes/${id}`);
    const response = await request.json();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
const deleteRecipe = async (id) => {
  try {
    const request = await fetch(`http://localhost:8081/api/recipes${id}`);
    const response = await request.json();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
// User calls
const fetchAllUsers = async () => {
  try {
    const request = await fetch(`http://localhost:8081/api/users`);
    const response = await request.json();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
const fetchUserByUsername = async () => {
  try {
    const request = await fetch(`http://localhost:8081/api/users/login`);
    const response = await request.json();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
const logoutUser = async () => {
  try {
    const request = await fetch(`http://localhost:8081/api/users/logout`);
    const response = await request.json();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
const addNewUser = async () => {
  try {
    const request = await fetch(`http://localhost:8081/api/users/register`);
    const response = await request.json();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
const deleteUser = async (userId) => {
  try {
    const request = await fetch(`http://localhost:8081/api/users/${userId}`);
    const response = await request.json();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export {
  fetchAllRecipes,
  fetchRecipeById,
  fetchRecipeIngredients,
  addNewRecipe,
  updateRecipe,
  deleteRecipe,
  fetchAllUsers,
  fetchUserByUsername,
  logoutUser,
  addNewUser,
  deleteUser,
};
