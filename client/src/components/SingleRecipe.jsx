import { useFetchSingleRecipeQuery } from "../redux/recipeApi";
import { useParams } from "react-router-dom";
import Ingredients from "./Ingredients";

function SingleRecipe() {
  const { recipeId } = useParams();

  const { data, error, isLoading } = useFetchSingleRecipeQuery(recipeId);
  console.log("recipe:", data);

  if (isLoading) {
    return <div>Is Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      <h2>{data.name}</h2>
      <div key={data.id}>
        <div className="single-rec-img">
          <img height={200} src={data.image} />
        </div>
        <div className="single-rec-info">
          <p>{data.description}</p>
          <p>{data.category}</p>
          <p>{data.instructions}</p>
        </div>
      </div>
      <Ingredients />
    </div>
  );
}

export default SingleRecipe;
