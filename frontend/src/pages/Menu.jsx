import React from "react";
import meats from "../assets/meats.svg";
import drinks from "../assets/drinks.svg";
import vegan from "../assets/vegan.svg";
import fillet from "../assets/fillet.svg";

const Menu = () => {
  return (
    <div>
      <section className="mx-10 mt-28">
        <div className="mb-5">
          <h1 className="grad-text text-5xl font-extrabold">Menu</h1>
          <p className="italic font-extralight">
            Pick from our assorted delicacies
          </p>
        </div>

        <div className="grid grid-cols-2 place-items-center gap-5">
          <article className="w-[40vw] p-7 bg-gradient-to-br from-yellow-400 cursor-pointer hover:scale-105 duration-1000 h-[50vh] rounded-2xl">
            <h3 className="text-3xl font-bold mb-5">Drinks</h3>
            <div>
              <img
                src={drinks}
                alt="food-item"
                className="w-40 h-40 rounded-full"
              />
            </div>
          </article>
          <article className="w-[40vw] p-7 bg-gradient-to-br from-amber-700 cursor-pointer hover:scale-105 duration-1000 h-[50vh] rounded-2xl">
            <h3 className="text-3xl font-bold mb-5">Meats</h3>
            <div>
              <img
                src={meats}
                alt="food-item"
                className="w-40 h-40 rounded-full"
              />
            </div>
          </article>
          <article className="w-[40vw] p-7 bg-gradient-to-br from-blue-400 cursor-pointer hover:scale-105 duration-1000 h-[50vh] rounded-2xl">
            <h3 className="text-3xl font-bold mb-5">Fillet</h3>
            <div className="">
              <img
                src={fillet}
                alt="food-item"
                className="w-40 h-40 rounded-full"
              />
            </div>
          </article>
          <article className="w-[40vw] p-7 bg-gradient-to-br from-green-800 cursor-pointer hover:scale-105 duration-1000 h-[50vh] rounded-2xl">
            <h3 className="text-3xl font-bold mb-5">Vegan</h3>
            <div>
              <img
                src={vegan}
                alt="food-item"
                className="w-40 h-40 rounded-full"
              />
            </div>
          </article>
          {/* <article>
            <h3>Meats</h3>
          </article>
          <article>
            <h3>Fillet</h3>
          </article>
          <article>
            <h3>Vegan</h3>
          </article> */}
        </div>
      </section>
    </div>
  );
};

export default Menu;
