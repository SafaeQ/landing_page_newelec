import React, { useState } from "react";
import {
  AiOutlineInfoCircle,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";

const CustomCard = ({ icon, title, number, unit }) => {
  const [num, setNumber] = useState(number);

  const handleDecrement = () => {
    if (num > 0) {
      setNumber(num - 1);
    }
  };

  const handleIncrement = () => {
    setNumber(num + 1);
  };

  return (
    <div className="h-[156px] bg-white rounded-[5px] shadow ml-2 p-3 gap-3 flex flex-col">
      <div className="h-4 relative flex justify-end">
        <AiOutlineInfoCircle color="gray" size={20} />
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        {icon}
        <span className="text-zinc-800 text-xs font-semibold">{title}</span>
      </div>
      <div>
        <div className="h-[30px] relative flex-row justify-start items-start inline-flex gap-2">
          <button
            className="w-[34px] h-[30px] bg-zinc-100 rounded-[5px] p-2"
            onClick={handleDecrement}
          >
            <AiOutlineMinus color="#C8C8C8" />
          </button>
          <div className="w-[76px] h-[30px] rounded-[5px] border border-blue-500 p-1">
            <span className="text-blue-500 text-sm font-semibold">
              {num} {unit}
            </span>
          </div>
          <button
            className="w-[34px] h-[30px] relative bg-zinc-100 rounded-[5px] p-2"
            onClick={handleIncrement}
          >
            <AiOutlinePlus color="#C8C8C8" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
