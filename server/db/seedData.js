const recipes = [
  {
    name: "Spaghetti",
    description: "Delicious homemade spaghetti!",
    image:
      "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466_1280.jpg",
    instructions: `Brown the ground beef in a large skillet. (drain excess fat)
    Once cooked, throw in salt, pepper, tomato sauce and paste, water (with the bouillon cubes in it), sugar, basil, oregano, and garlic. Simmer on low for an hour.
    A few minutes before the hour is done, cook box of spaghetti noodles as directed on package.
    Once the noodles are cooked, drain and add to spaghetti sauce. ENJOY!`,
    category: "Dinner",
  },
  {
    name: "Pancakes",
    description: "Add your favorite topping to this easy pancake recipe!",
    image:
      "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    instructions: `In a large bowl, sift together the flour, baking powder, sugar, and salt.
    Make a well in the center of the dry ingredients. Pour in the milk, egg, melted butter, and vanilla. Mix until combined.
    Lightly oil a griddle or frying pan and heat to medium-high (about 375°F).
    Pour about ¼ cup of batter onto the griddle for each pancake. Cook until bubbly and lightly browned, about 3 minutes. Flip and cook for 2 minutes more until browned on the second side. Serve hot with your favorite toppings.`,
    category: "Breakfast",
  },
  {
    name: "Chocolate Cake",
    description:
      "Easy to bake chocolate cake to pair with your favorite frosting or topping!",
    image:
      "https://cdn.pixabay.com/photo/2019/02/25/19/16/brownie-4020334_1280.jpg",
    instructions: `Preheat oven to 350°F. Line two 9" round pans with parchment paper and spray with non-stick spray.
    Whisk together the flour, sugar, cocoa, baking powder, baking soda, and salt in a large mixing bowl.
    Whisk in the milk, oil, eggs, and vanilla till smooth. Stir in the boiling water, mixing until smooth.
    Divide batter evenly between the two pans. Bake at 350°F for 30-35 minutes or till toothpick inserted in the center comes out clean.
    Cool for 10 minutes in the pans, then invert onto cooling racks. Cool completely. Stack cakes and pair with your favorite frosing or topping.`,
    category: "dessert",
  },
];

const ingredients = [
  { name: "cheese" },
  { name: "bread" },
  { name: "egg" },
  { name: "salt" },
  { name: "sugar" },
  { name: "all-purpose flour" },
  { name: "chocolate" },
  { name: "chicken" },
  { name: "salad" },
  { name: "butter" },
  { name: "baking powder" },
  { name: "milk" },
  { name: "unsalted butter" },
  { name: "vanilla extract" },
  { name: "syrup" },
  { name: "ground beef" },
  { name: "beef bouillon" },
  { name: "chicken bouillon" },
  { name: "tomato sauce" },
  { name: "tomato paste" },
  { name: "hot water" },
  { name: "dried basil" },
  { name: "dried oregano" },
  { name: "garlic" },
  { name: "spaghetti noodles" },
  { name: "black pepper" },
  { name: "cocoa powder" },
  { name: "baking soda" },
  { name: "vegetable oil" },
  { name: "boiling water" },
];

const measurements = [
  { name: "NA" },
  { name: "dash" },
  { name: "cube" },
  { name: "oz" },
  { name: "fluid oz" },
  { name: "tsp" },
  { name: "tbsp" },
  { name: "cup" },
  { name: "pint" },
  { name: "quart" },
  { name: "gallon" },
  { name: "pound" },
];
const users = [
  {
    username: "test",
    password: "test",
    firstname: "name",
    lastname: "lastname",
    email: "test@email.com",
  },
  {
    username: "test1",
    password: "test1",
    firstname: "name",
    lastname: "lastname",
    email: "test1@email.com",
  },
];

module.exports = { recipes, ingredients, measurements, users };
