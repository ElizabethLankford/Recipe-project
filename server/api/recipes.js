const express = require("express");
const router = express.Router();
const {
  getAllRecipes,
  getRecipeById,
  getRecipeIngredients,
  createRecipe,
  updateRecipe,
  deleteRecipe,
} = require("../db/sqlHelperFuncs/recipes");
const { addRecipeToUsersFav } = require("../db/sqlHelperFuncs/users");
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

//POST - /api/recipes/id = add recipe to user favorites

//GET - /api/recipes/id/ingredients = get recipe ingredients
router.get("/:id/ingredients", async (req, res, next) => {
  try {
    const recipeIng = await getRecipeIngredients(req.params.id);
    res.send(recipeIng);
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
//POST add a recipe to users favorite list(ERROR with login)
router.post("/:id", async (req, res, next) => {
  try {
    const newFav = await addRecipeToUsersFav(req.body);
    res.send(newFav);
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
