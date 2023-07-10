import { useState, useCallback } from "react";
import Card from "./Cards";
import { useDrop } from "react-dnd";
import { FiPlus } from "react-icons/fi";
const Column = ({
  title,
  description,
  tasks,
  onDrop,
  setCurrentPosition,
  isEnd,
}) => {
  const [showMoreOptionsIndex, setShowMoreOptionsIndex] = useState(null);
  const handleOpenMoreOptions = useCallback((index) => {
    setShowMoreOptionsIndex(index);
  }, []);
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "CARD",
    drop: (item) => onDrop(item.id, title),
    collect: (monitor) => ({
      canDrop: monitor.canDrop(),
      isOver: monitor.isOver(),
    }),
  });

  const isActive = canDrop && isOver;

  return (
    <div className="min-w-max min-h-max pb-20">
      <div className="w-96 mr-8 p-4 border bg-soft-green border-dark-green rounded-lg shadow-md">
        <button className="px-4 py-1 text-sm border border-cyan-400 text-cyan-400 rounded-md">
          <h2 className="text-lg font-bold">{title}</h2>
        </button>
        {description && (
          <p className="text-sm my-4 text-black">{description}</p>
        )}
        {tasks.length === 0 && (
          <div>
            <div className="bg-soft-grey p-4 border border-neutral-40 rounded-md block mb-4">
              <h1 className="text-neutral-70">No Task</h1>
            </div>
          </div>
        )}
        <div ref={drop} className={`relative ${isActive ? "bg-blue-100" : ""}`}>
          {tasks.map((task) => (
            <Card
              key={task.id}
              id={task.id}
              name={task.name}
              progress={task.progress}
              handleOpenMoreOptions={handleOpenMoreOptions}
              showMoreOptionsIndex={showMoreOptionsIndex}
              isEnd={isEnd}
            />
          ))}
          <div className="flex items-center">
            <button
              onClick={setCurrentPosition}
              className="w-5 h-5 items-center rounded-full border border-black bg-white text-black"
            >
              <span className="flex items-center justify-center">
                <FiPlus />
              </span>
            </button>
            <span
              onClick={setCurrentPosition}
              className="text-black ml-2 items-center cursor-pointer"
            >
              New Task
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Column;
