import React from "react";

const Login = () => {
  return (
    <section className="relative w-full">
      <article className="mt-48 mb-32  w-[80vw] rounded-xl flex flex-col justify-center items-center mx-auto">
        <div>
          <h2 className="font-bold text-3xl">Login</h2>
        </div>
        <form className="mt-7 flex flex-col gap-5">
          <input
            type="email"
            className="p-3 rounded-sm bg-yellow-400/30 outline-none"
            placeholder="Enter Email"
          />
          <input
            type="password"
            className="p-3 rounded-sm bg-yellow-400/30 outline-none"
            placeholder="Password"
          />

          <button
            type="submit"
            className=" text-lg p-3 w-full bg-orange-500 rounded-xl"
          >
            Order
          </button>
        </form>
      </article>
    </section>
  );
};

export default Login;
