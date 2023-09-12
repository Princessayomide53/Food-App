import React from "react";
import { GiShoppingCart } from "react-icons/gi";

const HeaderCartButton = () => {
  return (
    <>
      <button className="cursor-pointer font-inherit border-none bg-[#4d1601] text-white px-[3rem] py-[0.76rem] flex justify-around rounded-3xl font-bold items-center hover:active:bg-[#2c0d00]">
        <GiShoppingCart className="w-[1.35rem] h-[1.35rem] mr-[0.5rem]" />
        <span>Your Cart</span>
        <span className="font-bold ml-[1rem] rounded-3xl py-[0.25rem] px-[1rem] bg-[#b94517] hover:active:bg-[#92320c]">
          3
        </span>
      </button>
    </>
  );
};

export default HeaderCartButton;
