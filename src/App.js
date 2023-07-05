import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Button from "./components/Button";
import Card1 from "./components/Card1";

const App = () => {
  const [cards, setCards] = useState([
    { id: "card-1", component: <Card1 id={"card1"} /> },
    { id: "card-2", component: <Card1 id={"card2"} /> },
    { id: "card-3", component: <Card1 id={"card3"} /> },
    { id: "card-4", component: <Card1 id={"card4"} /> },
  ]);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const sourceIndex = result.source.index;
    const destinationIndex = result.destination.index;

    if (sourceIndex === destinationIndex) return;

    const newCards = Array.from(cards);
    const [movedCard] = newCards.splice(sourceIndex, 1);
    newCards.splice(destinationIndex, 0, movedCard);

    setCards(newCards);
  };

  return (
    <div>
      <Button />
      <hr className="mt-4" />
      <div className="flex flex-col items-center">
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="ROOT" type="group">
            {(provided) => (
              <div
                className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 xxl:grid-cols-4 gap-4"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {cards.map((card, index) => (
                  <Draggable key={card.id} draggableId={card.id} index={index}>
                    {(provided) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        {card.component}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

export default App;
