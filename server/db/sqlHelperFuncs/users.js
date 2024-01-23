const client = require("../client");

const createUser = async ({
  username,
  password,
  firstname,
  lastname,
  email,
}) => {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
    INSERT INTO users( username,
        password,
        firstname,
        lastname,
        email)
    VALUES($1, $2, $3, $4, $5)
    RETURNING *;
    `,
      [username, password, firstname, lastname, email]
    );
    return user;
  } catch (error) {
    throw error;
  }
};

const getAllUsers = async () => {
  try {
    const { rows } = await client.query(`
        SELECT * FROM users;
        `);
    return rows;
  } catch (error) {
    throw error;
  }
};

const getUserByUsername = async (username) => {
  try {
    const {
      rows: [user],
    } = await client.query(`
        SELECT * FROM users WHERE users.username = '${username}'
        `);
    return user;
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (id) => {
  try {
    const { rows } = await client.query(
      `DELETE FROM users WHERE "id"=$1 RETURNING *`,
      [id]
    );
    return rows[0];
  } catch (error) {
    throw error;
  }
};

const getUserFavRecipes = async (userId) => {
  try {
    const { rows } = await client.query(`
    SELECT 
            u.user_id AS userID,
            r.id AS recipeID,
            r.name AS recipeName,
            r.description AS recipeDes,
            r.instructions AS recipeSteps,
            r.category AS recipeCategory
    FROM user_recipes AS u
    JOIN recipes AS r ON u.recipe_id = r.id 
    WHERE user_id = ${userId};
    `);
    return rows;
  } catch (error) {
    throw error;
  }
};

const addRecipeToUsersFav = async (userId, recipeId) => {
  try {
    const {
      rows: [recipe],
    } = await client.query(
      `
      INSERT INTO user_recipes(user_id,recipe_id)
      VALUES ($1,$2)
      RETURNING *;
    `,
      [userId, recipeId]
    );
    return recipe;
  } catch (error) {
    throw error;
  }
};
module.exports = {
  createUser,
  getAllUsers,
  getUserByUsername,
  deleteUser,
  getUserFavRecipes,
  addRecipeToUsersFav,
};
