import { useFetchRecipeIngredientsQuery } from "../redux/recipeApi";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function SingleRecipe() {
  const { recipeId } = useParams();
  const token = useSelector((state) => state.token);

  const { data, error, isLoading } = useFetchRecipeIngredientsQuery(recipeId);

  if (isLoading) {
    return <div>Is Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  console.log(data);
  return (
    <div>
      Ingredients
      <div>
        {data.map((ing) => {
          return (
            <p key={ing.id}>
              {ing.ingredientquantity}
              {ing.measurementname == "NA" ? " " : ing.measurementname}{" "}
              {ing.ingredientname}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default SingleRecipe;
