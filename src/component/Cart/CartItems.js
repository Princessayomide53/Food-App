import React from "react";

const CartItems = (props) => {
  const price = `$${props.price}`;
  return (
    <li className="flex justify-between items-center border-b-2 border-[#8a2b06] py-[1rem] px-0 my-[1rem] mx-0">
      <div className="">
        <h2 className="text-lg font-bold mb-[0.5rem] text-[#363636]">
          {props.name}
        </h2>
        <div className="w-[10rem] justify-between items-center flex">
          <span className="font-bold text-[#8a2b06]">{price}</span>
          <span className="font-bold border-2 border-[#ccc] rounded-md text-[#363636] py-[0.25rem] px-[0.75rem]">
            {" "}
            x {props.amount}
          </span>
        </div>
      </div>
      <div className="flex md:flex-row font-bold text-[#8a2b06] space-x-5 text-2xl m-[0.75rem] ">
        <button
          onClick={props.onRemove}
          className="border-2 border-[#8a2b06] px-[0.75rem] rounded-md"
        >
          -
        </button>
        <button
          onClick={props.onAdd}
          className="border-2 border-[#8a2b06] px-[0.75rem] rounded-md"
        >
          +
        </button>
      </div>
    </li>
  );
};

export default CartItems;
