import React from "react";
import { IoMdCloudUpload } from "react-icons/io";

const Main = () => {
  return (
    <>
      <div className="container flex flex-col gap-4 bg-[#f8fafd]">
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
          <div className="bg-white w-[532px] h-[311px] rounded-[5px] shadow p-4"></div>

          <div className="bg-white rounded-[5px] shadow p-4 flex flex-col items-start justify-start gap-5">
            <span className="text-zinc-600 text-[13px] font-semibold ">
              Image
            </span>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center cursor-pointer">
                <div className=" text-center flex flex-col items-center justify-center ">
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
                <input type="file" className="hidden" />
              </label>
            </div>
            <p className="text-zinc-400 text-[10px] font-semibold">
              *Only JPG, PNG files are allowed. Image must be less than 2 MB
            </p>
          </div>

          <div className="bg-white rounded-[5px] shadow p-4 flex flex-col items-start justify-start gap-5">
            <span className="text-zinc-600 text-[13px] font-semibold">
              Training file
            </span>
            <div className="w-full flex flex-col gap-3 items-center justify-center">
              <label className="flex flex-col rounded-lg border-4 border-dashed group text-center cursor-pointer p-2 w-[250px]">
                <div className=" text-center flex flex-col items-center justify-center ">
                  <IoMdCloudUpload
                    className="has-mask object-center "
                    color="#c8c8c8"
                    size={80}
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
                <input type="file" className="hidden" />
              </label>
              <div className="w-full relative flex items-center justify-center">
                <div className="w-full p-2 bg-green-500 rounded-[5px]">
                  <div className="w-full h-6 justify-between items-center gap-[34px] flex p-1">
                    <div className="w-[104px] self-stretch flex-col justify-center items-start inline-flex">
                      <span className="text-white text-[10px] font-semibold">
                        Completed
                      </span>
                      <span className="text-white text-[11px] font-bold">
                        workingAtHeight.pdf
                      </span>
                    </div>
                    <div className="w-[22px] h-[22px] relative flex-col justify-start items-start flex cursor-pointer">
                      <div className="w-[22px] h-[22px] items-center bg-white rounded-full">
                        <span className="text-gray-400"> x</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <span className="text-zinc-400 text-[11px] font-semibold flex items-start">
                *Only Video, PDF and SlideShow
                <br />
                files are allowed.
              </span>
              <div className="w-[177px] h-[13px] justify-center items-center gap-[5px] inline-flex">
                <div className="w-[75px] h-[0px] border border-gray-200"></div>
                <div className="text-neutral-400 text-[11px] font-bold">OR</div>
                <div className="w-[75px] h-[0px] border border-gray-200"></div>
              </div>
              <div className="w-[177px] h-[49px] flex-col justify-center items-start gap-[5px] inline-flex">
                <div className="text-zinc-600 text-[13px] font-semibold">
                  Media URL
                </div>
                <div className="w-[177px] h-7 relative flex-col justify-start items-start flex">
                  <input
                    className="text-zinc-400 text-[11px] p-2 font-semibold w-[177px] h-7 bg-white rounded-[5px] border border-zinc-300"
                    placeholder="https://youtu.be/1g4hoZx8-o4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>09</div>
      </div>
    </>
  );
};

export default Main;
