import { fireEvent, screen, render } from "@testing-library/react";
import { LoadingProviderMock } from "mocks/LoadingProviderMock";
import AddPersonModal from "../AddPersonModal";

describe("Add person modal", () => {
  let props;
  props = {
    show: true,
    onHide: jest.fn(),
    onSubmit: jest.fn((e) => e.preventDefault())
  };

  it("should render title", () => {
    render(
      <LoadingProviderMock>
        <AddPersonModal {...props} />
      </LoadingProviderMock>
    );

    expect(screen.getByText(/Add Person/i)).toBeInTheDocument();
  });

  it('should call onHide when button "Back" is clicked', () => {
    render(
      <LoadingProviderMock>
        <AddPersonModal {...props} />
      </LoadingProviderMock>
    );
    fireEvent.click(screen.getByTestId(/back_button/i));

    expect(props.onHide).toBeCalled();
  });
  it('should call onSubmit when button "Submit" is clicked', () => {
    render(
      <LoadingProviderMock>
        <AddPersonModal {...props} />
      </LoadingProviderMock>
    );
    fireEvent.click(screen.getByText(/Submit/i));

    expect(props.onSubmit).toBeCalled();
  });
});
