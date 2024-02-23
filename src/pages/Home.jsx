import React from "react";
import Hero from "../components/Hero";
import Aboutus from "../Aboutus";
import Logo from "../components/Logo";
import MainNavBar from "../components/MainNavBar";

function Home() {
  return (
    <div>
      {/* <MainNavBar /> */}
      <Hero />
      {<Aboutus /> }
    </div>
  );
}

export default Home;
