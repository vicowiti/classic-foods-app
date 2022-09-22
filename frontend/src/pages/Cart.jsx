import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, selectCart } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";
import CartCard from "../components/CartCard";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);

  let totalPrice = cart?.reduce((total, item) => total + Number(item.price), 0);

  const cartCleared = () => {
    console.log("clicked");

    dispatch(clearCart());
  };
  return (
    <section className="pt-24 p-7">
      <div className="flex items-center justify-between">
        <h2 className="text-xl" onClick={() => navigate("/menu")}>
          Back
        </h2>
        <h1 className="text-3xl grad-text">My Cart</h1>
        <button className="text-xl border" onClick={cartCleared}>
          Clear
        </button>
      </div>
      <div className="p-5">
        {cart?.map((item) => (
          <CartCard key={item._id} data={item} />
        ))}

        <div className="mt-7 flex justify-between text-3xl">
          <h3>Total</h3>
          <h2>{totalPrice || 0}</h2>
        </div>
      </div>
    </section>
  );
};

export default Cart;
