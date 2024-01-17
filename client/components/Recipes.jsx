import { useState, useEffect } from "react";
import { fetchAllRecipes } from "../fetching";
function Recipes() {
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchAllRecipes();
      setRecipes(res);
    };
    fetchData();
  }, []);
  console.log(recipes);
  return (
    <div>
      {recipes?.map((recipe) => {
        return (
          <div key={recipe.id} className="recipe-card">
            <p>Name: {recipe.name}</p>
            <p>Description: {recipe.description}</p>
            <p>Instructions: {recipe.instructions}</p>
            <p>Category: {recipe.category}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Recipes;
