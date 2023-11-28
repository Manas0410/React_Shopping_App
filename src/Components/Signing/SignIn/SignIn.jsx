import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../SignUp/Signup.css";
import { useDispatch } from "react-redux";
import { adminLog, userLog } from "../../../Features/Cart/Cart.Slice";
const SignIn = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [err, setErr] = useState(false);
  const handleSignIn = (event) => {
    event.preventDefault();

    // Retrieve user input
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    if (email == "admin.com" && password == "admin") {
      dispatch(adminLog());
      navigate("/HomePage");
    } else {
      let pass = localStorage.getItem(email);
      pass = pass.substring(1, pass.length - 1);
      if (pass) {
        if (pass == password) {
          dispatch(userLog());
          navigate("/HomePage");
        } else {
          setErr(true);
        }
      } else {
        setErr(true);
      }
    }
  };

  return (
    <form onSubmit={handleSignIn} className="sign-up-form">
      <h3 style={{ textAlign: "center" }}>Sign In</h3>
      <span style={{ color: "gray" }}>
        admin mail: admin.com password: admin
      </span>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" className="input-field" />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          className="input-field"
        />
      </div>
      {err ? (
        <div className="err">Invalid User name or password</div>
      ) : (
        <div>Enter mail and password</div>
      )}
      <div className="form-group">
        <button type="submit" className="submit-button">
          Sign In
        </button>
      </div>
    </form>
  );
};

export default SignIn;
