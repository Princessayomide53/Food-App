import React from "react";
import Input from "../../UI/Input";

const MealListForm = () => {
  return (
    <form className="text-right">
      <Input
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
    </form>
  );
};

export default MealListForm;
