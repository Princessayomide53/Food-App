import React from "react";

const MealsSummary = () => {
  return (
    <section className="text-center max-w-[45rem] space-y-4 w-[90%] m-auto mt-[-10rem] relative bg-[#383838] text-white rounded-lg p-[1.5rem] shadow-xl">
      <h2 className="text-[2rem] mt-0 font-serif">
        Delicious Food, Delivered To You
      </h2>
      <p className="flex flex-wrap text-base font-extralight">
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p className="flex flex-wrap text-base font-extralight">
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
