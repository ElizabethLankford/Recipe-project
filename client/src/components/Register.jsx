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
    setUser({
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
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
            value={user.firstname}
            onChange={(e) => setUser({ ...user, firstname: e.target.value })}
            required
          />
        </label>
        <label>
          Lastname:
          <input
            value={user.lastname}
            onChange={(e) => setUser({ ...user, lastname: e.target.value })}
            required
          />
        </label>
        <label>
          Username:
          <input
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            required
          />
        </label>
        <label>
          Email:
          <input
            value={user.email}
            type="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            required
          />
        </label>
        <label>
          Password:
          <input
            value={user.password}
            type="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            required
          />
        </label>
        <label>
          Confirm password:
          <input
            value={user.confirmPassword}
            type="password"
            onChange={(e) =>
              setUser({ ...user, confirmPassword: e.target.value })
            }
            required
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Register;
