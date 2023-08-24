import React, { useState } from "react";

const QuestionForm = ({ isOpen, onClose, onAddQuestion }) => {
  const [question, setQuestion] = useState("");

  const handleSubmit = () => {
    // Call the callback function to add the new question
    onAddQuestion(question);

    // Close the modal
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white w-[40%] p-6 rounded-lg shadow-xl z-10">
        <h2 className="text-lg font-semibold mb-4">Add Question</h2>
        <textarea
          className="text-black-400 text-[15px] p-2 font-semibold w-full h-auto border border-zinc-300"
          type="text"
          rows={2}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <div className="flex flex-row gap-3 justify-center items-center">
          <button
            onClick={onClose}
            className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg"
          >
            Close
          </button>
          <button
            onClick={handleSubmit}
            className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionForm;
