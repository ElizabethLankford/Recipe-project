const client = require("./client");
const { recipes, ingredients, measurements } = require("./seedData");

const dropTables = async () => {
  try {
    console.log("Dropping tables...");
    await client.query(`
        DROP TABLE IF EXISTS recipes;
        DROP TABLE IF EXISTS ingredients;
        DROP TABLE IF EXISTS measurements;
        DROP TABLE IF EXISTS users;
        DROP TABLE IF EXISTS user_recipes;
        DROP TABLE IF EXISTS recipe_ingredients;
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
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(100) UNIQUE NOT NULL,
            password VARCHAR(100) NOT NULL,
            firstname VARCHAR(100),
            lastname VARCHAR(100),
            email VARCHAR(100)
        );
        CREATE TABLE user_recipes (
            user_id INTEGER REFERENCES users(id) NOT NULL,
            recipe_id INTEGER REFERENCES recipes(id) NOT NULL,
            have_tried BOOLEAN NOT NULL
        );
        CREATE TABLE recipe_ingredients (
            recipe_id INTEGER REFERENCES recipes(id) NOT NULL,
            ingredient_id INTEGER REFERENCES ingredients(id) NOT NULL,
            measure_id INTEGER REFERENCES measurements(id) NOT NULL
        );
        `);
    console.log("tables successfully created!");
  } catch (error) {
    console.error(error);
  }
};

const buildDb = async () => {
  try {
    client.connect();
    await dropTables();
    await createTables();
  } catch (error) {
    console.error(error);
  } finally {
    client.end();
  }
};

buildDb();
