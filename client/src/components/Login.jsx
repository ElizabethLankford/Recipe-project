import { useState } from "react";
import { useLoginMutation } from "../redux/recipeApi";
import { setToken } from "../redux/tokenSlice";

function Login() {
  const [user, setUser] = useState({ username: "", password: "" });
  const [login] = useLoginMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    const { username, password } = user;
    await login({ username, password })
      .unwrap()
      .then((response) => setToken(response.token))
      .catch((rejected) => console.error(rejected));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>
          Username:
          <input
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </label>
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
