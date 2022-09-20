import React from "react";
import DishCard from "./DishCard";

const RenderItems = ({ name, data }) => {
  return (
    <section className="pt-24 ">
      <div>
        <h3 className="py-3 font-extrabold text-4xl">{name}</h3>
      </div>
      <div>
        {data?.map((dish) => (
          <DishCard key={dish._id} dish={dish} />
        ))}
      </div>
    </section>
  );
};

export default RenderItems;
