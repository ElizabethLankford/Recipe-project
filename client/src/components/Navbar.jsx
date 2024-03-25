import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectCurrentToken,
  selectCurrentUser,
  logOut,
} from "../redux/tokenSlice";
import logo from "../assets/recipeicon.png";
import menu from "../assets/menu.png";
import { useState } from "react";

function Navbar() {
  const token = useSelector(selectCurrentToken);
  const user = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

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
      <div className="icon" onClick={() => setIsOpen(!isOpen)}>
        {<img height={50} src={menu} />}
      </div>
      <nav className={isOpen ? "open" : ""}>
        {token ? (
          <>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Recipes
            </Link>
            <Link to="/account" onClick={() => setIsOpen(false)}>
              Account
            </Link>
            <Link to={`/${user.id}/favorites`} onClick={() => setIsOpen(false)}>
              Favorites
            </Link>
            <button
              className="logout"
              onClick={() => {
                handleLogout();
                setIsOpen(false);
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Recipes
            </Link>
            <Link to="/login" onClick={() => setIsOpen(false)}>
              Login
            </Link>
            <Link to="/register" onClick={() => setIsOpen(false)}>
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
