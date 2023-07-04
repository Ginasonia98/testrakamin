import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";

const Card2 = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [updatedAt, setUpdatedAt] = useState("");

  const handleEditClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="w-72 h-50 p-4 border border-orange-300 rounded-lg shadow-md">
      <button className="w-32 text-sm border border-orange-400 text-orange-400">
        <h2 className="text-lg font-bold">Group Task 2</h2>
      </button>
      <p className="text-sm mt-4 mb-2 text-black">April-June</p>

      <div className="flex items-center">
        <input
          className="w-72 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-400 mb-3"
          type="text"
          placeholder="Enter task"
        />
      </div>

      <div className="flex items-center">
        <button className="w-5 h-5 mt-3 items-center rounded-full border border-black bg-white ml-2 text-black">
          <span className="flex items-center justify-center">
            <FiPlus />
          </span>
        </button>
        <span className="text-black ml-2 items-center">New Task</span>

        <button
          className="w-12 h-6 bg-green-800 items-center  ml-2 text-white"
          onClick={handleEditClick}
        >
          <span className="flex items-center justify-center">Edit</span>
        </button>

        <button className="w-12 h-6 bg-red-800 items-center ml-6 text-white">
          <span className="flex items-center justify-center">Delete</span>
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg">
            <h2 className="text-lg font-bold">Edit Task</h2>
            <div className="mt-4">
              <label htmlFor="id" className="block font-medium mb-1">
                ID:
              </label>
              <input
                type="text"
                id="id"
                value={id}
                onChange={(e) => setId(e.target.value)}
                className="w-full border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="title" className="block font-medium mb-1">
                Title:
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="createdBy" className="block font-medium mb-1">
                Created By:
              </label>
              <input
                type="text"
                id="createdBy"
                value={createdBy}
                onChange={(e) => setCreatedBy(e.target.value)}
                className="w-full border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="createdAt" className="block font-medium mb-1">
                Created At:
              </label>
              <input
                type="text"
                id="createdAt"
                value={createdAt}
                onChange={(e) => setCreatedAt(e.target.value)}
                className="w-full border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="updatedAt" className="block font-medium mb-1">
                Updated At:
              </label>
              <input
                type="text"
                id="updatedAt"
                value={updatedAt}
                onChange={(e) => setUpdatedAt(e.target.value)}
                className="w-full border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="mt-4 flex justify-end">
              <button
                className="px-4 py-2 bg-gray-300 rounded-lg text-white font-medium"
                onClick={handleCloseModal}
              >
                Close
              </button>
              <button
                className="px-4 py-2 bg-blue-500 rounded-lg text-white font-medium ml-4"
                onClick={handleCloseModal}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card2;

