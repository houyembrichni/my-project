import React from "react";
import NavBar from "../components/NavBar";
import MainNavBar from "../components/MainNavBar";
import "./style.css";
function Books() {
  return (
    <div>
      {/* <MainNavBar /> */}
      <div className="books-container">
        <NavBar />
        <h1>Books page</h1>
      </div>
    </div>
  );
}

export default Books;
