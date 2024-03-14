import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentToken, selectCurrentUser } from "../redux/tokenSlice";
import logo from "../assets/recipeicon.png";
import linkedin from "../assets/linkedin1.png";
import github from "../assets/github1.png";
import website from "../assets/website1.png";

function Footer() {
  const token = useSelector(selectCurrentToken);
  const user = useSelector(selectCurrentUser);
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-logo">
          <img height={25} src={logo} />
          <h3>Familiar Recipes </h3>
        </div>

        <div className="footer-nav">
          {token ? (
            <>
              <Link to="/">Recipes</Link>
              <Link to="/account">Account</Link>
              <Link to={`/${user.id}/favorites`}>Favorites</Link>
            </>
          ) : (
            <>
              <Link to="/">Recipes</Link>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
        <div className="footer-social">
          <a href="https://www.linkedin.com/in/elizabethlankford/">
            <img height={35} src={linkedin} />
          </a>
          <a href="https://github.com/ElizabethLankford">
            <img height={35} src={github} />
          </a>
          <a href="https://elizabeth-lankford.com/">
            <img height={35} src={website} />
          </a>
        </div>
      </div>
      <span className="span">&copy;2024 Familiar Recipes</span>
    </div>
  );
}

export default Footer;
