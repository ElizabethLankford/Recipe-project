import { useSelector } from "react-redux";
import { selectCurrentToken, selectCurrentUser } from "../redux/tokenSlice";

function Account() {
  const token = useSelector(selectCurrentToken);
  const user = useSelector(selectCurrentUser);

  console.log("Token:", token);
  console.log("User:", user);
  return <div>Account page</div>;
}

export default Account;
