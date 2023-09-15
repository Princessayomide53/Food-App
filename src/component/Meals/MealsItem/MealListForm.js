import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
// import CartContext from "../../../Store/cart-context";

const MealListForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmount < 1 ||
      enteredAmount > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className="text-right" onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className="font-inherit cursor-pointer bg-[#8a2b06] border-2 border-[#8a2b06] text-white py-[0.25rem] px-[2rem] font-bold rounded-2xl hover:bg-[#641e03] hover:border-[#641e03] active:bg-[#641e03] active:border-[#641e03]">
        + Add
      </button>
      {!amountIsValid ? "please enter a valid value" : ""}
    </form>
  );
};

export default MealListForm;
