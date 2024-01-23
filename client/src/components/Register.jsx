import { useState, useEffect } from "react";
import { useRegisterMutation } from "../redux/recipeApi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCredentials } from "../redux/tokenSlice";

function Register() {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [register, { data, isSuccess }] = useRegisterMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    const { firstname, lastname, username, email, password, confirmPassword } =
      user;
    if (password === confirmPassword) {
      console.log("passwords Match!");
      await register({
        username,
        password,
        firstname,
        lastname,
        email,
      }).unwrap();
    } else if (password !== confirmPassword) {
      console.log("Error: passwords do not match!");
    }
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(setCredentials(data));
      navigate("/account");
    }
  }, [isSuccess]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Register </h2>
        <label>
          Firstname:
          <input
            onChange={(e) => setUser({ ...user, firstname: e.target.value })}
          />
        </label>
        <label>
          Lastname:
          <input
            onChange={(e) => setUser({ ...user, lastname: e.target.value })}
          />
        </label>
        <label>
          Username:
          <input
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </label>
        <label>
          Confirm password:
          <input
            type="password"
            onChange={(e) =>
              setUser({ ...user, confirmPassword: e.target.value })
            }
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Register;
