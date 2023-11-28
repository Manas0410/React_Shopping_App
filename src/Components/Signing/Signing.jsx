import { useState } from "react";
import SignUp from "./SignUp/SignUp";
import SignIn from "./SignIn/SignIn";
import "./Sign.css";
const Signing = () => {
  const [up, setUp] = useState(true);
  return (
    <div className="signBg">
      <div className="signContent">
        <div className="signhd">
          <button
            onClick={() => setUp(true)}
            className="submit-button"
            style={{ width: "100%", flex: "1" }}
          >
            SIGN UP
          </button>
          <button
            onClick={() => setUp(false)}
            className="submit-button"
            style={{ width: "100%", flex: "1" }}
          >
            {" "}
            SIGN IN
          </button>
        </div>
        {up ? <SignUp /> : <SignIn />}
      </div>
    </div>
  );
};

export default Signing;
