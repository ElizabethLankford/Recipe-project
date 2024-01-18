import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Recipes from "./components/Recipes";
import SingleRecipe from "./components/SingleRecipe";
import Account from "./components/Account";
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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
