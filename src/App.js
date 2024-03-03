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
import Login from "./pages/Login";
import Register from "./pages/Register";

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
        <Route path="/bestsellers" element={<BestSellers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
