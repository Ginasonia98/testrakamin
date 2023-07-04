import React from "react";
import { FiMoreHorizontal, FiPlus } from "react-icons/fi";

const Card4 = () => {
  return (
    <div className="w-72 h-100 p-4 border border-emerald-300 rounded-lg shadow-md">
      <button className="w-32 text-sm border border-emerald-400 text-emerald-400">
        <h2 className="text-lg font-bold">Group Task 4 </h2>
      </button>
      <p className="text-sm mt-4 mb-2 text-black">October-December</p>

      <div className="mb-4 border border-gray-200">
        <div className="flex items-center mb-2">
          <p className="text-sm font-medium ml-2">
          Bundle interplanetary analytics for improved transmission
          </p>
        </div>
        <div className="border-dotted border-b mt-2"></div>
        <div className="flex items-center mb-3">
          <div className="w-44 h-4 mt-2 ml-1 rounded-full bg-gray-200">
            <div className="w-10 h-4 rounded-full bg-cyan-500"></div>
          </div>
          <span className="flex items-center justify-center text-gray-500 ml-1 mt-2">
            20%
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

export default Card4;