const recipes = [
  {
    name: "grilled cheese",
    description: "sandwitch",
    instructions: "cook",
    catergory: "lunch",
  },
  {
    name: "chicken salad",
    description: "salad",
    instructions: "mix ingredients",
    catergory: "side",
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
    firstname: "eli",
    lastname: "lankford",
    email: "elank@email.com",
  },
  {
    username: "morty",
    firstname: "morty",
    lastname: "smith",
    email: "msmith@email.com",
  },
];

module.exports = { recipes, ingredients, measurements };
