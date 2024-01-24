import { useSelector } from "react-redux";
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
      Favorite Recipes
      <div>
        <h3>Favorite Recipes :</h3>
        {data.map((recipe) => {
          return (
            <div key={recipe.recipeid}>
              <h3>{recipe.recipename}</h3>
              <p>{recipe.recipecategory}</p>
              <p>{recipe.recipedes}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Favorites;
