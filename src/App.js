import { useCallback, useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import Column from "./components/Columns";
import { HTML5Backend } from "react-dnd-html5-backend";
import Button from "./components/Button";
import Modal from "./components/Modal";
import Task from "./components/Task";

const App = () => {
  const [tasks, setTasks] = useState([
    // { id: 1, name: "Task 1", position: "Column 1", progress: 50 },
    // { id: 2, name: "Task 2", position: "Column 2", progress: 100 },
    // { id: 3, name: "Task 3", position: "Column 3", progress: 10 },
    // { id: 4, name: "Task 4", position: "Column 4", progress: 90 },
  ]);
  const [currentPosition, setCurrentPosition] = useState("");
  const [columns, setColumns] = useState([]);

  const handleDrop = (taskId, targetCol) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, position: targetCol } : task
    );
    setTasks(updatedTasks);
  };

  const [showModal, setShowModal] = useState(false);
  const [showTaskModal, setShowTaskModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenTaskModal = () => {
    setShowTaskModal(true);
  };

  const handleCloseTaskModal = () => {
    setShowTaskModal(false);
  };

  const handleSubmitModal = (title, description) => {
    columns.push({
      title,
      description,
    });
  };

  const handleCreateTask = useCallback(
    (name, progress) => {
      const tasksList = [...tasks];
      const newTask = {
        id: tasksList.length,
        name,
        progress,
        position: currentPosition,
      };
      tasksList.push(newTask);
      setTasks(tasksList);
      setCurrentPosition("");
    },
    [currentPosition, tasks]
  );

  useEffect(() => {
    if (currentPosition) {
      handleOpenTaskModal();
    } else {
      handleCloseTaskModal();
    }
  }, [currentPosition]);

  return (
    <>
      <Button createNewGroup={handleOpenModal} />
      {showModal && (
        <Modal
          title="Add New Group"
          onClose={handleCloseModal}
          onSubmit={handleSubmitModal}
        />
      )}
      {showTaskModal && (
        <Task
          title="Add New Task"
          onClose={handleCloseTaskModal}
          onSubmit={handleCreateTask}
        />
      )}
      <DndProvider backend={HTML5Backend}>
        <div className="container m-auto px-4 mt-4">
          <div className="flex overflow-x-scroll">
            {columns.map((column, index) => (
              <Column
                key={column.title}
                title={column.title}
                isEnd={index === columns.length - 1}
                description={column.description}
                tasks={tasks.filter((task) => task.position === column.title)}
                onDrop={handleDrop}
                setCurrentPosition={() => setCurrentPosition(column.title)}
              />
            ))}
          </div>
        </div>
      </DndProvider>
    </>
  );
};

export default App;
