import { useSelector } from "react-redux";
import { selectCurrentToken, selectCurrentUser } from "../redux/tokenSlice";
import { useFetchUsersFavRecipesQuery } from "../redux/recipeApi";

function Favorites() {
  const token = useSelector(selectCurrentToken);
  const user = useSelector(selectCurrentUser);
  console.log("Token:", token);
  console.log("User:", user);
  const { data, error, isLoading } = useFetchUsersFavRecipesQuery(user.id);
  if (!token) {
    return;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error : {error}</h1>;
  }
  console.log(data);
  return (
    <div>
      Favorite Recipes
      <div>
        <h3>Favorite Recipes :</h3>
      </div>
    </div>
  );
}

export default Favorites;
