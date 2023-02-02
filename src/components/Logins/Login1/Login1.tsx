import React from "react";
import "./Login1.scss";
const Login1: React.FC = () => {
  return (
    <>
      <div className="login-card">
        <h2>Login</h2>
        <h3>Enter your credentials</h3>
        <form className="login-form">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <a>Forgot your password?</a>
          <button type="button">LOGIN</button>
        </form>
      </div>
    </>
  );
};
export default Login1;
