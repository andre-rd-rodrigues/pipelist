import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { LoadingProviderMock } from "mocks/LoadingProviderMock";
import reactTestRenderer from "react-test-renderer";
import PeopleList from "../PeopleList";

jest.mock("react-beautiful-dnd", () => ({
  Droppable: ({ children }) =>
    children(
      {
        draggableProps: {
          style: {}
        },
        innerRef: jest.fn()
      },
      {}
    ),
  Draggable: ({ children }) =>
    children(
      {
        draggableProps: {
          style: {}
        },
        innerRef: jest.fn()
      },
      {}
    ),
  DragDropContext: ({ children }) => children
}));

describe("People list", () => {
  beforeAll(() => {
    console.error = jest.fn();
  });

  it("should render correctly", () => {
    const wrapper = reactTestRenderer.create(
      <LoadingProviderMock>
        <PeopleList />
      </LoadingProviderMock>
    );

    expect(wrapper).toMatchSnapshot();
  });
  it("should open PersonModal when person clicked", async () => {
    render(
      <LoadingProviderMock>
        <PeopleList />
      </LoadingProviderMock>
    );

    const person = await screen.findByText(/Mila Benson/i);

    fireEvent.click(person);

    expect(screen.getByText(/Person Information/i)).toBeInTheDocument();
  });
  it("should open AppPersonModal when 'Add Person' button is clicked", () => {
    render(
      <LoadingProviderMock>
        <PeopleList />
      </LoadingProviderMock>
    );

    const addPersonButton = screen.getByTestId(/add_person_button/i);

    fireEvent.click(addPersonButton);

    expect(screen.getByText(/First Name*/i)).toBeInTheDocument();
  });
});
