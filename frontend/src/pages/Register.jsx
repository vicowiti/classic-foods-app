import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import { regNewUser, selectAuth } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isPending, isError } = useSelector(selectAuth);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !email || !contact || !password || !password1) {
      // Toast => Fill in all details
    } else {
      dispatch(
        regNewUser({
          contact,
          name,
          email,
          password,
        })
      );

      if (user._id) {
        navigate("/");

        toast.success("Registration Successful!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setName("");
        setEmail("");
        setPassword("");
        setPassword1("");
        setContact("");
        console.log("I ran");
      }
    }
  };
  return (
    <section className="relative w-full">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className="z-[100000]"
      />

      <article className="mt-44 mb-32  w-[80vw] rounded-xl flex flex-col justify-center items-center mx-auto">
        <div>
          <h2 className="font-bold text-3xl">Register</h2>
        </div>
        <form
          className="mt-7 flex flex-col gap-5 w-[80%] md:w-[50%]"
          onSubmit={handleRegister}
        >
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="p-3 rounded-sm bg-yellow-400/30 outline-none"
            placeholder="Enter Name"
          />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-sm bg-yellow-400/30 outline-none"
            placeholder="Enter Email"
          />
          <input
            type="number"
            required
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="p-3 rounded-sm bg-yellow-400/30 outline-none"
            placeholder="Enter Contact"
          />
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="p-3 rounded-sm bg-yellow-400/30 outline-none"
            placeholder="Password"
          />
          <input
            required
            value={password1}
            onChange={(e) => setPassword1(e.target.value)}
            type="password"
            className="p-3 rounded-sm bg-yellow-400/30 outline-none"
            placeholder="Repeat Password"
          />

          <p>
            {password !== password1 && (
              <span className="text-red-600">
                Kindly ensure that your passwords match
              </span>
            )}
          </p>

          <button
            // disabled={password !== password1}
            type="submit"
            className=" text-lg p-3 w-full bg-orange-500 rounded-xl"
          >
            Add Me
          </button>
          {isPending && <Spinner />}
        </form>
      </article>
    </section>
  );
};

export default Register;
