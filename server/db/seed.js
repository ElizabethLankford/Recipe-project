const client = require("./client");
const { recipes, ingredients, measurements, users } = require("./seedData");

const dropTables = async () => {
  try {
    console.log("Dropping tables...");
    await client.query(`
        DROP TABLE IF EXISTS user_recipes CASCADE;
        DROP TABLE IF EXISTS recipe_ingredients CASCADE;
        DROP TABLE IF EXISTS recipes CASCADE;
        DROP TABLE IF EXISTS ingredients CASCADE;
        DROP TABLE IF EXISTS measurements CASCADE;
        DROP TABLE IF EXISTS users CASCADE;
        

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
            image TEXT,
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
        CREATE TABLE users (
          id SERIAL PRIMARY KEY,
          username VARCHAR(100) UNIQUE NOT NULL,
          password VARCHAR(100) NOT NULL,
          firstname VARCHAR(100),
          email VARCHAR(100)
      );
        CREATE TABLE user_recipes (
            user_id INTEGER REFERENCES users(id) NOT NULL,
            recipe_id INTEGER REFERENCES recipes(id) ON DELETE CASCADE
        );
        CREATE TABLE recipe_ingredients (
            recipe_ing_id SERIAL PRIMARY KEY,
            recipe_id INTEGER REFERENCES recipes(id) ON DELETE CASCADE,
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
        INSERT INTO recipes(name,description,image,instructions,category)
        VALUES($1, $2, $3, $4, $5)
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
   VALUES (1,16, 12, 1);
   INSERT INTO recipe_ingredients (recipe_id, ingredient_id, measure_id, ingredient_quantity)
   VALUES (1,17, 3, 2);
   INSERT INTO recipe_ingredients (recipe_id, ingredient_id, measure_id, ingredient_quantity)
   VALUES (1,19, 4, 8);
   INSERT INTO recipe_ingredients (recipe_id, ingredient_id, measure_id, ingredient_quantity)
   VALUES (1,20, 4, 6);
   INSERT INTO recipe_ingredients (recipe_id, ingredient_id, measure_id, ingredient_quantity)
   VALUES (1,26, 2, 0);
   INSERT INTO recipe_ingredients (recipe_id, ingredient_id, measure_id, ingredient_quantity)
   VALUES (1,21, 8, 2);
   INSERT INTO recipe_ingredients (recipe_id, ingredient_id, measure_id, ingredient_quantity)
   VALUES (1,22, 6, 1.5);
   INSERT INTO recipe_ingredients (recipe_id, ingredient_id, measure_id, ingredient_quantity)
   VALUES (1,23, 6, 1.5);
   INSERT INTO recipe_ingredients (recipe_id, ingredient_id, measure_id, ingredient_quantity)
   VALUES (1,24, 2, 0);
   INSERT INTO recipe_ingredients (recipe_id, ingredient_id, measure_id, ingredient_quantity)
   VALUES (1,25, 4, 16);


   INSERT INTO recipe_ingredients (recipe_id, ingredient_id, measure_id, ingredient_quantity)
   VALUES (2,6, 8, 3);
   INSERT INTO recipe_ingredients (recipe_id, ingredient_id, measure_id, ingredient_quantity)
   VALUES (2,11, 6, 7);
   INSERT INTO recipe_ingredients (recipe_id, ingredient_id, measure_id, ingredient_quantity)
   VALUES (2,5,7,2);
   INSERT INTO recipe_ingredients (recipe_id, ingredient_id, measure_id, ingredient_quantity)
   VALUES (2,4,6,1);
   INSERT INTO recipe_ingredients (recipe_id, ingredient_id, measure_id, ingredient_quantity)
   VALUES (2,12,8,2.5);
   INSERT INTO recipe_ingredients (recipe_id, ingredient_id, measure_id, ingredient_quantity)
   VALUES (2,3,1,2);
   INSERT INTO recipe_ingredients (recipe_id, ingredient_id, measure_id, ingredient_quantity)
   VALUES (2,13,7,6);
   INSERT INTO recipe_ingredients (recipe_id, ingredient_id, measure_id, ingredient_quantity)
   VALUES (2,14,6,2);

   INSERT INTO recipe_ingredients (recipe_id, ingredient_id, measure_id, ingredient_quantity)
   VALUES (3,6,8,2);
   INSERT INTO recipe_ingredients (recipe_id, ingredient_id, measure_id, ingredient_quantity)
   VALUES (3,5,8,2);
   INSERT INTO recipe_ingredients (recipe_id, ingredient_id, measure_id, ingredient_quantity)
   VALUES (3,27,8,.75);
   INSERT INTO recipe_ingredients (recipe_id, ingredient_id, measure_id, ingredient_quantity)
   VALUES (3,11,6,2);
   INSERT INTO recipe_ingredients (recipe_id, ingredient_id, measure_id, ingredient_quantity)
   VALUES (3,28,6,2);
   INSERT INTO recipe_ingredients (recipe_id, ingredient_id, measure_id, ingredient_quantity)
   VALUES (3,4,6,1);
   INSERT INTO recipe_ingredients (recipe_id, ingredient_id, measure_id, ingredient_quantity)
   VALUES (3,12,8,1);
   INSERT INTO recipe_ingredients (recipe_id, ingredient_id, measure_id, ingredient_quantity)
   VALUES (3,29,8,.5);
   INSERT INTO recipe_ingredients (recipe_id, ingredient_id, measure_id, ingredient_quantity)
   VALUES (3,3,1,2);
   INSERT INTO recipe_ingredients (recipe_id, ingredient_id, measure_id, ingredient_quantity)
   VALUES (3,14,7,1);
   INSERT INTO recipe_ingredients (recipe_id, ingredient_id, measure_id, ingredient_quantity)
   VALUES (3,30,8,1);
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
            INSERT INTO users (username,password,firstname,email)
            VALUES ($1, $2, $3, $4)
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
    VALUES (1,2 );
    INSERT INTO user_recipes (user_id,recipe_id)
    VALUES (1,3 );
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
    await createInitialUsers();
    await createInitialRecipe_Ingredients();
    await createUserRecipes();
  } catch (error) {
    console.error(error);
  } finally {
    client.end();
  }
};

buildDb();
