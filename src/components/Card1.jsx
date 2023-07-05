// Card1.js
import React, { useState } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Card from "./Card";

const Card1 = ({ id }) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showMoreOptionsIndex, setShowMoreOptionsIndex] = useState(null);
  const [taskName, setTaskName] = useState("");
  const [progress, setProgress] = useState("");

  const handleOpenAddModal = () => {
    setShowAddModal(true);
  };

  const handleCloseAddModal = () => {
    setShowAddModal(false);
  };

  const handleOpenMoreOptions = (index) => {
    setShowMoreOptionsIndex(index);
  };

  const handleCloseMoreOptions = () => {
    setShowMoreOptionsIndex(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(taskName, progress);
    // Reset form data
    setTaskName("");
    setProgress("");
    // Close the add modal
    setShowAddModal(false);
  };

  const dummies = [
    {
      id: "card-1",
      title: "Re-designed the zero-g doggie bags. No more spills!",
      progress: 100,
    },
    {
      id: "card-2",
      title: "Bundle interplanetary analytics for improved transmission",
      progress: 30,
    },
  ];

  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="w-72 h-full p-4 border border-cyan-300 rounded-lg shadow-md"
        >
          <button className="w-32 text-sm border border-cyan-400 text-cyan-400">
            <h2 className="text-lg font-bold">Group Task 1</h2>
          </button>
          <p className="text-sm mt-4 mb-2 text-black">January-March</p>

          {dummies.map((card, index) => (
            <Draggable draggableId={card.id} index={index} key={card.id}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <Card
                    id={card.id}
                    title={card.title}
                    progress={card.progress}
                  />
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}

          {/* Rest of the code */}
        </div>
      )}
    </Droppable>
  );
};

export default Card1;
