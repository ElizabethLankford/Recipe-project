import { useSelector } from "react-redux";
import { selectCurrentToken, selectCurrentUser } from "../redux/tokenSlice";
import { useFetchUsersFavRecipesQuery } from "../redux/recipeApi";

function Account() {
  const token = useSelector(selectCurrentToken);
  const user = useSelector(selectCurrentUser);
  console.log("Token:", token);
  console.log("User:", user);
  const { data = {}, error, isLoading } = useFetchUsersFavRecipesQuery(user.id);
  if (!token) {
    return;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error : {error}</h1>;
  }
  const favRecipes = data.map((recipe) => {
    return <div key={recipe.recipeid}>{recipe.recipename}</div>;
  });

  return (
    <div>
      Account page
      <p>
        Name: {user.firstname} {user.lastname}
      </p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <div>
        <h3>Favorite Recipes :</h3>
        {favRecipes}
      </div>
    </div>
  );
}

export default Account;
