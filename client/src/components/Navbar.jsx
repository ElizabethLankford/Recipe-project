import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectCurrentToken,
  selectCurrentUser,
  logOut,
} from "../redux/tokenSlice";
import logo from "../assets/recipeicon.png";

function Navbar() {
  const token = useSelector(selectCurrentToken);
  const user = useSelector(selectCurrentUser);
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
        <h1>Familiar Recipes</h1>
      </div>
      {token ? (
        <nav>
          <Link to="/">Recipes</Link>
          <Link to="/account">Account</Link>
          <Link to={`/${user.id}/favorites`}>Favorites</Link>
          <button className="add-rec-btn">
            <Link to="/addrecipe">Add a Recipe</Link>
          </button>
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
