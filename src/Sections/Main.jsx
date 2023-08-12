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
              <div className="text-zinc-400 text-[13px] font-bold pt-2">
                Cancel
              </div>
              <div className="w-[147px] h-[35px] relative">
                <div className="w-[147px] h-[35px] left-0 top-0 absolute bg-orange-500 rounded-[5px]" />
                <div className="left-[28px] top-[8px] absolute text-white text-sm font-bold">
                  Update & Save
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 grid-rows-4 gap-6 w-[90%] justify-end ">
          <div className="col-span-6 row-span-4 col-start-2 bg-white rounded-[5px] shadow">
            1
          </div>
          <div className="col-span-3 row-span-4 col-start-8  bg-white rounded-[5px] shadow p-4 flex flex-col gap-5">
            <span className="text-zinc-600 text-[13px] font-semibold flex justify-start">
              Image
            </span>
            <div className="grid grid-cols-1 space-y-2">
              <label className="flex flex-col rounded-lg border-2 border-dashed group text-center">
                <div className=" text-center flex flex-col items-center justify-center  ">
                  <p className="pointer-none text-gray-500 ">
                    <span className="text-sm">Drag and drop</span> files here{" "}
                    <br /> or
                    <a href="" id="" className="text-blue-600 hover:underline">
                      select a file
                    </a>
                    from your computer
                  </p>
                </div>
                <input type="file" className="hidden" />
              </label>
            </div>
            <p className="text-zinc-400 text-[10px] font-semibold">
              *Only JPG, PNG files are allowed. Image must be less than 2 MB
            </p>
          </div>
          <div className="col-span-2 row-span-4 col-start-11 bg-white rounded-[5px] shadow">
            4
          </div>
        </div>
        <div>09</div>
      </div>
    </>
  );
};

export default Main;
