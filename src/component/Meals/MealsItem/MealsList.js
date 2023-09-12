import React from "react";
import MealListForm from "./MealListForm";

const MealsList = (props) => {
  const price =
    typeof props.price === "number" && !isNaN(props.price)
      ? `$${props.price.toFixed(2)}`
      : "Price not available";
  // const price = `$${props.price.toFixed(2)}`;
  return (
    <li className="m-[1rem] pb-[1rem] p-0 border-b-2 border-[#ccc] flex justify-between">
      <div>
        <h3 className="mb-[0.25rem] mt-0 mr-0 ml-0 font-bold">{props.name}</h3>
        <div className="italic">{props.description}</div>
        <div className="mt-[0.25rem] font-bold text-[#ad5502] text-[1.25rem] ">
          {price}
        </div>
      </div>
      <div>
        <MealListForm />
      </div>
    </li>
  );
};

export default MealsList;
