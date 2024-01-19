import { useSelector } from "react-redux";

function Account() {
  const token = useSelector((state) => state.token);
  const user = useSelector((state) => state.username);

  console.log("Token:", token);
  console.log("User:", user);
  return <div>Account page</div>;
}

export default Account;
