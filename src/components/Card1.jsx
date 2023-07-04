import React from "react";
import { RiCheckLine } from "react-icons/ri";
import { FiMoreHorizontal, FiPlus } from "react-icons/fi";

const Card1 = () => {
  return (
    <div className="w-72 h-full p-4 border border-cyan-300 rounded-lg shadow-md">
      <button className="w-32 text-sm border border-cyan-400 text-cyan-400">
        <h2 className="text-lg font-bold">Group Task 1</h2>
      </button>
      <p className="text-sm mt-4 mb-2 text-black">January-March</p>

      <div className="mb-4 border border-gray-200">
        <div className="flex items-center mb-2">
          <p className="text-sm font-medium ml-2">
            Re-designed the zero-g doggie bags. No more spills!
          </p>
        </div>
        <div className="border-dotted border-b mt-2"></div>
        <div className="flex items-center mb-3">
          <button className="w-44 h-4 mt-2 ml-1 rounded-full bg-green-800"></button>
          <button className="w-5 h-5 mt-2 rounded-full bg-green-800 ml-2 text-white">
            <span className="flex items-center justify-center">
              <RiCheckLine />
            </span>
          </button>
          <div className="text-gray-400 ml-2 mt-2">
            <FiMoreHorizontal />
          </div>
        </div>
      </div>

      <div className="mb-4 border border-gray-200">
        <div className="flex items-center mb-2">
          <p className="text-sm font-medium ml-2">
            Bundle interplanetary analytics for improved transmission
          </p>
        </div>
        <div className="border-dotted border-b mt-2"></div>
        <div className="flex items-center mb-3">
          <div className="w-44 h-4 mt-2 ml-1 rounded-full bg-gray-200">
            <div className="w-14 h-4 rounded-full bg-cyan-500"></div>
          </div>
          <span className="flex items-center justify-center text-gray-500 ml-1 mt-2">
            30%
          </span>
          <div className="text-gray-400 ml-2 mt-2">
            <FiMoreHorizontal />
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <button className="w-5 h-5 items-center rounded-full border border-black bg-white ml-2 text-black">
          <span className="flex items-center justify-center">
            <FiPlus />
          </span>
        </button>
        <span className="text-black ml-2 items-center">New Task</span>
      </div>
    </div>
  );
};

export default Card1;
