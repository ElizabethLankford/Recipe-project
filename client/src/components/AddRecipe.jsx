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
      <form className=" new-recipe-form" onSubmit={handleSubmit}>
        <h2>ADD A NEW RECIPE</h2>
        <label className="label">
          Recipe Name:
          <input
            autoFocus
            onChange={(e) =>
              setRecipeInfo({ ...recipeInfo, name: e.target.value })
            }
          />
        </label>
        <label className="label">
          Description:
          <input
            onChange={(e) =>
              setRecipeInfo({ ...recipeInfo, description: e.target.value })
            }
          />
        </label>
        <label className="label">
          Category:
          <input
            onChange={(e) =>
              setRecipeInfo({ ...recipeInfo, category: e.target.value })
            }
          />
        </label>
        <label className="label">
          Image URL:
          <input
            onChange={(e) =>
              setRecipeInfo({ ...recipeInfo, image: e.target.value })
            }
          />
        </label>
        <label className="label">
          Instructions:
          <textarea
            rows="5"
            cols="40"
            onChange={(e) =>
              setRecipeInfo({ ...recipeInfo, instructions: e.target.value })
            }
          />
        </label>
        <button className="form-btn add-btn">Add Recipe</button>
      </form>
    </div>
  );
}

export default AddRecipe;
