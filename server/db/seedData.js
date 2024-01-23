const recipes = [
  {
    name: "grilled cheese",
    description: "sandwich",
    image:
      "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466_1280.jpg",
    instructions: "cook",
    category: "lunch",
  },
  {
    name: "chicken salad",
    description: "salad",
    image:
      "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466_1280.jpg",
    instructions: "mix ingredients",
    category: "side",
  },
  {
    name: "chocolate cake",
    description: "cake",
    image:
      "https://cdn.pixabay.com/photo/2019/02/25/19/16/brownie-4020334_1280.jpg",
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
