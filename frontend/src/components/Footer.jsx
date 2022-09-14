import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="mt-5 w-full flex   justify-center gap-5">
        <div>
          <h2 className="text-2xl grad-text">Follow us for exclusive deals</h2>
          <div className="flex mt-4 justify-center gap-4 mb-3">
            <a href="#">
              <FaInstagram
                size={40}
                className="hover:scale-110 duration-1000"
              />
            </a>
            <a href="#">
              <FaFacebook size={40} className="hover:scale-110 duration-1000" />
            </a>
            <a href="#">
              <FaTwitter size={40} className="hover:scale-110 duration-1000" />
            </a>

            <a href="#">
              <FaPinterest
                size={40}
                className="hover:scale-110 duration-1000"
              />
            </a>
          </div>
        </div>
      </footer>
      <p className="text-center text-lg">
        {new Date().getFullYear()} All rights reserved
      </p>
    </>
  );
};

export default Footer;
