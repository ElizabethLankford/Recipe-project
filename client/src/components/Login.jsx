import { useEffect, useState } from "react";
import { useLoginMutation } from "../redux/recipeApi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCredentials } from "../redux/tokenSlice";

function Login() {
  const [userLogin, setUserLogin] = useState({ username: "", password: "" });
  const [login, { data, isSuccess }] = useLoginMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = userLogin;
    await login({ username, password })
      .unwrap()
      .then((res) => res)
      .catch((rejected) => console.error(rejected));
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(setCredentials(data));
      navigate("/account");
    }
  }, [isSuccess]);

  return (
    <div className="container form-container">
      <form className="form" onSubmit={handleSubmit}>
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
        <button className="form-btn">Login</button>
      </form>
    </div>
  );
}

export default Login;
