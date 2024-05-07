import {
  useFetchSingleRecipeQuery,
  useAddRecipeToFavsMutation,
  useDeleteRecipeMutation,
} from "../redux/recipeApi";
import { selectCurrentUser, selectCurrentToken } from "../redux/tokenSlice";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Ingredients from "./Ingredients";
import EditRecipe from "./EditRecipe";
import { useState } from "react";
import Loading from "./Loading";

function SingleRecipe() {
  const { recipeId } = useParams();
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);
  const [modal, setModal] = useState(false);
  const { data, error, isLoading } = useFetchSingleRecipeQuery(recipeId);
  const [addToFavs] = useAddRecipeToFavsMutation();
  const [deleteRecipe] = useDeleteRecipeMutation();
  const navigate = useNavigate();
  const handleAdd = async () => {
    await addToFavs({ userId: user.id, recipeId: recipeId })
      .unwrap()
      .then(() => alert(`${data.name} has been added to your favorites!`))
      .catch((rejected) => console.error(rejected));
  };
  const handleDelete = () => {
    deleteRecipe({ recipeId })
      .unwrap()
      .then((res) => {
        res;
        navigate("/");
      })
      .catch((rejected) => console.error(rejected));
  };

  if (isLoading) {
    return <Loading />;
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
          {token ? (
            <button className="delete" onClick={handleDelete}>
              Delete Recipe
            </button>
          ) : (
            ""
          )}
          {token ? (
            <button className="edit hover" onClick={() => setModal(!modal)}>
              {modal ? "Close Edit" : "Edit Recipe"}
            </button>
          ) : (
            <button disabled className="edit" onClick={() => setModal(!modal)}>
              {modal ? "Close Edit" : "Edit Recipe"}
            </button>
          )}
        </div>
      </div>
      {modal ? (
        <EditRecipe setModal={setModal} modal={modal} recipe={data} />
      ) : (
        ""
      )}
      <Ingredients />
    </div>
  );
}

export default SingleRecipe;
