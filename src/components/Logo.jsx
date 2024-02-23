import React from "react";
import background from "../assets/background.png";
import "./Hero.css";
import { NavLink } from "react-router-dom";
import "./NavBarStyle.css";
function Logo() {
  return (
    <div>
      <NavLink to="/" className="navbar-logo">
        <img src={background} width={90} />
        <p> Bookworm Retreat</p>
      </NavLink>
    </div>
  );
}

export default Logo;
