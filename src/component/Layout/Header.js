import React from "react";
import meals from "../../assets/meals.jpg";
import "../../App.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <>
      <header className="fixed top-0 left-0 w-full h-[5rem] text-white flex bg-[#8a2b06] justify-between px-[10%] items-center shadow-lg z-10">
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className="w-full h-[25rem] z-0 overflow-hidden">
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
