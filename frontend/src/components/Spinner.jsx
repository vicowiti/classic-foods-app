import React from "react";
import { FaSpinner } from "react-icons/fa";

const Spinner = () => {
  return (
    <div className="absolute top-0 left-0 bottom-0 right-0 z-10 bg-black/5 flex justify-center items-center">
      <FaSpinner size={40} className="rotary-spinner" />
    </div>
  );
};

export default Spinner;
