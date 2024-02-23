import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

function MainNavBar() {
  return (
    <div className="header-box">
      <Logo />
      <nav className="NavBar">
        <div className="Navlinks">
          <Link to="/"> Home </Link>
          <Link to="/books"> Books </Link>
          <Link to="/bestsellers"> BestSellers</Link>
          <Link to="/audiobooks"> AudioBooks</Link>
          <Link className="Log" to="/login">
            Connection
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default MainNavBar;
