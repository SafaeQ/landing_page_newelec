import React, { useState } from "react";
import { AiFillCheckSquare } from "react-icons/ai";
import { IoMdCloudUpload } from "react-icons/io";
import PopupConfirme from "../Components/PopupConfirme";

const Section2 = ({ question, id, index, onDeleteQuestion }) => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

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
            <AiFillCheckSquare
              color={selectedAnswer === "True" ? "#48CA5C" : "#E7E7E7"}
              size={20}
              onClick={() => setSelectedAnswer("True")}
            />
            <label className="flex flex-col text-center cursor-pointer  ">
              <IoMdCloudUpload size={20} color="#E7E7E7" />
              <input type="file" className="hidden" />
            </label>
          </div>
        </div>
        <div className="flex p-4 bg-white rounded-[5px] border border-gray-200 items-start justify-between">
          <span className="text-zinc-600 text-xs font-semibold">False</span>
          <div className="flex flex-row gap-2">
            <AiFillCheckSquare
              color={selectedAnswer === "False" ? "#48CA5C" : "#E7E7E7"}
              onClick={() => setSelectedAnswer("False")}
              size={20}
            />
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
        {uploadedFile && (
          <PopupConfirme
            uploaded={uploadedFile}
            handleDelete={handleDeleteFile}
          />
        )}
      </div>
    </div>
  );
};

export default Section2;
