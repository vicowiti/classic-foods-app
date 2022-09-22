import React from "react";

const Register = () => {
  return (
    <section className="relative w-full">
      <article className="mt-44 mb-32  w-[80vw] rounded-xl flex flex-col justify-center items-center mx-auto">
        <div>
          <h2 className="font-bold text-3xl">Register</h2>
        </div>
        <form className="mt-7 flex flex-col gap-5 w-[80%] md:w-[50%]">
          <input
            type="text"
            required
            className="p-3 rounded-sm bg-yellow-400/30 outline-none"
            placeholder="Enter Name"
          />
          <input
            type="email"
            required
            className="p-3 rounded-sm bg-yellow-400/30 outline-none"
            placeholder="Enter Email"
          />
          <input
            type="number"
            required
            className="p-3 rounded-sm bg-yellow-400/30 outline-none"
            placeholder="Enter Contact"
          />
          <input
            required
            type="password"
            className="p-3 rounded-sm bg-yellow-400/30 outline-none"
            placeholder="Password"
          />
          <input
            required
            type="password"
            className="p-3 rounded-sm bg-yellow-400/30 outline-none"
            placeholder="Repeat Password"
          />

          <button
            type="submit"
            className=" text-lg p-3 w-full bg-orange-500 rounded-xl"
          >
            Add Me
          </button>
        </form>
      </article>
    </section>
  );
};

export default Register;
