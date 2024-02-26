import {
  useFetchSingleRecipeQuery,
  useAddRecipeToFavsMutation,
  useDeleteRecipeMutation,
} from "../redux/recipeApi";
import { selectCurrentUser, selectCurrentToken } from "../redux/tokenSlice";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Ingredients from "./Ingredients";

function SingleRecipe() {
  const { recipeId } = useParams();
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);

  const { data, error, isLoading } = useFetchSingleRecipeQuery(recipeId);
  const [addToFavs] = useAddRecipeToFavsMutation();
  const [deleteRecipe] = useDeleteRecipeMutation();

  const handleAdd = async () => {
    await addToFavs({ userId: user.id, recipeId: recipeId })
      .unwrap()
      .then((res) => console.log(res))
      .catch((rejected) => console.error(rejected));
  };
  const handleDelete = () => {
    deleteRecipe({ recipeId })
      .unwrap()
      .then((res) => console.log(res))
      .catch((rejected) => console.error(rejected));
  };
  if (isLoading) {
    return <div>Is Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="container">
      <h2 className="single-rec-title">{data.name}</h2>
      <div className="single-rec-container" key={data.id}>
        <img className="single-rec-img" height={200} src={data.image} />
        <div className="single-rec-info">
          <p>Description: {data.description}</p>
          <p>Category: {data.category}</p>
          <p>Instructions: {data.instructions}</p>
          {token ? (
            <button className="link" onClick={handleAdd}>
              Add to Favorites
            </button>
          ) : (
            <button className="link">
              <Link to="/login">Login to add to Favorites</Link>
            </button>
          )}
        </div>
        <button onClick={handleDelete}>Delete</button>
      </div>
      <Ingredients />
    </div>
  );
}

export default SingleRecipe;
