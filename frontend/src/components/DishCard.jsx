import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addingToCart, selectCart } from "../features/cartSlice";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

const DishCard = ({ dish }) => {
  const { name, imgUrl, price, description } = dish;

  const dispatch = useDispatch();
  const data = useSelector(selectCart);
  const amountInCart = data.map((item) => {
    if (item?._id === dish?._id) {
      return item.qty;
    }
  });

  const [quantity, setQuantity] = useState(amountInCart > 0 ? amountInCart : 0);

  const addToCart = (dishSelected) => {
    dispatch(addingToCart({ ...dishSelected, qty: quantity }));
  };

  const addQty = () => {
    setQuantity(quantity + 1);
  };

  const removeQty = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
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
          <div className="flex gap-4">
            {
              <button className="bg-amber-600 h-12  flex justify-between items-center font-semibold md:text-2xl px-2  md:p-5 my-4 rounded-lg">
                <AiOutlineMinusCircle
                  size={30}
                  className="text-white"
                  onClick={removeQty}
                />

                <p className="px-2">{quantity}</p>

                <AiOutlinePlusCircle size={30} onClick={addQty} />
              </button>
            }
            {quantity > 0 && (
              <button
                onClick={() => addToCart(dish)}
                className="bg-amber-600 h-12 flex justify-center items-center font-semibold md:text-2xl px-2  md:p-5 my-4 rounded-lg hover:scale-90 duration-300"
              >
                Add to Cart
              </button>
            )}
          </div>
        }
      </div>
      <hr className="block md:hidden" />
    </article>
  );
};

export default DishCard;
