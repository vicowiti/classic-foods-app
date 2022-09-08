import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav className="max-w-[100vw] h-[100px] flex justify-between mx-10 items-center">
      <div>
        <Link to="/">
          <img src={logo} alt="logo" className="w-[90px]" />
        </Link>
      </div>
      <div className="flex gap-10 text-2xl">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="flex gap-10 text-2xl">
        <Link to="/cart">
          <HiOutlineShoppingBag size={35} />
        </Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
