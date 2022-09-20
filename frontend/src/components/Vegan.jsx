import React from "react";
import RenderItems from "./RenderItems";

const Vegan = ({ data }) => {
  return (
    <div>
      <RenderItems name="Vegan 🥗" data={data} />
    </div>
  );
};

export default Vegan;
