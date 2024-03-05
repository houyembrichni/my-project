import React from 'react'
 import { Form, Link } from "react-router-dom";
 import './Register.css'
  
function Register() {
    const handlelogin = (e) => {
      e.preventDefault();
    }
  return (
    <div className="container-Register">
      <div className="Register">
        <div className="from">
          <h1>Sign up </h1>
          <form>
            <input type="Your Name" placeholder="Your Name" />
            <input type="Your Email" placeholder="Your Email" />
            <input type="password" placeholder="password" />
            <button type=" submit"> Register</button>
          </form>
        </div>
        <div className="image">
          <img
            src="https://smartgoweb.com/storage/sign-in-01.png"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}

export default Register;