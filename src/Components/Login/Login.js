import React, { useState } from "react";
import Action from "./LoginAction";
import validate from "../../Constants/Validation";
import { Icon } from "react-icons-kit";
import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import Image from "../../assets/images/loginimg.jpg";
import "./Login.css";
function LoginPage() {
  const [value, setValue] = useState({
    Email: "",
    password: "",
  });
  const handleChange = (event) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };
  const [error, setError] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(value);
    setError(validationErrors);
    console.log(JSON.stringify(value));
  };
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);
  const handleToggle = () => {
    type === "password" ? setIcon(eye) : setIcon(eyeOff);
    setType(type === "password" ? "text" : "password");
  };
  return (
    <div>
      {/* <button className="signin-btn">Sign In</button> */}
      <form className="Login" onSubmit={handleSubmit}>
        <h1 className="login-now">Login now</h1>
        <h3>Email</h3>
        <input
          className="inputs"
          id="emailAddress"
          name="Email"
          type="email"
          autoComplete="off"
          placeholder="Enter your email id"
          onChange={handleChange}
          required
        />
        <br />
        {error.Email && <p className="error">{error.Email}</p>}
        <h3>Password</h3>
        <input
          className="inputs"
          id="password"
          name="password"
          type={type}
          autoComplete="off"
          placeholder="Enter your password"
          onChange={handleChange}
          required
        />
        <span onClick={handleToggle}>
          <Icon className="icon" icon={icon} size={20} />
        </span>
        {error.password && <p className="error">{error.password}</p>}
        <Action></Action>
      </form>
      <div className="img">
        <img src={Image} alt=""></img>
      </div>
    </div>
  );
}
export default LoginPage;
