import React from "react";
import ListRow from "components/List/ListRow";
import { Droppable, DragDropContext, Draggable } from "react-beautiful-dnd";

const AppDraggable = ({ list, setList, onPersonSelect }) => {
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const newOrderedList = Array.from(list);
    const [reorderedItem] = newOrderedList.splice(result.source.index, 1);
    newOrderedList.splice(result.destination.index, 0, reorderedItem);

    setList(newOrderedList);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="list">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {list?.map((person, index) => (
              <Draggable key={person.id} draggableId={person.id} index={index}>
                {(provided) => (
                  <ListRow
                    provided={provided}
                    key={person.id}
                    onPersonSelect={onPersonSelect}
                    person={person}
                  />
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default AppDraggable;
