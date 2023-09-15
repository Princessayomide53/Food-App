import React, { useContext } from "react";
import { GiShoppingCart } from "react-icons/gi";
import CartContext from "../../Store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCart = cartCtx.meals.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <>
      <button
        className="cursor-pointer font-inherit border-none bg-[#4d1601] text-white px-[3rem] py-[0.76rem] flex justify-around rounded-3xl font-bold items-center hover:active:bg-[#2c0d00]"
        onClick={props.onClick}
      >
        <GiShoppingCart className="w-[1.35rem] h-[1.35rem] mr-[0.5rem]" />
        <span>Your Cart</span>
        <span className="font-bold ml-[1rem] rounded-3xl py-[0.25rem] px-[1rem] bg-[#b94517] hover:active:bg-[#92320c]">
          {/* {isNaN(numberOfCart) ? "N/A" : String(numberOfCart)} */}
          {numberOfCart}
        </span>
      </button>
    </>
  );
};

export default HeaderCartButton;
