import { fireEvent, screen, render } from "@testing-library/react";
import { LoadingProviderMock } from "mocks/LoadingProviderMock";
import { mocked_list } from "utils/test-utils";
import PersonModal from "../PersonModal";

describe("Person modal", () => {
  let props;
  props = {
    person: mocked_list[0],
    deletePerson: jest.fn(),
    openModal: jest.fn(),
    show: true,
    onHide: jest.fn()
  };
  beforeAll(() => {
    console.error = jest.fn();
  });

  it("should render title", () => {
    render(
      <LoadingProviderMock>
        <PersonModal {...props} />
      </LoadingProviderMock>
    );

    expect(screen.getByText(/Person Information/i)).toBeInTheDocument();
  });
  it("should render person from props", () => {
    render(
      <LoadingProviderMock>
        <PersonModal {...props} />
      </LoadingProviderMock>
    );

    expect(screen.getByText(/Mila Benson/i)).toBeInTheDocument();
  });
  it('should call onHide when button "Delete" or "Cancel" are clicked', () => {
    render(
      <LoadingProviderMock>
        <PersonModal {...props} />
      </LoadingProviderMock>
    );
    fireEvent.click(screen.getByText("Delete"));

    expect(props.onHide).toBeCalled();

    fireEvent.click(screen.getByText("Cancel"));

    expect(props.onHide).toBeCalled();
  });
  it('should show ConfirmationModal after "Delete" button is clicked', () => {
    render(
      <LoadingProviderMock>
        <PersonModal {...props} />
      </LoadingProviderMock>
    );

    fireEvent.click(screen.getByText("Delete"));

    expect(screen.getByText(/Delete person/i)).toBeInTheDocument();
  });
});
