import { useState, useEffect } from "react";
import {
  useAddIngredientsMutation,
  useAddIngToRecipeMutation,
} from "../redux/recipeApi";
import Ingredients from "./Ingredients";
import { useParams } from "react-router-dom";

function AddIngredients() {
  const { recipeId } = useParams();

  const [ingredientName, setIngredientName] = useState({
    name: "",
  });

  const [ingredientInfo, setIngredientInfo] = useState({
    recipeid: recipeId,
    ingredientid: "",
    measureid: 10,
    amount: 0,
  });
  const [newIngredient] = useAddIngredientsMutation();
  const [linkIngredient] = useAddIngToRecipeMutation();

  const handleAddIngredient = async (e) => {
    e.preventDefault();

    try {
      await newIngredient(ingredientName.name, recipeId)
        .unwrap()
        .then((res) => {
          let id = res;
          setIngredientInfo((prevInfo) => {
            return { ...prevInfo, ingredientid: id };
          });
        })
        .catch((rejected) => console.error(rejected));
      console.log(ingredientInfo.ingredientid);
      if (ingredientInfo.ingredientid) {
        await linkIngredient({ ...ingredientInfo })
          .unwrap()
          .then((res) => console.log(res))
          .catch((rejected) => console.error(rejected));
      } else {
        console.log("ing_id issue");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(ingredientInfo);
  }, []);
  return (
    <div>
      <Ingredients />
      <form className="ing-form" onSubmit={handleAddIngredient}>
        <label>
          Quantity:
          <input
            value={ingredientInfo.amount}
            type="number"
            onChange={(e) =>
              setIngredientInfo({ ...ingredientInfo, amount: e.target.value })
            }
          />
        </label>
        <label>
          Measurement Unit:
          <select
            value={ingredientInfo.measureid}
            onChange={(e) =>
              setIngredientInfo({
                ...ingredientInfo,
                measureid: e.target.value,
              })
            }
          >
            <option value="1">oz</option>
            <option value="2">fluid oz</option>
            <option value="3">tsp</option>
            <option value="4">tbsp</option>
            <option value="5">cup</option>
            <option value="6">pint</option>
            <option value="7">quart</option>
            <option value="8">gallon</option>
            <option value="9">pound</option>
            <option value="10">N/A</option>
          </select>
        </label>
        <label>
          Ingredient:
          <input
            value={ingredientName.name}
            onChange={(e) => setIngredientName({ name: e.target.value })}
          />
        </label>
        <button>Add Ingredient</button>
      </form>
    </div>
  );
}

export default AddIngredients;
