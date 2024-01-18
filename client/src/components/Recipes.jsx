// import { useState, useEffect } from "react";
// import { fetchAllRecipes } from "../../fetching";
import { useFetchRecipesQuery } from "../redux/recipeApi";

function Recipes() {
  // const [recipes, setRecipes] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetchAllRecipes();
  //     setRecipes(res);
  //   };
  //   fetchData();
  // }, []);
  // console.log(recipes);
  const { data = {}, error, isLoading } = useFetchRecipesQuery();

  if (isLoading) {
    return <div>is loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  console.log(data);
  return (
    <div>
      {data.map((recipe) => {
        return (
          <div key={recipe.id} className="recipe-card">
            <h3>Name: {recipe.name}</h3>
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
