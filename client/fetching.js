//Recipe calls
const fetchAllRecipes = async () => {
  try {
    const request = await fetch();
    const response = request.json();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
fetchAllRecipes();
const fetchRecipeById = async () => {
  try {
    const request = await fetch();
    const response = await request.json();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
const addNewRecipe = async () => {
  try {
    const request = await fetch();
    const response = await request.json();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
const updateRecipe = async () => {
  try {
    const request = await fetch();
    const response = await request.json();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
const deleteRecipe = async () => {
  try {
    const request = await fetch();
    const response = await request.json();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
// User calls
const fetchAllUsers = async () => {
  try {
    const request = await fetch();
    const response = await request.json();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
const fetchUserByUsername = async () => {
  try {
    const request = await fetch();
    const response = await request.json();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
const addNewUser = async () => {
  try {
    const request = await fetch();
    const response = await request.json();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export {
  fetchAllRecipes,
  fetchRecipeById,
  addNewRecipe,
  updateRecipe,
  deleteRecipe,
  fetchAllUsers,
  fetchUserByUsername,
  addNewUser,
};
