import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Drinks from "./components/Drinks";
import CategoryContent from "./components/Drinks";
import Fillet from "./components/Fillet";
import Footer from "./components/Footer";
import Meats from "./components/Meats";
import Navbar from "./components/Navbar";
import Vegan from "./components/Vegan";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import Register from "./pages/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/drinks" element={<Drinks />} />
        <Route path="/menu/meats" element={<Meats />} />
        <Route path="/menu/vegan" element={<Vegan />} />
        <Route path="/menu/fillet" element={<Fillet />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
