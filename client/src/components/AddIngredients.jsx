import { useState } from "react";

function AddIngredients() {
  const [ingredientInfo, setIngredientInfo] = useState({
    name: "",
    quantity: 0,
    measurement: 10,
  });

  return (
    <div>
      Add Ingredients componenet
      <form className="ing-form">
        <label>
          Quantity:
          <input
            value={ingredientInfo.quantity}
            type="number"
            onChange={(e) =>
              setIngredientInfo({ ...ingredientInfo, quantity: e.target.value })
            }
          />
        </label>
        <label>
          Measurement Unit:
          <select
            value={ingredientInfo.measurement}
            onChange={(e) =>
              setIngredientInfo({
                ...ingredientInfo,
                measurement: e.target.value,
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
            value={ingredientInfo.name}
            onChange={(e) =>
              setIngredientInfo({ ...ingredientInfo, name: e.target.value })
            }
          />
        </label>
        <button>Add Ingredient</button>
      </form>
    </div>
  );
}

export default AddIngredients;
