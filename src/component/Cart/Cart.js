import React from "react";

const Cart = () => {
  const cartItems = (
    <ul>
      {[{ id: "c1", name: "Sushi", Amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name} </li>
      ))}
    </ul>
  );
  return (
    <div>
      {cartItems}
      <div className="flex justify-between items-center text-[1.5rem] my-[1rem] mx-0">
        <span>Total Amount</span>
      </div>
      <div className="text-right"></div>
    </div>
  );
};

export default Cart;
