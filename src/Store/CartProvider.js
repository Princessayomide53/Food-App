import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  meals: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedMeals = state.meals.concat(action.meals);

    const newTotalAmount =
      state.totalAmount + action.meals.price * action.meals.amount;
    return {
      meals: updatedMeals,
      totalAmount: newTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);
  const addItemHandler = (meals) => {
    dispatchCart({ type: "ADD", meals });
  };
  const removeItemHandler = (id) => {
    dispatchCart({ type: "REMOVE", id });
  };
  const cartContext = {
    meals: cartState.meals,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
