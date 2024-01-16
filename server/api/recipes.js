const express = require("express");
const router = express.Router();
const {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
} = require("../db/sqlHelperFuncs/recipes");

//GET - /api/recipes - get all recipes
router.get("/", async (req, res, next) => {
  try {
    const recipes = await getAllRecipes();
    res.send(recipes);
  } catch (error) {
    next(error);
  }
});

//GET - /api/recipes/id = get recipe by id
router.get("/:id", async (req, res, next) => {
  try {
    const recipe = await getRecipeById(req.params.id);
    res.send(recipe);
  } catch (error) {
    next(error);
  }
});

//POST - /api/recipes - create new recipe
router.post("/", async (req, res, next) => {
  try {
    const recipe = await createRecipe(req.body);

    const existingRecipe = await getRecipeById(recipe.id);
    if (existingRecipe) {
      res.send(existingRecipe);
    } else {
      const newRecipe = await createRecipe(recipe);
      if (newRecipe) {
        res.send(newRecipe);
      } else {
        next({
          name: "CreateRecipeError",
          message: "There was an error creating recipe",
        });
      }
    }
  } catch (error) {
    next(error);
  }
});

//PATCH - /api/recipes/id - update existing recipe
router.patch("/:id", async (req, res, next) => {
  try {
    const recipe = await updateRecipe(req.params.id, req.body);
    res.send(recipe);
  } catch (error) {
    next(error);
  }
});

//DELETE - /api/recipes/id = delete recipe
router.delete("/:id", async (req, res, next) => {
  try {
    const recipe = await deleteRecipe(req.params.id);
    res.send(recipe);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
