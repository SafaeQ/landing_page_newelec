import React, { useState } from "react";
import CustomSelect from "../Components/CustomSelect";

const Section1 = () => {
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  // delete the uploaded file
  const handleDeleteFile = () => {
    setUploadedFile(null);
    // reset properly when the file is deleted
    const fileInput = document.getElementById("fileInput");
    if (fileInput) {
      fileInput.value = "";
    }
  };

  const selectOptions = [{ icon: "", label: "Safty" }];
  const selectOptions2 = [{ value: "option1", label: "VCA" }];
  const selectOptions3 = [{ label: "1 year" }];
  const selectOptions4 = [{ label: "Internal workers" }];

  return (
    <div className="flex w-full flex-row gap-4 justify-end mt-8">
      <div className="bg-white w-full rounded-[5px] shadow p-6 flex flex-col gap-4">
        <div className="flex flex-row gap-3 w-[100%]">
          <div className="w-[34%] gap-2 flex flex-col">
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
              styleImage={{
                backgroundImage: `url("vest.png")`,
                paddingLeft: "2rem",
                backgroundSize: "1.5rem auto",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "0.5rem center",
              }}
              className="bg-white rounded-[5px] p-1 h-9 w-[100%] border border-zinc-300"
            />
          </div>
          <div className="w-[43%] gap-2 flex flex-col">
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
              styleImage={{
                backgroundImage: `url("jump.png")`,
                paddingLeft: "2rem",
                backgroundSize: "1.5rem auto",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "0.5rem center",
              }}
              className="bg-white rounded-[5px] p-1 h-9 w-[100%] border border-zinc-300"
            />
          </div>
          <div className="w-[23%] gap-2 flex flex-col">
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
          <div className="w-[60%] gap-2 flex flex-col">
            <div className="flex flex-row justify-between ">
              <span className="text-zinc-600 text-[13px] font-semibold">
                Training
              </span>
            </div>

            <div
              placeholder="Working at height"
              className="bg-white flex flex-row justify-between rounded-[5px] p-2 h-9 w-[100%] border border-zinc-300"
            >
              <div className="text-zinc-800 text-xs font-semibold">
                Working at height
              </div>
              <div className="flex flex-row items-center">
                <img className="w-[20px] h-[20px]" src="jump.png" alt="" />
                <img className="w-[16px] h-[16px]" src="Vect.png" alt="" />
              </div>
            </div>
          </div>
          <div className="w-[40%] gap-2 flex flex-col">
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
              <select className="bg-white text-gray-400 rounded-[5px] p-2 h-10 w-[100%] border border-zinc-300">
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
              <select className="bg-white rounded-[5px] text-gray-400 p-2 h-10 w-[100%] border border-zinc-300">
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
        <span className="text-zinc-600 text-[13px] font-semibold ">Image</span>
        <div className="flex items-center justify-center w-full">
          <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center cursor-pointer">
            <div className=" text-center flex flex-col items-center justify-center ">
              <img
                src="Vector.png"
                alt=""
                className="has-mask object-center mt-6 "
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

      <div className="bg-white w-[50%] rounded-[5px] shadow p-4 flex flex-col items-start justify-start gap-5">
        <span className="text-zinc-600 text-[13px] font-semibold">
          Training file
        </span>
        <div className="w-full flex flex-col gap-2 items-center justify-center">
          <label className="w-full flex flex-col rounded-lg border-4 border-dashed group text-center cursor-pointer p-2 ">
            <div className=" text-center flex flex-col items-center justify-center ">
              <img
                src="Vector.png"
                alt=""
                className="has-mask object-center mt-2 "
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
            <input
              type="file"
              id="fileInput"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
          <div className="w-full relative flex items-center justify-center">
            {uploadedFile && (
              <div className="w-full p-2 bg-green-500 rounded-[5px]">
                <div className="w-full h-auto justify-between items-center gap-[34px] flex ">
                  <div className="w-[104px] self-stretch flex-col justify-center items-start inline-flex">
                    <span className="text-white text-[10px] font-semibold">
                      Completed
                    </span>
                    <span className="text-white text-[11px] font-bold">
                      {uploadedFile.name}
                    </span>
                  </div>
                  <div className="w-[22px] h-[22px] relative flex-col justify-start items-start flex cursor-pointer">
                    <div className="w-[22px] h-[22px] items-center bg-white rounded-full">
                      <button
                        className="text-gray-400 relative bottom-[4px]"
                        onClick={handleDeleteFile}
                      >
                        x
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <span className="text-zinc-400 text-[9px] font-semibold flex items-start justify-start">
            *Only Video, PDF and SlideShow
            <br />
            files are allowed.
          </span>
          <div className="w-full h-[13px] justify-center items-center gap-[5px] inline-flex">
            <div className="w-full h-[0px] border border-gray-200"></div>
            <div className="text-neutral-400 text-[11px] font-bold">OR</div>
            <div className="w-full h-[0px] border border-gray-200"></div>
          </div>
          <div className="w-full h-[49px] flex-col justify-center items-start gap-[5px] inline-flex">
            <div className="text-zinc-600 text-[13px] font-semibold">
              Media URL
            </div>
            <div className="w-full h-7 relative flex-col justify-start items-start flex">
              <input
                className="text-zinc-400 text-[11px] p-2 font-semibold w-full h-7 bg-white rounded-[5px] border border-zinc-300"
                placeholder="https://youtu.be/1g4hoZx8-o4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
