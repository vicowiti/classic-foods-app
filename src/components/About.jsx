import React from "react";
import logo from "../assets/logo.png";
const About = () => {
  return (
    <section id="about">
      <h1 className="grad-text pt-5 p-3 text-6xl font-extrabold text-center">
        About Us
      </h1>
      <div className="flex flex-col p-3 lg:flex-row items-center">
        <article className="flex-1">
          <img src={logo} alt="about-img" />
        </article>
        <article className="text-2xl flex-1">
          We are a proud Kenyan Startup located in the outkirts of Nairobi City.
          Since our first dish on 12th January 2022, we have grown both in
          stature and repute as the number one Steakhouse in the land. Our
          business model is anchored on getting the best meats to our customers
          location.
        </article>
      </div>
    </section>
  );
};

export default About;
