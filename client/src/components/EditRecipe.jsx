import { useUpdateRecipeMutation } from "../redux/recipeApi";
import { useState, useEffect } from "react";

function EditRecipe(data) {
  const [recipeInfo, setRecipeInfo] = useState({
    id: data.recipe.id,
    name: data.recipe.name,
    description: data.recipe.description,
    image: data.recipe.image,
    instructions: data.recipe.instructions,
    category: data.recipe.category,
  });
  const [updateRecipe, { isdata, isSuccess }] = useUpdateRecipeMutation();
  const handleUpdate = async (e) => {
    e.preventDefault();
    await updateRecipe({ ...recipeInfo })
      .unwrap()
      .then((res) => res)
      .catch((rejected) => console.error(rejected));
  };
  useEffect(() => {
    if (isSuccess) {
      isdata;
    }
  }, [isSuccess]);

  return (
    <div className="modal">
      <form className="form" onSubmit={handleUpdate}>
        <h3>Edit Recipe</h3>
        <label>
          Recipe Name:
          <input
            required
            onChange={(e) =>
              setRecipeInfo({ ...recipeInfo, name: e.target.value })
            }
          />
        </label>
        <label>
          Description:
          <input
            onChange={(e) =>
              setRecipeInfo({ ...recipeInfo, description: e.target.value })
            }
          />
        </label>
        <label>
          Category:
          <select
            onChange={(e) =>
              setRecipeInfo({ ...recipeInfo, category: e.target.value })
            }
          >
            <option value=""></option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Snack">Snack</option>
            <option value="Drink">Drink</option>
            <option value="Dessert">Dessert</option>
          </select>
        </label>
        <label>
          Image URL:
          <input
            onChange={(e) =>
              setRecipeInfo({ ...recipeInfo, image: e.target.value })
            }
          />
        </label>
        <label>
          Instructions:
          <textarea
            onChange={(e) =>
              setRecipeInfo({ ...recipeInfo, instructions: e.target.value })
            }
          />
        </label>
        <button className="update">Update Recipe</button>
      </form>
    </div>
  );
}

export default EditRecipe;
