const recipes = [
  {
    name: "grilled cheese",
    description: "sandwich",
    instructions: "cook",
    category: "lunch",
  },
  {
    name: "chicken salad",
    description: "salad",
    instructions: "mix ingredients",
    category: "side",
  },
  {
    name: "chocolate cake",
    description: "cake",
    instructions: "add eggs, flour, chocolate to pan, bake at 350 for 1 hour",
    category: "dessert",
  },
];

const ingredients = [
  { name: "cheese" },
  { name: "bread" },
  { name: "egg" },
  { name: "salt" },
  { name: "sugar" },
  { name: "flour" },
  { name: "chocolate" },
  { name: "chicken" },
  { name: "salad" },
  { name: "butter" },
];

const measurements = [
  { name: "oz" },
  { name: "fluid oz" },
  { name: "tsp" },
  { name: "tbsp" },
  { name: "cup" },
  { name: "pint" },
  { name: "quart" },
  { name: "gallon" },
  { name: "pound" },
  { name: "NA" },
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
