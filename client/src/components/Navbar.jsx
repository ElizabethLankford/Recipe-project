import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCurrentToken, logOut } from "../redux/tokenSlice";
import logo from "../assets/recipeicon.png";

function Navbar() {
  const token = useSelector(selectCurrentToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    dispatch(logOut());
    navigate("/");
  };

  return (
    <header>
      <div className="logo-div">
        <img height={40} src={logo} />
        <h1>Recipe App</h1>
      </div>
      {token ? (
        <nav>
          <Link to="/">Recipes</Link>
          <Link to="/account">Account</Link>
          <Link to="/favorites">Favorites</Link>
          <button className="logout" onClick={() => handleLogout()}>
            Logout
          </button>
        </nav>
      ) : (
        <nav>
          <Link to="/">Recipes</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
