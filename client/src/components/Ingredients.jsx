import { useFetchRecipeIngredientsQuery } from "../redux/recipeApi";
import { useParams } from "react-router-dom";
import icon from "../assets/ingredients.png";
import Loading from "./Loading";

function Ingredients() {
  const { recipeId } = useParams();

  const { data, error, isLoading } = useFetchRecipeIngredientsQuery(recipeId);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="ing-contianer">
      <div className="ing-title-container">
        <h3>Ingredients</h3>
        <img height={30} src={icon} />
      </div>

      <ul>
        {data.map((ing) => {
          return (
            <li key={ing.ingredientid}>
              {ing.ingredientquantity}{" "}
              {ing.measurementname == "NA" ? " " : ing.measurementname}{" "}
              {ing.ingredientname}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Ingredients;
