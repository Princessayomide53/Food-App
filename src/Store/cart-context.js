import React from "react";

const CartContext = React.createContext({
  meals: [],
  totalAmount: 0,
  addItem: (meals) => {},
  removeItem: (id) => {},
});

export default CartContext;
