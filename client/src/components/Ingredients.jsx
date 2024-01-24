import { useFetchRecipeIngredientsQuery } from "../redux/recipeApi";
import { useParams } from "react-router-dom";

function Ingredients() {
  const { recipeId } = useParams();

  const { data, error, isLoading } = useFetchRecipeIngredientsQuery(recipeId);

  console.log("ingredients", data);

  if (isLoading) {
    return <div>Is Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  console.log(data);
  return (
    <div>
      <h3>Ingredients</h3>
      <div>
        {data.map((ing) => {
          return (
            <p key={ing.ingredientid}>
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

export default Ingredients;
