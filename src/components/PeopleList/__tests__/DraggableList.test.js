import { render, screen } from "@testing-library/react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { DragDropContext } from "react-beautiful-dnd";
import reactTestRenderer from "react-test-renderer";
import DraggableList from "../DraggableList";
import ListRow from "../ListRow";

// <ListRow
// ref={provided.innerRef}
// provided={provided}
// onPersonSelect={onPersonSelect}
// person={person}
// style={getItemStyle(provided.draggableProps.style)}
// />

describe("Draggable list", () => {
  it("renders correctly", () => {
    const wrapper = reactTestRenderer.create(
      <DragDropContext onDragEnd={jest.fn()}>
        <Droppable droppableId="list">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <Draggable key={1} draggableId={"1"} index={1}>
                {(provided) => (
                  <h1
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    Hey
                  </h1>
                )}
              </Draggable>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
