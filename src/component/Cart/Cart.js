import React, { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../Store/cart-context";

const Cart = (props) => {
  const cartsCtx = useContext(CartContext);
  const totalAmount = `$${cartsCtx.totalAmount.toFixed(2)}`;

  const hasItems = cartsCtx.meals.length > 0;
  const cartItems = (
    <ul>
      {cartsCtx.meals.map((item) => (
        <li key={item.id}>{item.name} </li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onHideCart}>
      {cartItems}

      <div className="flex justify-between items-center text-[1.5rem] my-[1rem] mx-0">
        <span className="text-2xl font-bold">Total Amount</span>
        <span className="text-2xl font-bold">{totalAmount}</span>
      </div>
      <div className="text-right">
        <button
          onClick={props.onHideCart}
          className="border-[#8a2b06] border-2 bg-transparent cursor-pointer font-inherit rounded-2xl ml-[1rem] py-[0.5rem] px-[2rem] hover:bg-[#5a1a01] hover:border-[#5a1a01] hover:text-white active:bg-[#5a1a01] active:border-[#5a1a01] active:text-white text-[#8a2b06]"
        >
          Close
        </button>
        {hasItems && (
          <button className="border-[#8a2b06] border-2 bg-transparent cursor-pointer font-inherit rounded-2xl ml-[1rem] py-[0.5rem] px-[2rem] hover:bg-[#5a1a01] hover:border-[#5a1a01] hover:text-white active:bg-[#5a1a01] active:border-[#5a1a01] active:text-white text-[#8a2b06]">
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
