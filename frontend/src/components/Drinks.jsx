import React from "react";

const Drinks = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <img src={item.imgUrl} key={item._id} />
      ))}
    </div>
  );
};

export default Drinks;
