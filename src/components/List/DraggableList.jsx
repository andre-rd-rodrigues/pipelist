import React from "react";
import ListRow from "components/List/ListRow";
import { Droppable, DragDropContext, Draggable } from "react-beautiful-dnd";

const DraggableList = ({ list, setList, onPersonSelect }) => {
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const newOrderedList = Array.from(list);
    const [reorderedItem] = newOrderedList.splice(result.source.index, 1);
    newOrderedList.splice(result.destination.index, 0, reorderedItem);

    setList(newOrderedList);
  };

  const getItemStyle = (draggableStyle) => ({
    userSelect: "none",
    padding: 8 * 2,
    margin: `0 0 ${8}px 0`,
    ...draggableStyle
  });
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="list">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {list?.map((person, index) => (
              <Draggable key={person.id} draggableId={person.id} index={index}>
                {(provided) => (
                  /*   <h1
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(provided.draggableProps.style)}
                  >
                    Hey
                  </h1> */
                  <ListRow
                    provided={provided}
                    onPersonSelect={onPersonSelect}
                    person={person}
                    style={getItemStyle(provided.draggableProps.style)}
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

export default DraggableList;
