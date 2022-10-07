import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { getProducts, selectAllProducts } from "./features/productsSlice";

import Account from "./pages/Account";
import About from "./pages/About";

const App = () => {
  const dispatch = useDispatch();
  const { data } = useSelector(selectAllProducts);

  const drinks = data?.filter((item) => item.category === "drinks");
  const meats = data?.filter((item) => item.category === "meats");
  const fillet = data?.filter((item) => item.category === "fillet");
  const vegan = data?.filter((item) => item.category === "vegan");

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/account" element={<Account />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/drinks" element={<Drinks data={drinks} />} />
        <Route path="/menu/meats" element={<Meats data={meats} />} />
        <Route path="/menu/vegan" element={<Vegan data={vegan} />} />
        <Route path="/menu/fillet" element={<Fillet data={fillet} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
