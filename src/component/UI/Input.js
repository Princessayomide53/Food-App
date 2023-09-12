import React from "react";

const Input = (props) => {
  return (
    <div className="flex items-center mb-[0.5rem]">
      <label htmlFor={props.input.id} className="font-bold mr-[1rem]">
        {props.label}
      </label>
      <input
        {...props.input}
        className="w-[3rem] rounded-sm border-2 border-[#333] font-inherit pl-[0.5rem]"
      />
    </div>
  );
};

export default Input;
