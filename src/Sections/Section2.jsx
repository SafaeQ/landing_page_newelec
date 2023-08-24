import React, { useState } from "react";
import { AiFillCheckSquare } from "react-icons/ai";
import { IoMdCloudUpload } from "react-icons/io";

const Section2 = ({ question, id, index, onDeleteQuestion }) => {
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

  return (
    <div className="w-full h-auto flex flex-row gap-10 bg-stone-50 rounded-[5px] border border-gray-200 p-5">
      <div className="w-[60%] gap-3 flex flex-col">
        <div className="flex flex-row justify-between">
          <span className="text-center text-zinc-800 text-[15px] font-bold leading-[17px]">
            Question {id}
          </span>
          <button
            className="text-gray-400 text-xl font-medium cursor-pointer"
            onClick={() => onDeleteQuestion(id)}
          >
            x
          </button>
        </div>

        <div
          key={index}
          className="flex p-4 bg-white rounded-[5px] border border-gray-200 items-start"
        >
          <span className="text-zinc-500 text-xs font-semibold">
            {question}
          </span>
        </div>

        <div className="flex p-4 bg-white rounded-[5px] border border-gray-200 items-start justify-between">
          <span className="text-zinc-600 text-xs font-semibold">True</span>
          <div className="flex flex-row gap-2">
            <AiFillCheckSquare color="#B5F6BF" size={20} />
            <label className="flex flex-col text-center cursor-pointer  ">
              <IoMdCloudUpload size={20} color="#E7E7E7" />
              <input type="file" className="hidden" />
            </label>
          </div>
        </div>
        <div className="flex p-4 bg-white rounded-[5px] border border-gray-200 items-start justify-between">
          <span className="text-zinc-600 text-xs font-semibold">False</span>
          <div className="flex flex-row gap-2">
            <AiFillCheckSquare color="#48CA5C" size={20} />
            <label className="flex flex-col text-center cursor-pointer  ">
              <IoMdCloudUpload size={20} color="#E7E7E7" />
              <input type="file" className="hidden" />
            </label>
          </div>
        </div>
      </div>
      <div className="w-[40%] flex flex-col gap-4 h-auto ">
        <div className="flex flex-row justify-between">
          <span className="text-zinc-600 text-[13px] font-semibold">
            Question Image
          </span>
          <span className="text-zinc-400 text-[10px] font-semibold">
            Optional
          </span>
        </div>
        <label
          className={`flex flex-col rounded-lg border-4 border-dashed group text-center cursor-pointer ${
            uploadedFile ? "p-4" : "p-9"
          } `}
        >
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
      </div>
    </div>
  );
};

export default Section2;
