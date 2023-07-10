import React from "react";
import { useDrag } from "react-dnd";
import { RiCheckLine } from "react-icons/ri";
import {
  FiMoreHorizontal,
  FiArrowRight,
  FiEdit,
  FiTrash,
} from "react-icons/fi";

const Card = ({
  id,
  name,
  progress,
  handleOpenMoreOptions,
  showMoreOptionsIndex,
  isEnd,
}) => {
  const [{}, drag] = useDrag({
    type: "CARD",
    item: { id, type: "CARD", progress },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div className="relative rounded-md mb-4 border border-gray-200" ref={drag}>
      <div className="flex items-center mb-2">
        <p className="text-sm font-medium p-2">{name}</p>
      </div>
      <div className="border-dotted border-b mt-2"></div>
      <div className="p-2">
        <div className="flex justify-between items-center">
          {Number(progress) < 100 && (
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
          {Number(progress) === 100 && (
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
            <FiMoreHorizontal
              onClick={() =>
                handleOpenMoreOptions(
                  `${showMoreOptionsIndex}` !== "null" ? null : id
                )
              }
            />
          </div>
        </div>
      </div>
      {showMoreOptionsIndex === id && (
        <div
          className={`absolute z-40 right-0 ${
            isEnd ? "-bottom-20" : "-bottom-32"
          }`}
        >
          <div className="bg-white rounded-md shadow-md w-full max-w-xs mx-auto">
            <ul className="py-1">
              {!isEnd && (
                <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer text-base">
                  <FiArrowRight className="mr-2" />
                  <span className="mr-4">Move Right</span>
                </li>
              )}
              <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <FiEdit className="mr-2" />
                <span className="mr-4">Edit</span>
              </li>
              <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <FiTrash className="mr-2" />
                <span>Delete</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
