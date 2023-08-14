import React from "react";
import { IoMdCloudUpload } from "react-icons/io";
// import { AiFillCheckSquare } from "react-icons/ai";
import CustomSelect from "../Components/CustomSelect";
import Section2 from "./Section2";

import {
  Carousel,
  initTE,
} from "tw-elements";

initTE({ Carousel });

const Main = () => {
  const selectOptions = [{ icon: "", label: "Safty" }];
  const selectOptions2 = [{ value: "option1", label: "VCA" }];
  const selectOptions3 = [{ label: "1 year" }];
  const selectOptions4 = [{ label: "Internal workers" }];

  return (
    <>
      <div className="flex flex-col gap-4 bg-[#f8fafd]">
        <div className="sm:container mx-auto">
          <div className="w-full h-[37px] flex-row justify-between items-center flex mt-8">
            <div className="text-neutral-500 text-lg font-semibold">
              Edit Training “Working At Height”
            </div>
            <div className="flex-row gap-[15px] flex justify-between items-center">
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
          <div className="flex w-full flex-row gap-4 justify-end mt-8">
            <div className="bg-white w-full rounded-[5px] shadow p-6 flex flex-col gap-4">
              <div className="flex flex-row gap-3 w-[100%]">
                <div className="w-44 gap-2 flex flex-col">
                  <div className="flex flex-row justify-between ">
                    <span className="text-zinc-600 text-[13px] font-semibold">
                      Category
                    </span>
                    <button className="btn border-t-neutral-50 text-blue-500 text-xs font-semibold">
                      Add new +
                    </button>
                  </div>

                  <CustomSelect
                    options={selectOptions}
                    className="bg-white rounded-[5px] p-1 h-9 w-[100%] border border-zinc-300"
                  />
                </div>
                <div className="w-52 gap-2 flex flex-col">
                  <div className="flex flex-row justify-between ">
                    <span className="text-zinc-600 text-[13px] font-semibold">
                      Topic
                    </span>
                    <button className="btn border-t-neutral-50 text-blue-500 text-xs font-semibold">
                      Add new +
                    </button>
                  </div>
                  <CustomSelect
                    options={selectOptions2}
                    className="bg-white rounded-[5px] p-1 h-9 w-[100%] border border-zinc-300"
                  />
                </div>
                <div className="w-28 gap-2 flex flex-col">
                  <div className="flex flex-row justify-between ">
                    <span className="text-zinc-600 text-[13px] font-semibold">
                      Valid For
                    </span>
                  </div>
                  <CustomSelect
                    options={selectOptions3}
                    className="bg-white rounded-[5px]  p-1 h-9 w-[100%] border border-zinc-300"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-3 w-[100%]">
                <div className="w-[18.7rem] gap-2 flex flex-col">
                  <div className="flex flex-row justify-between ">
                    <span className="text-zinc-600 text-[13px] font-semibold">
                      Training
                    </span>
                  </div>

                  <input
                    placeholder="Working at height"
                    className="bg-white rounded-[5px] p-1 h-9 w-[100%] border border-zinc-300"
                  />
                </div>
                <div className="w-52 gap-2 flex flex-col">
                  <div className="flex flex-row justify-between ">
                    <span className="text-zinc-600 text-[13px] font-semibold">
                      Assign To
                    </span>
                  </div>
                  <CustomSelect
                    options={selectOptions4}
                    className="bg-white rounded-[5px] p-1 h-9 w-[100%] border border-zinc-300"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-3 w-[100%]">
                <div className="w-[85%] flex flex-col gap-4">
                  <div className="gap-3 flex flex-col">
                    <div className="flex flex-row justify-between">
                      <span className="text-zinc-600 text-xs font-semibold">
                        Departments
                      </span>
                      <span className="text-zinc-400 text-[10px] font-semibold">
                        Optional
                      </span>
                    </div>
                    <select
                      className="bg-white  rounded-[5px] p-2 h-10 w-[100%] border border-zinc-300"
                      placeholder="Select departments"
                    >
                      <option className="text-zinc-300  text-xs font-normal">
                        Select departments
                      </option>
                    </select>
                  </div>
                  <div className="gap-3 flex flex-col">
                    <div className="flex flex-row justify-between">
                      <span className="text-zinc-600 text-xs font-semibold">
                        Functions
                      </span>
                      <span className="text-zinc-400 text-[10px] font-semibold">
                        Optional
                      </span>
                    </div>
                    <select
                      className="bg-white rounded-[5px] p-2 h-10 w-[100%] border border-zinc-300"
                      placeholder="Select functions"
                    >
                      <option className="text-zinc-300  text-xs font-normal">
                        Select functions
                      </option>
                    </select>
                  </div>
                </div>
                <div className="w-[100%] flex flex-col gap-4 justify-start items-start ">
                  <span className="text-zinc-600 text-xs font-semibold">
                    Description
                  </span>
                  <textarea
                    rows={4}
                    type="text"
                    placeholder="Type here .."
                    className="w-full p-2 rounded border-2 border-gray-200 "
                  />
                </div>
              </div>
            </div>

            <div className="bg-white w-full rounded-[5px] shadow p-4 flex flex-col items-start justify-start gap-5">
              <span className="text-zinc-600 text-[13px] font-semibold ">
                Image
              </span>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center cursor-pointer">
                  <div className=" text-center flex flex-col items-center justify-center ">
                    <IoMdCloudUpload
                      className="has-mask object-center "
                      color="#c8c8c8"
                      size={50}
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

            <div className="bg-white w-[80%] rounded-[5px] shadow p-4 flex flex-col items-start justify-start gap-5">
              <span className="text-zinc-600 text-[13px] font-semibold">
                Training file
              </span>
              <div className="w-full flex flex-col gap-2 items-center justify-center">
                <label className="flex flex-col rounded-lg border-4 border-dashed group text-center cursor-pointer p-2 ">
                  <div className=" text-center flex flex-col items-center justify-center ">
                    <IoMdCloudUpload
                      className="has-mask object-center "
                      color="#c8c8c8"
                      size={50}
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
                <span className="text-zinc-400 text-[9px] font-semibold flex items-start">
                  *Only Video, PDF and SlideShow
                  <br />
                  files are allowed.
                </span>
                <div className="w-[177px] h-[13px] justify-center items-center gap-[5px] inline-flex">
                  <div className="w-[75px] h-[0px] border border-gray-200"></div>
                  <div className="text-neutral-400 text-[11px] font-bold">
                    OR
                  </div>
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
          <div className="w-full rounded-[5px] shadow p-4 flex flex-col gap-4 bg-white mt-4">
            <div className="flex flex-col justify-start items-start gap-1">
              <span className="text-zinc-600 text-[13px] font-semibold">
                Training quiz
              </span>
              <p className="text-zinc-400 text-[11px] font-medium">
                Here you can manage the questions by clicking on the “Add
                Question” button and choose from the available types of
                question. You can add up to 100 questions.
              </p>
            </div>
            <div className="w-full h-[0px] border border-gray-200 mb-2"></div>

            <Section2 />
            <Section2 />
            <button className="w-full btn h-10 bg-sky-100 rounded-[5px] p-1">
              <span className="text-blue-500 text-sm font-bold leading-[17px]">
                Add Question{" "}
              </span>
              <span className="text-blue-500 text-base font-bold leading-[17px]">
                +
              </span>
            </button>
          </div>
          <div className="w-full rounded-[5px] p-4 flex flex-row gap-4 mt-4">
            {/* <div class="w-[50%] h-[156px] bg-white rounded-[5px] shadow">h</div>
            <div class="w-[50%] h-[156px] bg-white rounded-[5px] shadow">h</div>
            <div class="w-[50%] h-[156px] bg-white rounded-[5px] shadow">h</div>
            <div class="w-[50%] h-[156px] bg-white rounded-[5px] shadow">h</div>
            <div class="w-[50%] h-[156px] bg-white rounded-[5px] shadow">h</div>
            <div class="w-[50%] h-[156px] bg-white rounded-[5px] shadow">h</div> */}

            <div
              id="carouselExampleControls"
              class="relative"
              data-te-carousel-init
              data-te-ride="carousel"
            >
              <div class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                <div
                  class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item
                  data-te-carousel-active
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                    class="block w-full"
                    alt="Wild Landscape"
                  />
                </div>
                <div
                  class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                    class="block w-full"
                    alt="Camera"
                  />
                </div>
                <div
                  class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                    class="block w-full"
                    alt="Exotic Fruits"
                  />
                </div>
              </div>

              <button
                class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button"
                data-te-target="#carouselExampleControls"
                data-te-slide="prev"
              >
                <span class="inline-block h-8 w-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </span>
                <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Previous
                </span>
              </button>
              <button
                class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button"
                data-te-target="#carouselExampleControls"
                data-te-slide="next"
              >
                <span class="inline-block h-8 w-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
                <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Next
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
