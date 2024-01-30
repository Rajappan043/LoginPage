import React, { useState } from "react";
import validate from "../../Constants/Validation";
// import { CiUser } from "react-icons/ci";
// import { MdOutlineAlternateEmail } from "react-icons/md";
// import { RiLockPasswordFill } from "react-icons/ri";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function SignUp() {
  const [value, setValue] = useState({
    Firstname: "",
    Lastname: "",
    Email: "",
    password: "",
    ConfirmPassword: "",
  });
  const handleChange = (event) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };
  const [error, setError] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(value);
    setError(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log(JSON.stringify(value));
    }
  };
  return (
    <div>
      <button>Signup</button>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <p>Create your account </p>
        <FontAwesomeIcon icon="fa-regular fa-user" />
        {/* <CiUser/> */}
        <input
          id="firstname"
          name="Firstname"
          type="text"
          placeholder="Firstname"
          autoComplete="off"
          onChange={handleChange}
          required
        />
        <br />
        {/* <CiUser/> */}
        <input
          id="lastname"
          name="Lastname"
          type="text"
          placeholder="Lastname"
          autoComplete="off"
          onChange={handleChange}
          required
        />
        <br />
        {/* <MdOutlineAlternateEmail /> */}
        <input
          id="email-id"
          name="Email"
          type="email"
          autoComplete="off"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <br />
        {error.Email && <p>{error.Email}</p>}
        {/* <RiLockPasswordFill /> */}
        <input
          id="Password-id"
          name="password"
          type="password"
          autoComplete="off"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <br />
        {error.password && <p>{error.password}</p>}
        {/* <RiLockPasswordFill /> */}
        <input
          id="confirm-password"
          name="ConfirmPassword"
          type="password"
          autoComplete="off"
          placeholder="Confirm Password"
          onChange={handleChange}
          required
        />
        <br />
        {error.ConfirmPassword && <p>{error.ConfirmPassword}</p>}
        <button>Register</button>
      </form>
    </div>
  );
}
export default SignUp;
