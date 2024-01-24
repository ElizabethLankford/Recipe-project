import { useState, useEffect } from "react";
import { useAddNewRecipeMutation } from "../redux/recipeApi";

function AddRecipe() {
  const [recipeInfo, setRecipeInfo] = useState({
    name: "",
    description: "",
    image: "",
    instructions: "",
    category: "",
  });

  const [newRecipe, { data, isSuccess }] = useAddNewRecipeMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(recipeInfo);
    await newRecipe({ ...recipeInfo })
      .unwrap()
      .then((res) => console.log(res))
      .catch((rejected) => console.error(rejected));
  };

  useEffect(() => {
    if (isSuccess) {
      console.log("Success!", data);
    }
  }, [isSuccess]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Add a New Recipe</h2>
        <label>
          Recipe Name:
          <input
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
          <input
            onChange={(e) =>
              setRecipeInfo({ ...recipeInfo, category: e.target.value })
            }
          />
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
          <input
            onChange={(e) =>
              setRecipeInfo({ ...recipeInfo, instructions: e.target.value })
            }
          />
        </label>
        <button>Add Recipe</button>
      </form>
    </div>
  );
}

export default AddRecipe;
