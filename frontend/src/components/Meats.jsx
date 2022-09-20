import React from "react";
import RenderItems from "./RenderItems";

const Meats = ({ data }) => {
  return (
    <div>
      <RenderItems name="Meats 🍖" data={data} />
    </div>
  );
};

export default Meats;
