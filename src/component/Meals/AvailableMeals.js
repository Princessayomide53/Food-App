import React from "react";
import Card from "../UI/Card";
import MealsList from "./MealsItem/MealsList";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meals) => (
    <MealsList
      key={meals.id}
      name={meals.name}
      description={meals.description}
      price={meals.price}
    />
  ));
  return (
    <section className="max-w-[50rem] w-[90%] my-[2rem] mx-auto">
      <Card className=" bg-white shadow-2xl p-[1rem] rounded-xl">
        <ul>{mealsList}</ul>
        {/* <MealsList item={DUMMY_MEALS} /> */}
      </Card>
    </section>
  );
};

export default AvailableMeals;
