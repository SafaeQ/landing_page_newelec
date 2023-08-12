import React from "react";

const Main = () => {
  return (
    <>
      <div class="grid grid-rows-4 gap-4 bg-[#f8fafd]">
        <div className="w-[100%] h-[37px] relative flex-row justify-end items-center flex p-10">
          <div className="w-[90%] h-[37px] flex-row  gap-[625px] items-end flex ">
            <div className="text-neutral-500 text-lg font-semibold">
              Edit Training “Working At Height”
            </div>
            <div className="w-[20%] flex-row gap-[25px] items-start flex">
              <div className="text-zinc-400 text-[13px] font-bold pt-2">Cancel</div>
              <div className="w-[147px] h-[35px] relative">
                <div className="w-[147px] h-[35px] left-0 top-0 absolute bg-orange-500 rounded-[5px]" />
                <div className="left-[28px] top-[8px] absolute text-white text-sm font-bold">
                  Update & Save
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>09</div>
        <div>09</div>
      </div>
    </>
  );
};

export default Main;
