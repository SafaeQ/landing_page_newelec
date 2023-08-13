import React from "react";
import { IoMdCloudUpload } from "react-icons/io";

const Main = () => {
  return (
    <>
      <div class="container flex flex-col gap-4 bg-[#f8fafd]">
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

        <div className="flex flex-row gap-6 w-[100%] justify-center">
          <div className="bg-white rounded-[5px] shadow p-4">1</div>

          <div className="bg-white rounded-[5px] shadow p-4 flex flex-col items-start justify-start gap-5">
            <span className="text-zinc-600 text-[13px] font-semibold ">
              Image
            </span>
            <div class="flex items-center justify-center w-full">
              <label class="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center cursor-pointer">
                <div class=" text-center flex flex-col items-center justify-center ">
                  <IoMdCloudUpload
                    className="has-mask object-center "
                    color="#c8c8c8"
                    size={100}
                  />
                  <p className="text-center">
                    <span className="text-zinc-400 text-xs font-normal leading-[17px]">
                      Drag and drop your image here
                      <br />
                      Or{" "}
                    </span>
                    <span className="text-sky-600 text-xs font-normal leading-[17px]">
                      browse files
                    </span>
                  </p>
                </div>
                <input type="file" class="hidden" />
              </label>
            </div>
            <p className="text-zinc-400 text-[10px] font-semibold">
              *Only JPG, PNG files are allowed. Image must be less than 2 MB
            </p>
          </div>
          <div className="bg-white rounded-[5px] shadow">4</div>
        </div>
        <div>09</div>
      </div>
    </>
  );
};

export default Main;
