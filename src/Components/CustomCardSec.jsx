import React from "react";
import {
  AiOutlineInfoCircle,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import { BiCameraHome } from "react-icons/bi";

const CustomCardSec = () => {
  return (
    <div className="h-[156px] bg-white rounded-[5px] shadow ml-2 p-3 gap-3 flex flex-col">
      <div className="h-4 relative flex justify-end">
        <AiOutlineInfoCircle color="gray" size={20} />
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <BiCameraHome color="#FF3838" size={40} />
        <span className="text-zinc-800 text-xs font-semibold">
          Webcam validation
        </span>
      </div>
      <div>
        <div className="h-[30px] relative flex-row justify-start items-start inline-flex gap-2">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-[#47CA5B] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-[#47CA5B] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#D9FFDF]"></div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default CustomCardSec;
