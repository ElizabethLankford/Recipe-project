import { useFetchRecipesQuery } from "../redux/recipeApi";
import { Link } from "react-router-dom";
import { useState } from "react";

function Recipes() {
  const [search, setSearch] = useState("");
  const { data = {}, error, isLoading } = useFetchRecipesQuery();

  const handleSearch = async (e) => {
    e.preventDefault();
    console.log(search);
    setSearch("");
  };

  if (isLoading) {
    return <div>is loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container">
      <div className="search-bar-container">
        <label>
          Search recipe:
          <input value={search} onChange={(e) => setSearch(e.target.value)} />
        </label>
        <button onClick={handleSearch}>search</button>
      </div>
      <div className="recipe-card-container">
        {data.map((recipe) => {
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
