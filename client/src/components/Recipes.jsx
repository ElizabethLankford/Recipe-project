import { useFetchRecipesQuery } from "../redux/recipeApi";
import { Link } from "react-router-dom";

function Recipes() {
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
            <Link to={`/recipes/${recipe.id}`}>Recipe Details</Link>
          </div>
        );
      })}
    </div>
  );
}

export default Recipes;
