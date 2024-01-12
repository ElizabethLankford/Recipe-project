const recipes = [
  {
    name: "grilled cheese",
    description: "sandwitch",
    instructions: "cook",
    category: "lunch",
  },
  {
    name: "chicken salad",
    description: "salad",
    instructions: "mix ingredients",
    category: "side",
  },
];

const ingredients = [{ name: "cheese" }, { name: "bread" }];

const measurements = [
  { name: "oz" },
  { name: "tsp" },
  { name: "tbsp" },
  { name: "cup" },
];
const users = [
  {
    username: "elilank",
    password: "test",
    firstname: "eli",
    lastname: "lankford",
    email: "elank@email.com",
  },
  {
    username: "mortysmith",
    password: "test",
    firstname: "morty",
    lastname: "smith",
    email: "msmith@email.com",
  },
];

module.exports = { recipes, ingredients, measurements, users };
