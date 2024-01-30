import React from "react";
function Action() {
  return (
    <section>
      <div className="Remember">
        <input id="remember-me" name="remember-me" type="checkbox"></input>
        <p className="Remember-me">
          Remember me  
          <span className="Forgot">Forgot password?</span>
          </p>
      </div>
        <button className="button">Login</button>
      <div className="Create">
        <p>
          Not register yet ?
          <span style={{color:"#573b8a"}}> Create an account</span>
        </p>
      </div>
    </section>
  );
}
export default Action;
