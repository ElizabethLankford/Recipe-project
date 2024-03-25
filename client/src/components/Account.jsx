import { useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/tokenSlice";

function Account() {
  const user = useSelector(selectCurrentUser);

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
