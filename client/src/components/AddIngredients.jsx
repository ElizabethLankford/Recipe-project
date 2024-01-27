import { useState, useEffect } from "react";
import { useAddIngredientsMutation } from "../redux/recipeApi";

import { useParams } from "react-router-dom";

function AddIngredients() {
  const { recipeId } = useParams();
  const [ingredientID, setIngredientID] = useState({});
  const [ingredientName, setIngredientName] = useState({
    name: "",
  });
  const [ingredientInfo, setIngredientInfo] = useState({
    recipeid: recipeId,
    ingredientid: ingredientID.id,
    measureid: 10,
    amount: 0,
  });
  const [newIngredient, { data: ingData, isSuccess: ingSuccess }] =
    useAddIngredientsMutation();

  const handleAddIngredient = async (e) => {
    e.preventDefault();
    await newIngredient(ingredientName.name, recipeId)
      .unwrap()
      .then((res) => setIngredientID(res))
      .catch((rejected) => console.error(rejected));
  };

  useEffect(() => {
    if (ingSuccess) {
      console.log("Success!", ingData);
      console.log(ingredientInfo);
    }
  }, [ingSuccess]);

  return (
    <div>
      Add Ingredients componenet
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
