import React from "react";
import ListRow from "components/PeopleList/ListRow";
import { motion } from "framer-motion";
import { Droppable, DragDropContext, Draggable } from "react-beautiful-dnd";
import { containerVariant } from "styles/motion/motionVariants";

const DraggableList = ({ list, setList, onPersonSelect }) => {
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
            <motion.div
              variants={containerVariant}
              initial="hidden"
              animate="visible"
            >
              {list?.map((person, index) => (
                <Draggable
                  key={person.id}
                  draggableId={person?.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <ListRow
                      innerRef={provided.innerRef}
                      provided={provided}
                      onPersonSelect={onPersonSelect}
                      person={person}
                    />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </motion.div>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DraggableList;
