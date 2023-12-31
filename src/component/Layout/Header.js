import React from "react";
import meals from "../../assets/meals.jpg";
import "../../App.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className="fixed top-0 left-0 w-full h-[5rem] text-white flex bg-[#8a2b06] justify-between md:px-[10%] px-[5%] items-center shadow-lg z-10">
        <h1 className="font bold text-2xl">ReactMeals</h1>
        <HeaderCartButton onClick={props.onClick} />
      </header>
      <div className="w-full  h-[25rem] z-0 overflow-hidden bg-[#383838]">
        <img
          src={meals}
          alt="A table full of meals"
          className="w-[110%] object-cover h-[100%] clip"
        />
      </div>
    </>
  );
};

export default Header;
