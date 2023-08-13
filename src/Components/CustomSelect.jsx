import React from "react";

const CustomSelect = ({ options, ...props }) => {
  return (
    <select
      className="border rounded p-2 focus:ring focus:ring-rose-300 focus:border-rose-500"
      {...props}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value} className="text-zinc-800 text-xs font-semibold">
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default CustomSelect;
