import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [mobileMenu, setmobileMenu] = useState(false);

  const onLinkSelect = () => {
    setmobileMenu(false);
  };
  return (
    <nav className="w-full  h-[100px] px-5 flex justify-between  items-center fixed top-0 left-0 z-[999] bg-black/30">
      <div>
        <Link to="/">
          <img src={logo} alt="logo" className="w-[90px]" />
        </Link>
      </div>
      <div className="hidden lg:flex gap-10 text-2xl font-extrabold">
        <Link to="/" className="hover:text-orange-400 duration-1000">
          Home
        </Link>
        <Link to="#about" className="hover:text-orange-400 duration-1000">
          About
        </Link>
      </div>
      <div className="hidden lg:flex gap-10 text-2xl font-extrabold pr-12">
        <Link to="/cart" className="hover:text-orange-400 duration-1000">
          <HiOutlineShoppingBag size={35} />
        </Link>
        <Link to="/login" className="hover:text-orange-400 duration-1000">
          Login
        </Link>
        <Link to="/register" className="hover:text-orange-400 duration-1000">
          Sign Up
        </Link>
      </div>
      <div
        className=" lg:hidden z-[99999]"
        onClick={() => setmobileMenu(!mobileMenu)}
      >
        {mobileMenu ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {/* //Mobile Slider */}
      <div
        className={
          mobileMenu
            ? "flex flex-col absolute bg-orange-700/90 z-10 top-0  right-0 h-screen gap-10 text-3xl font-extrabold left-0 justify-center items-center"
            : "hidden"
        }
      >
        <Link
          to="/"
          className="text-white duration-1000"
          onClick={onLinkSelect}
        >
          Home
        </Link>
        <Link
          to="/login"
          className="hover:text-orange-400 duration-1000"
          onClick={onLinkSelect}
        >
          Login
        </Link>

        <Link
          to="/register"
          className="hover:text-orange-400 duration-1000"
          onClick={onLinkSelect}
        >
          Sign Up
        </Link>
        <a
          href="#about"
          className="hover:text-orange-400 duration-1000"
          onClick={onLinkSelect}
        >
          About
        </a>
      </div>
    </nav>
  );
};

export default Navbar;