import React from "react";
import { GiCancel } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { removeItem } from "../features/cartSlice";

const CartCard = ({ data }) => {
  const dispatch = useDispatch();

  const removeCartItem = (data) => {
    console.log("REmoved");
    dispatch(removeItem(data));
    console.log(data);
  };
  return (
    <article className="mt-8 flex justify-between items-center">
      <div className="flex gap-3">
        <img
          src={data.imgUrl}
          alt="cart-item"
          className="w-10 h-10 rounded-md"
        />
        <h3 className="font-thin text-sm w-5">{data.name}</h3>
      </div>

      <h2>{data.price}</h2>
      <div onClick={() => removeCartItem(data)}>
        <GiCancel color="red" size={20} />
      </div>
    </article>
  );
};

export default CartCard;
