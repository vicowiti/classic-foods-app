import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, selectCart } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";
import CartCard from "../components/CartCard";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);

  let totalPrice = cart?.reduce(
    (total, item) => total + Number(item?.price * item?.qty),
    0
  );

  const cartCleared = () => {
    dispatch(clearCart());
  };
  return (
    <section className="pt-24 p-7 lg:mx-[400px]">
      <div className="flex items-center justify-between">
        <h2 className="text-xl" onClick={() => navigate("/menu")}>
          Back
        </h2>
        <h1 className="text-3xl grad-text">My Cart</h1>
        <button
          className="text-xl border px-3 py-1 bg-red-700 rounded-lg hover:scale-90 duration-500"
          onClick={cartCleared}
        >
          Clear
        </button>
      </div>
      {cart?.length > 0 ? (
        <div className="p-5">
          {cart?.map((item) => (
            <CartCard key={item?.name} data={item} />
          ))}

          <div className="mt-7 flex justify-between text-3xl">
            <h3>Total</h3>
            <h2>{totalPrice || 0}</h2>
          </div>
        </div>
      ) : (
        <div className=" mt-20 flex flex-col gap-5 justify-center items-center">
          <HiOutlineShoppingBag size={100} />
          <p className="text-xl">Such Empty!</p>
          <p className="text-xl">
            Go to{" "}
            <span
              className="grad-text underline"
              onClick={() => navigate("/menu")}
            >
              Menu
            </span>
          </p>
        </div>
      )}

      <div>
        {cart?.length > 0 && (
          <button className="bg-green-700 hover:scale-90 duration-300 text-lg w-full mt-5 p-4 rounded-lg">
            Pay {totalPrice} with Mpesa
          </button>
        )}
      </div>
    </section>
  );
};

export default Cart;
