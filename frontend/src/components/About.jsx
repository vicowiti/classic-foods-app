import React from "react";
import { FaPhone } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import logo from "../assets/logo.png";
const About = () => {
  return (
    <section className="mt-32">
      <h1 className="grad-text pt-5 p-3 text-6xl font-extrabold text-center">
        About Us
      </h1>
      <div className="flex flex-col px-3 lg:flex-row items-center">
        <article className="flex-1">
          <img src={logo} alt="about-img" />
        </article>
        <article className="text-2xl flex-1">
          We are a proud Kenyan Startup located in the outkirts of Nairobi City.
          Since our first dish on 12th January 2022, we have grown both in
          stature and repute as the number one Steakhouse in the land. Our
          business model is anchored on getting the best meats to our customers
          location, on time.
        </article>
      </div>

      <article className="flex flex-col justify-center items-center  mt-10 gap-5 w-full">
        <div className=" flex gap-5 items-center ">
          <FaPhone size={30} />
          <p className="grad-text">+254706770684</p>
        </div>
        <div className=" flex gap-5 items-center ">
          <AiOutlineMail size={30} />
          <p className="grad-text">viowiti12@gmail.com</p>
        </div>
      </article>
    </section>
  );
};

export default About;
