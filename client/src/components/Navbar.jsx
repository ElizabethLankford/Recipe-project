import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <div>
        <h1>Recipe App</h1>
      </div>
      <nav>
        <Link to="/">Recipes</Link>
        <Link to="/account">Account</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  );
}

export default Navbar;
