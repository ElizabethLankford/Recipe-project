import { useState, useEffect } from "react";
import { useAddNewRecipeMutation } from "../redux/recipeApi";
import { useNavigate } from "react-router-dom";

function AddRecipe() {
  const [recipeInfo, setRecipeInfo] = useState({
    name: "",
    description: "",
    image:
      "https://images.pexels.com/photos/1660030/pexels-photo-1660030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    instructions: "",
    category: "",
  });

  const navigate = useNavigate();

  const [newRecipe, { data, isSuccess }] = useAddNewRecipeMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await newRecipe({ ...recipeInfo })
      .unwrap()
      .then((res) => res)
      .catch((rejected) => console.error(rejected));
  };

  useEffect(() => {
    if (isSuccess) {
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
        <button className="form-btn">Ready to add Ingredients!</button>
      </form>
    </div>
  );
}

export default AddRecipe;
