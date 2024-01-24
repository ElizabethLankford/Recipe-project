import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Recipes from "./components/Recipes";
import SingleRecipe from "./components/SingleRecipe";
import Account from "./components/Account";
import Favorites from "./components/Favorites";
import AddRecipe from "./components/AddRecipe";
import Login from "./components/Login";
import Register from "./components/Register";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Recipes />} />
        <Route path="/recipes/:recipeId" element={<SingleRecipe />} />
        <Route path="/account" element={<Account />} />
        <Route path="/:userId/favorites" element={<Favorites />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addrecipe" element={<AddRecipe />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
