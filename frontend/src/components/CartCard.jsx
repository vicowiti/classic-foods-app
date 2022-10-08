import React from "react";
import { GiCancel } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { removeItem } from "../features/cartSlice";

const CartCard = ({ data }) => {
  const dispatch = useDispatch();

  const removeCartItem = (id) => {
    dispatch(removeItem(id));
  };
  return (
    <article className="mt-8 flex justify-between items-center">
      <div className="flex gap-3">
        <img
          src={data?.imgUrl}
          alt="cart-item"
          className="w-10 h-10 rounded-md"
        />
        <div>
          <h3 className="font-thin text-sm w-5">{data?.name}</h3>
          <p>x {data?.qty}</p>
        </div>
      </div>

      <h2>{Number(data?.price * data?.qty)}</h2>
      <div onClick={() => removeCartItem(data._id)}>
        <GiCancel color="red" size={20} />
      </div>
    </article>
  );
};

export default CartCard;
