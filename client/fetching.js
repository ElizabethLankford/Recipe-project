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
