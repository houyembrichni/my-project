import "./App.css";
import NavBar from "./components/NavBar";
import MainNavBar from "./components/MainNavBar";
import Home from "./pages/Home";
import Aboutus from "./Aboutus";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import Books from "./pages/Books";
import Account from "./pages/BestSellers";
import BestSellers from "./pages/BestSellers";
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  return (
    <div className="App">
      {/* <div className="Nav">
        <Routes>
          <Route path="/books" element={<NavBar />} />
        </Routes>
      </div> */}
      <MainNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />

        <Route path="/account" element={<Account />} />
        <Route path="/bestsellers" element={<BestSellers />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
