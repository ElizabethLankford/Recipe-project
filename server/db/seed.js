const client = require("./client");
const { recipes, ingredients, measurements, users } = require("./seedData");

const dropTables = async () => {
  try {
    console.log("Dropping tables...");
    await client.query(`
        DROP TABLE IF EXISTS user_recipes;
        DROP TABLE IF EXISTS recipe_ingredients;
        DROP TABLE IF EXISTS recipes;
        DROP TABLE IF EXISTS ingredients;
        DROP TABLE IF EXISTS measurements;
        

        `);
  } catch (error) {
    console.log("Error dropping tables");
    throw error;
  }
};

const createTables = async () => {
  try {
    console.log("Building tables...");
    await client.query(`
        CREATE TABLE recipes (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            description VARCHAR(255),
            instructions TEXT,
            category VARCHAR(100)
        );
        CREATE TABLE ingredients (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL
        );
        CREATE TABLE measurements (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL
        );
        CREATE TABLE user_recipes (
            user_id INTEGER REFERENCES users(id) NOT NULL,
            recipe_id INTEGER REFERENCES recipes(id) NOT NULL
        );
        CREATE TABLE recipe_ingredients (
            recipe_ing_id SERIAL PRIMARY KEY,
            recipe_id INTEGER REFERENCES recipes(id) NOT NULL,
            ingredient_id INTEGER REFERENCES ingredients(id) NOT NULL,
            measure_id INTEGER REFERENCES measurements(id),
            ingredient_quantity FLOAT
        );
        `);
    console.log("tables successfully created!");
  } catch (error) {
    console.error(error);
  }
};

const createInitialRecipes = async () => {
  try {
    const recipePromise = recipes.map((recipe) => {
      return client.query(
        `
        INSERT INTO recipes(name,description,instructions,category)
        VALUES($1, $2, $3, $4)
        RETURNING *;
        `,
        Object.values(recipe)
      );
    });
    await Promise.all(recipePromise);
    console.log("created recipes!");
  } catch (error) {
    throw error;
  }
};

const createInitialIngredients = async () => {
  try {
    const ingredientsPromise = ingredients.map((ing) => {
      return client.query(
        `
        INSERT INTO ingredients (name)
        VALUES ($1)
        RETURNING *;
        `,
        Object.values(ing)
      );
    });
    await Promise.all(ingredientsPromise);
    console.log("Finished creating ingredients!");
  } catch (error) {
    throw error;
  }
};

const createInitialMeasurements = async () => {
  try {
    const measurementsPromise = measurements.map((unit) => {
      return client.query(
        `
            INSERT INTO measurements (name)
            VALUES ($1)
            RETURNING *;
            `,
        Object.values(unit)
      );
    });
    await Promise.all(measurementsPromise);
    console.log("Finished creating measurements!");
  } catch (error) {
    throw error;
  }
};

const createInitialRecipe_Ingredients = async () => {
  try {
    await client.query(`
   INSERT INTO recipe_ingredients (recipe_id, ingredient_id, measure_id, ingredient_quantity)
   VALUES (1,1, 10, 1);
   INSERT INTO recipe_ingredients (recipe_id, ingredient_id, measure_id, ingredient_quantity)
   VALUES (1,2, 10, 2);

   INSERT INTO recipe_ingredients (recipe_id, ingredient_id, measure_id, ingredient_quantity)
   VALUES (2,8, 5, 1);
   INSERT INTO recipe_ingredients (recipe_id, ingredient_id, measure_id, ingredient_quantity)
   VALUES (2,9, 5, 1);

   INSERT INTO recipe_ingredients (recipe_id, ingredient_id, measure_id, ingredient_quantity)
   VALUES (3,3, 10, 2);
   INSERT INTO recipe_ingredients (recipe_id, ingredient_id, measure_id, ingredient_quantity)
   VALUES (3,6, 5, 1);
   INSERT INTO recipe_ingredients (recipe_id, ingredient_id, measure_id, ingredient_quantity)
   VALUES (3,7, 5, 1);
   `);
    console.log("Recipe_ingredients table populated!");
  } catch (error) {
    throw error;
  }
};

const createInitialUsers = async () => {
  try {
    const usersPromise = users.map((user) => {
      return client.query(
        `
            INSERT INTO users (username,password,firstname,lastname,email)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *;
            `,
        Object.values(user)
      );
    });
    await Promise.all(usersPromise);
  } catch (error) {
    throw error;
  }
};

const createUserRecipes = async () => {
  try {
    await client.query(`
    INSERT INTO user_recipes (user_id,recipe_id)
    VALUES (5,3 );
    INSERT INTO user_recipes (user_id,recipe_id)
    VALUES (5,2 );
    INSERT INTO user_recipes (user_id,recipe_id)
    VALUES (6,3 );
    `);
    console.log("created users recipes!");
  } catch (error) {
    throw error;
  }
};

const buildDb = async () => {
  try {
    client.connect();
    await dropTables();
    await createTables();

    await createInitialRecipes();
    await createInitialIngredients();
    await createInitialMeasurements();
    await createInitialRecipe_Ingredients();
    await createUserRecipes();
  } catch (error) {
    console.error(error);
  } finally {
    client.end();
  }
};

buildDb();
