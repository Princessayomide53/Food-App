import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  meals: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const newTotalAmount =
      state.totalAmount + action.meals.price * action.meals.amount;
    const existingCartIndex = state.meals.findIndex(
      (item) => item.id === action.meals.id
    );
    const existingCartItem = state.meals[existingCartIndex];
    // let updatedItem;
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.meals.amount,
      };
      updatedItems = [...state.meals];
      updatedItems[existingCartIndex] = updatedItem;
    } else {
      // updatedItem = { ...action.meals };
      updatedItems = state.meals.concat(action.meals);
    }
    return {
      meals: updatedItems,
      totalAmount: newTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartIndex = state.meals.findIndex(
      (meals) => meals.id === action.id
    );
    const existingCartItem = state.meals[existingCartIndex];
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;
    let updatedItems;
    if (existingCartItem.amount === 1) {
      updatedItems = state.meals.filter((meal) => meal.id !== action.id);
    } else {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItems = [...state.meals];
      updatedItems[existingCartIndex] = updatedItem;
    }
    return {
      meals: updatedItems,
      totalAmount: updatedTotalAmount,
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
