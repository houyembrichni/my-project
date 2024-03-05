import React from "react";
import { Form, Link } from "react-router-dom";

function Login() {
  const handlelogin = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container-login">
      <div className="login">
        <div className="image">
          <img
         
            src="https://cdn.pixabay.com/photo/2020/06/07/10/29/landscape-5269757_1280.jpg"
            width={300}
            height={300}
            alt=""
          />
        </div>
        <div className="from">
          <h1> Hello!</h1>
          <h2> Good Morning </h2>
          <p> Login Your account</p>
          <form onSubmit={handlelogin}>
            <input type="username"  placeholder="username"/>
            <input type="password"  placeholder="password"/>
            <button type="submit"> Login</button>
          </form>
          <Link to="/register">Create Account </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
