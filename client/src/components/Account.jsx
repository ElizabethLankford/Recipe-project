import { useSelector } from "react-redux";
import { selectCurrentToken, selectCurrentUser } from "../redux/tokenSlice";
import { Link } from "react-router-dom";

function Account() {
  const token = useSelector(selectCurrentToken);
  const user = useSelector(selectCurrentUser);
  console.log("Token:", token);
  console.log("User:", user);

  return (
    <div className="container">
      <h2>My Account</h2>
      <p>
        Name: {user.firstname} {user.lastname}
      </p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <Link to="/addrecipe">Add a Recipe</Link>
    </div>
  );
}

export default Account;
