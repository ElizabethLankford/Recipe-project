import { useSelector } from "react-redux";
import { selectCurrentToken, selectCurrentUser } from "../redux/tokenSlice";

function Account() {
  const token = useSelector(selectCurrentToken);
  const user = useSelector(selectCurrentUser);
  console.log("Token:", token);
  console.log("User:", user);

  return (
    <div className="container">
      <div className="account-container">
        <h2>My Account</h2>
        <p>
          <b>Name: </b>
          {user.firstname} {user.lastname}
        </p>
        <p>
          <b>Username: </b>
          {user.username}
        </p>
        <p>
          <b>Email: </b>
          {user.email}
        </p>
      </div>
    </div>
  );
}

export default Account;
