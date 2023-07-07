import React, { useState } from "react";
import { RiAddLine } from "react-icons/ri";
import Card from "./Card";

const Button = () => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [cards, setCards] = useState([]);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setTitle("");
    setDescription("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new card based on the entered title and description
    const newCard = {
      id: `card-${cards.length + 1}`,
      title,
      progress: 0,
    };
    // Add the new card to the existing cards array
    setCards([...cards, newCard]);
    // Reset form data
    setTitle("");
    setDescription("");
    // Close the add modal
    setShowModal(false);
  };

  return (
    <div>
      <div className="flex items-center">
        <p className="text-black font-semibold text-sm ml-4 mr-2">
          Product Roadmap
        </p>
        <button
          className="w-36 h-7 rounded-lg bg-cyan-500 text-white border-none mt-2 flex items-center"
          onClick={handleOpenModal}
        >
          <RiAddLine size={16} className="mr-1" />
          <span>Add New Group</span>
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md">
            <h2 className="text-lg font-bold mb-4 text-gray-800">
              Add New Group
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4 text-gray-800">
                <label htmlFor="title" className="text-sm font-medium">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  className="w-full border border-gray-300 rounded-md p-2 mt-1"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mb-4 text-gray-800">
                <label htmlFor="description" className="text-sm font-medium">
                  Description
                </label>
                <input
                  type="text"
                  id="description"
                  className="w-full border border-gray-300 rounded-md p-2 mt-1"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="mr-2 px-4 py-2 text-sm font-medium text-black border border-gray-300  bg-white rounded-lg w-full"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg w-full"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="flex justify-center  ">
        <div className="flex flex-wrap">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="w-72 h-full p-4 border border-cyan-300 rounded-lg shadow-md mr-4 mb-4"
            >
              <button className="w-32 text-sm border border-cyan-400 text-cyan-400">
                <h2 className="text-lg font-bold">Group Task {index + 1}</h2>
              </button>
              <p className="text-sm mt-4 mb-2 text-black">January-March</p>

              <Card
                id={card.id}
                title={card.title}
                progress={card.progress}
                handleOpenMoreOptions={() => {}}
                showMoreOptionsIndex={-1}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Button;
