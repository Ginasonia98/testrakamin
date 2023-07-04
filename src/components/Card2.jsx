import React from "react";
import { FiPlus } from "react-icons/fi";

const Card2 = () => {
  return (
    <div className="w-72 h-50 p-4 border border-orange-300 rounded-lg shadow-md">
      <button className="w-32 text-sm border border-orange-400 text-orange-400">
        <h2 className="text-lg font-bold">Group Task 2</h2>
      </button>
      <p className="text-sm mt-4 mb-2 text-black">April-June</p>

      <div className="flex items-center">
        <input
          className="w-72 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-400"
          type="text"
          placeholder="Enter task"
        />
        </div>
        <button className="w-5 h-5 mt-3 items-center rounded-full border border-black bg-white ml-2 text-black">
          <span className="flex items-center justify-center">
            <FiPlus />
          </span>
        </button>
        <span className="text-black ml-2 items-center">New Task</span>
    </div>
  );
};

export default Card2;
