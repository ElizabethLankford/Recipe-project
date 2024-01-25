import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCurrentToken, selectCurrentUser } from "../redux/tokenSlice";
import { useFetchUsersFavRecipesQuery } from "../redux/recipeApi";

function Favorites() {
  const token = useSelector(selectCurrentToken);
  const user = useSelector(selectCurrentUser);

  const { data, isLoading, error } = useFetchUsersFavRecipesQuery(user.id);
  console.log("data", data);
  if (!token) {
    return;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error {error.message} </h1>;
  }

  return (
    <div className="container">
      <div>
        <h3>Favorite Recipes :</h3>
        {data.map((recipe) => {
          return (
            <div className="recipe-card" key={recipe.recipeid}>
              <img className="recipe-img" src={recipe.recipeimg} />
              <div className="recipe-info">
                <h3>{recipe.recipename}</h3>
                <p>{recipe.recipecategory}</p>
                <p>{recipe.recipedes}</p>
                <Link to={`/recipes/${recipe.recipeid}`}>Recipe Details</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Favorites;
