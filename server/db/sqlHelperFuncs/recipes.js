const client = require("../client");
const util = require("../utils");

const getAllRecipes = async () => {
  try {
    const { rows } = await client.query(`
    SELECT * FROM recipes
    ORDER BY name ASC;
    `);
    return rows;
  } catch (error) {
    throw error;
  }
};
const getRecipeById = async (recipeId) => {
  try {
    const {
      rows: [recipe],
    } = await client.query(`
    SELECT * FROM recipes WHERE "id" = ${recipeId};
    `);
    return recipe;
  } catch (error) {
    throw error;
  }
};
const getIngredientById = async (id) => {
  try {
    const {
      rows: [ing],
    } = await client.query(`
    SELECT * FROM ingredients WHERE "id" = ${id};
    `);
    return ing;
  } catch (error) {
    throw error;
  }
};
const getRecipeIngredients = async (recipeId) => {
  try {
    const { rows } = await client.query(`
    SELECT
          i.id AS ingredientId,
          i.name AS ingredientName,
          q.ingredient_quantity AS ingredientQuantity,
          m.name AS measurementName
    FROM ingredients AS i
    JOIN recipe_ingredients AS q On q.ingredient_id = i.id
    JOIN measurements AS m On m.id = q.measure_id
    JOIN recipes AS r On r.id = q.recipe_id
    WHERE r.id = ${recipeId}
    ORDER BY i.name ASC
    ;
    `);
    return rows;
  } catch (error) {
    throw error;
  }
};
const addIngrendients = async (body) => {
  try {
    const {
      rows: [ing],
    } = await client.query(
      `
    INSERT INTO ingredients (name)
    VALUES ($1)
    RETURNING id;
    `,
      [body.nameParam]
    );
    return ing;
  } catch (error) {
    throw error;
  }
};
const addIngredientsToRecipe = async (body) => {
  try {
    const {
      rows: [item],
    } = await client.query(
      `
      INSERT INTO recipe_ingredients (recipe_id, ingredient_id, measure_id, ingredient_quantity)
     VALUES ($1, $2, $3, $4)
     RETURNING *;
      `,
      [body.recipeid, body.ingredientid, body.measureid, body.amount]
    );
    return item;
  } catch (error) {
    throw error;
  }
};
const createRecipe = async (body) => {
  try {
    const {
      rows: [recipe],
    } = await client.query(
      `INSERT INTO recipes(name, description, image, instructions, category)
    VALUES($1, $2, $3, $4, $5)
    RETURNING *;`,
      [
        body.name,
        body.description,
        body.image,
        body.instructions,
        body.category,
      ]
    );
    return recipe;
  } catch (error) {
    throw error;
  }
};

const updateRecipe = async (id, fields) => {
  try {
    const toUpdate = {};
    for (let column in fields) {
      if (fields[column] !== undefined) toUpdate[column] = fields[column];
    }
    let recipe;

    if (util.dbFields(toUpdate).insert.length > 0) {
      const { rows } = await client.query(
        `
        UPDATE recipes 
        SET ${util.dbFields(toUpdate).insert}
        WHERE id=${id}
        RETURNING *;
        `,
        Object.values(toUpdate)
      );
      recipe = rows[0];
    }
    return recipe;
  } catch (error) {
    throw error;
  }
};

const deleteRecipe = async (recipeId) => {
  try {
    const {
      rows: [recipe],
    } = await client.query(
      `
      DELETE FROM recipes WHERE "id"=$1 RETURNING *;`,
      [recipeId]
    );
    return recipe;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllRecipes,
  getRecipeById,
  addIngrendients,
  getIngredientById,
  addIngredientsToRecipe,
  getRecipeIngredients,
  createRecipe,
  updateRecipe,
  deleteRecipe,
};
