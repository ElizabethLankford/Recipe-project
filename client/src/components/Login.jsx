import { useState } from "react";
import { useLoginMutation } from "../redux/recipeApi";

function Login() {
  const [userLogin, setUserLogin] = useState({ username: "", password: "" });
  const [login] = useLoginMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userLogin);
    const { username, password } = userLogin;
    await login({ username, password })
      .unwrap()
      .then((res) => console.log(res))
      .catch((rejected) => console.error(rejected));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>
          Username:
          <input
            onChange={(e) =>
              setUserLogin({ ...userLogin, username: e.target.value })
            }
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            onChange={(e) =>
              setUserLogin({ ...userLogin, password: e.target.value })
            }
          />
        </label>
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
