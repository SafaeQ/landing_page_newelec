import React from "react";

const PopupConfirme = ({ uploaded, handleDelete }) => {
  return (
    <div className="w-full relative flex items-center justify-center">
      <div className="w-full p-2 bg-green-500 rounded-[5px]">
        <div className="w-full h-auto justify-between items-center gap-[34px] flex ">
          <div className="w-[104px] self-stretch flex-col justify-center items-start inline-flex">
            <span className="text-white text-[10px] font-semibold">
              Completed
            </span>
            <span className="text-white text-[11px] font-bold">
              {uploaded.name}
            </span>
          </div>
          <button
            className="w-[22px] h-[22px] relative flex-col justify-start items-start flex cursor-pointer"
            onClick={handleDelete}
          >
            <div className="w-[22px] h-[22px] items-center bg-white rounded-full">
              <span className="text-gray-400 relative bottom-[4px]">x</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupConfirme;
