import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative w-full">
      <div className="hero opacity-40 h-screen relative "></div>
      <div className="absolute left-10 lg:left-28 top-[30%] font-bold text-4xl  text-">
        <h1 className="text-7xl py-3 md:text-8xl grad-text">
          Tasty meals <br /> on the go?
        </h1>
        <p className="lg:text-6xl grad-text2">We got you!</p>
        <button
          className="bg-orange-600 px-10 hover:scale-95 duration-700 py-5 mt-5 rounded-full text-lg lg:text-3xl"
          onClick={() => navigate("/menu")}
        >
          See Menu
        </button>
      </div>
    </section>
  );
};

export default Hero;
