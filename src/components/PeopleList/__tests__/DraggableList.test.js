import { render, screen } from "@testing-library/react";
import { LoadingProviderMock, mocked_list } from "utils/test-utils";
import DraggableList from "../DraggableList";

let props;

props = {
  list: mocked_list,
  setList: jest.fn(),
  onPersonSelect: jest.fn()
};

describe("Draggable list", () => {
  it("should render correctly according to props", () => {
    render(
      <LoadingProviderMock>
        <DraggableList {...props} />
      </LoadingProviderMock>
    );

    expect(screen.getByText(/Rite Aid Pharmacy/i)).toBeInTheDocument();
  });
});
