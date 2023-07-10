import React, { useState } from "react";

const Task = ({ title, onClose, onSubmit }) => {
  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");

  const handleTitleChange = (e) => {
    setTitleValue(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescriptionValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(titleValue, descriptionValue);
    setTitleValue("");
    setDescriptionValue("");
    onClose();
  };

  return (
    <div className="fixed z-50 inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50 px-4 md:px-0">
      <div className="bg-white w-full md:w-1/2 xl:w-1/3 rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <button
            className="text-gray-500 hover:text-gray-800"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mb-4">
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              value={titleValue}
              onChange={handleTitleChange}
              className="w-full px-3 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Progress
            </label>
            <input
              type="text"
              value={descriptionValue}
              onChange={handleDescriptionChange}
              className="w-full px-3 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg mr-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
