import React from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addingToCart } from "../features/cartSlice";

const DishCard = ({ dish }) => {
  const { name, imgUrl, price, description } = dish;

  const dispatch = useDispatch();

  const addToCart = (dishSelected) => {
    dispatch(addingToCart(dishSelected));
  };
  return (
    <article className="rounded-2xl  w-screen mb-3 md:mb-12 md:flex gap-5">
      <img
        src={imgUrl}
        alt={name}
        className=" w-screen md:max-w-[500px] h-[60vh]"
      />
      <div className=" ml-4 bottom-[0%] ">
        <h2 className="font-bold  grad-text mt-3 text-3xl md:text-5xl mb-3">
          {name} 🔥
        </h2>
        <p className="hidden md:flex font-thin text-3xl mb-3">{description}</p>
        <h5 className="text-lg md:text-3xl font-bold mb-3">Kshs {price}</h5>
        <p className="flex items-center gap-4 text-xl">
          <FaStar color="gold" /> 4.5
        </p>
        {
          <button
            onClick={() => addToCart(dish)}
            className="bg-amber-600 font-semibold md:text-2xl px-2  md:p-5 my-4 rounded-lg hover:scale-90 duration-300"
          >
            Add to Cart
          </button>
        }
      </div>
      <hr className="block md:hidden" />
    </article>
  );
};

export default DishCard;
