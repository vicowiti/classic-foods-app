import React from "react";
import RenderItems from "./RenderItems";

const Drinks = ({ data }) => {
  return (
    <div>
      <RenderItems name="Drinks 🍸" data={data} />
    </div>
  );
};

export default Drinks;
