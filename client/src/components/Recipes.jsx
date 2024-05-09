import { useFetchRecipesQuery } from "../redux/recipeApi";
import { Link } from "react-router-dom";
import { useState } from "react";
import Loading from "./Loading";

function Recipes() {
  const [searchString, setSearchString] = useState("");
  const { data = {}, error, isLoading } = useFetchRecipesQuery();
  const getFilteredRecipes = (query, recipes) => {
    if (!query) {
      return recipes;
    }
    return recipes.filter(
      (recipe) =>
        recipe.name.toLowerCase().includes(query.toLowerCase()) ||
        recipe.category.toLowerCase().includes(query.toLowerCase())
    );
  };

  const filteredRecipes = getFilteredRecipes(searchString, data);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container">
      <div className="search-bar-container">
        <label>
          Search recipe:
          <input
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
          />
        </label>
        <button className="add-rec-btn">
          <Link to="/addrecipe">Add a Recipe</Link>
        </button>
      </div>
      <div className="recipe-card-container">
        {filteredRecipes.map((recipe) => {
          return (
            <div key={recipe.id} className="recipe-card">
              <img className="recipe-img" src={recipe.image} />

              <div className="recipe-info">
                <h3>{recipe.name}</h3>
                <p>Description: {recipe.description}</p>
                <p>Category: {recipe.category}</p>
                <Link to={`/recipes/${recipe.id}`}>Recipe Details</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Recipes;
