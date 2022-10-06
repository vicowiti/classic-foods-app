import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { loginUser, selectAuth } from "../features/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isError, isPending } = useSelector(selectAuth);

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      dispatch(
        loginUser({
          email,
          password,
        })
      );
    }

    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, isError, isPending]);

  return (
    <section className="relative w-full">
      <article className="mt-48 mb-32  w-[80vw] rounded-xl flex flex-col justify-center items-center mx-auto">
        <div>
          <h2 className="font-bold text-3xl">Login</h2>
        </div>
        <form className="mt-7 flex flex-col gap-5" onSubmit={handleLogin}>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-sm bg-yellow-400/30 outline-none"
            placeholder="Enter Email"
          />
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 rounded-sm bg-yellow-400/30 outline-none"
            placeholder="Password"
          />

          <button
            type="submit"
            className=" text-lg p-3 w-full bg-orange-500 rounded-xl"
          >
            Order
          </button>
          {isPending && <Spinner />}
        </form>
      </article>
    </section>
  );
};

export default Login;
