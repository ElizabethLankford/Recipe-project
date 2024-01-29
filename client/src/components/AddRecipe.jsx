import { useState, useEffect } from "react";
import { useAddNewRecipeMutation } from "../redux/recipeApi";
import { useNavigate } from "react-router-dom";

function AddRecipe() {
  const [recipeInfo, setRecipeInfo] = useState({
    name: "",
    description: "",
    image: "",
    instructions: "",
    category: "",
  });

  const navigate = useNavigate();

  const [newRecipe, { data, isSuccess }] = useAddNewRecipeMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await newRecipe({ ...recipeInfo })
      .unwrap()
      .then((res) => console.log(res))
      .catch((rejected) => console.error(rejected));
  };

  useEffect(() => {
    if (isSuccess) {
      console.log("Success!", data);
      navigate(`/addrecipe/${data.id}`);
    }
  }, [isSuccess]);

  return (
    <div className="container">
      <form className="form-container form" onSubmit={handleSubmit}>
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
          <textarea
            onChange={(e) =>
              setRecipeInfo({ ...recipeInfo, instructions: e.target.value })
            }
          />
        </label>
        <button className="form-btn">Add Recipe</button>
      </form>
    </div>
  );
}

export default AddRecipe;
