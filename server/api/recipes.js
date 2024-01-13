const express = require("express");
const router = express.Router();
const {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
} = require("../db/sqlHelperFuncs/recipes");

router.get("/", async (req, res, next) => {
  try {
    const recipes = getAllRecipes();
    res.send(recipes);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const recipe = await getRecipeById(req.params.id);
    res.send(recipe);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const recipe = await createRecipe(req.body);
    res.send(recipe);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const recipe = await updateRecipe(req.params.id);
    res.send(recipe);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const recipe = await deleteRecipe(req.params.id);
    res.send(recipe);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
