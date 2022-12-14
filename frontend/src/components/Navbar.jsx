import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaBars, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../features/cartSlice";
import { useEffect } from "react";
import { logOut, selectAuth } from "../features/authSlice";

const Navbar = () => {
  const [mobileMenu, setmobileMenu] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const myCart = useSelector(selectCart);
  const { user, isError, isPending } = useSelector(selectAuth);

  const onLinkSelect = () => {
    setmobileMenu(false);
  };

  const handleLogout = () => {
    dispatch(logOut());
    navigate("/");
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
        <Link to="/about" className="hover:text-orange-400 duration-1000">
          About
        </Link>
      </div>
      <div className="hidden lg:flex gap-10 text-2xl font-extrabold pr-12">
        <Link to="/cart" className=" duration-1000 relative">
          <HiOutlineShoppingBag size={35} />
          <p className="bg-orange-400 flex items-center justify-center text-sm rounded-full  w-6 h-6 absolute top-[-5px] right-[-10px]">
            {myCart?.length}
          </p>
        </Link>

        {user?._id ? (
          <Link to="/account">Account</Link>
        ) : (
          <Link
            to="/login"
            className=" hidden lg:flex hover:text-orange-400 duration-1000"
          >
            Login
          </Link>
        )}
        {user?._id ? (
          <div
            className=" hidden lg:flex  hover:text-orange-400 duration-1000"
            onClick={handleLogout}
          >
            Logout
          </div>
        ) : (
          <Link
            to="/register"
            className=" hidden lg:flex  hover:text-orange-400 duration-1000"
          >
            Sign Up
          </Link>
        )}
      </div>
      <div className="flex items-center gap-10 lg:hidden z-[99999]">
        <div className="block lg:hidden">
          <Link to="/cart" className="  duration-1000 relative">
            <HiOutlineShoppingBag size={35} />
            <p className="bg-orange-400 flex items-center justify-center text-sm rounded-full  w-6 h-6 absolute top-[-5px] right-[-10px]">
              {myCart?.length}
            </p>
          </Link>
        </div>
        <div onClick={() => setmobileMenu(!mobileMenu)}>
          {mobileMenu ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
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
        {user?._id ? (
          <Link
            to="/account"
            className="hover:text-orange-400 duration-1000"
            onClick={onLinkSelect}
          >
            Account
          </Link>
        ) : (
          <Link
            to="/login"
            className="hover:text-orange-400 duration-1000"
            onClick={onLinkSelect}
          >
            Login
          </Link>
        )}

        {user ? (
          <div
            className=" hover:text-orange-400 duration-1000"
            onClick={handleLogout}
          >
            Logout
          </div>
        ) : (
          <Link
            to="/register"
            className="hover:text-orange-400 duration-1000"
            onClick={onLinkSelect}
          >
            Sign Up
          </Link>
        )}
        <Link
          to="/about"
          className="hover:text-orange-400 duration-1000"
          onClick={onLinkSelect}
        >
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
