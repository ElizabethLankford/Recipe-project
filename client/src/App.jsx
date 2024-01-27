import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Recipes from "./components/Recipes";
import SingleRecipe from "./components/SingleRecipe";
import Account from "./components/Account";
import Favorites from "./components/Favorites";
import AddRecipe from "./components/AddRecipe";
import AddIngredients from "./components/AddIngredients";
import Login from "./components/Login";
import Register from "./components/Register";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Recipes />} />
        <Route path="/recipes/:recipeId" element={<SingleRecipe />} />
        <Route path="/account" element={<Account />} />
        <Route path="/:userId/favorites" element={<Favorites />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addrecipe" element={<AddRecipe />} />
        <Route path="/addrecipe/:recipeId" element={<AddIngredients />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
