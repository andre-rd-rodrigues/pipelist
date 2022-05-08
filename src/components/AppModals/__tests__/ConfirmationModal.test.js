import { fireEvent, screen, render } from "@testing-library/react";
import { LoadingProviderMock } from "mocks/LoadingProviderMock";
import ConfirmationModal from "../ConfirmationModal";

describe("Confirmation modal", () => {
  let props;
  props = {
    title: "Delete person",
    message: "Are you sure you want to proceed?",
    show: true,
    onHide: jest.fn()
  };

  it("should render according to props", () => {
    render(
      <LoadingProviderMock>
        <ConfirmationModal {...props} />
      </LoadingProviderMock>
    );

    expect(screen.getByText(/Delete person/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Are you sure you want to proceed?/i)
    ).toBeInTheDocument();
  });

  it('should call onHide when button "Delete" or "Cancel" are clicked', () => {
    render(
      <LoadingProviderMock>
        <ConfirmationModal {...props} />
      </LoadingProviderMock>
    );
    fireEvent.click(screen.getByText("Delete"));

    expect(props.onHide).toBeCalled();

    fireEvent.click(screen.getByText(/Cancel/i));

    expect(props.onHide).toBeCalled();
  });
});
