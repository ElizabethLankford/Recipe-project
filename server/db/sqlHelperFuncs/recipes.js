const client = require("../client");
const util = require("../utils");

const getAllRecipes = async () => {
  try {
    const { rows } = await client.query(`
    SELECT * FROM recipes;
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
const getRecipeIngredients = async (recipeId) => {
  try {
    const {
      rows: [recipe],
    } = await client.query(`
    SELECT * FROM recipes 
    WHERE "id" = ${recipeId};
    `);
    return recipe;
  } catch (error) {
    throw error;
  }
};
const createRecipe = async (body) => {
  try {
    const {
      rows: [recipe],
    } = await client.query(
      `INSERT INTO recipes(name, description, instructions, category)
    VALUES($1, $2, $3, $4)
    RETURNING *;`,
      [body.name, body.description, body.instructions, body.category]
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
    const { rows } = await client.query(
      'DELETE FROM recipes WHERE "id"=$1 RETURNING *',
      [recipeId]
    );
    return rows[0];
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllRecipes,
  getRecipeById,
  getRecipeIngredients,
  createRecipe,
  updateRecipe,
  deleteRecipe,
};
