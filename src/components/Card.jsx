import React from "react";
import { RiCheckLine } from "react-icons/ri";
import {
  FiMoreHorizontal,
  FiArrowRight,
  FiEdit,
  FiTrash,
} from "react-icons/fi";

const Card = ({ id, title, progress }) => {
  return (
    <div className="relative rounded-md mb-4 border border-gray-200">
      <div className="flex items-center mb-2">
        <p className="text-sm font-medium p-2">{title}</p>
      </div>
      <div className="border-dotted border-b mt-2"></div>
      <div className="p-2">
        <div className="flex justify-between items-center">
          {progress < 100 && (
            <div className="flex justify-between items-center">
              <div className="w-40 h-4 mt-2 ml-1 rounded-full bg-gray-200">
                <div
                  className="h-4 rounded-full bg-cyan-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <span className="flex items-center justify-center text-gray-500 ml-1 mt-2">
                {progress}%
              </span>
            </div>
          )}
          {progress === 100 && (
            <div className="flex justify-between items-center">
              <button className="w-40 h-4 mt-2 ml-1 rounded-full bg-green-800"></button>
              <button
                className={`w-5 h-5 mt-2 rounded-full bg-green-800 ml-2 text-white`}
              >
                <span className="flex items-center justify-center">
                  <RiCheckLine />
                </span>
              </button>
            </div>
          )}
          <div className="text-gray-400 ml-2 mt-2">
            <div className="flex items-center">
              <FiArrowRight className="mr-1" />
              <span className="mr-1">Move Right</span>
              <FiEdit className="mr-1" />
              <span className="mr-1">Edit</span>
              <FiTrash className="mr-1" />
              <span>Delete</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

