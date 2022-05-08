import { fireEvent, render, screen } from "@testing-library/react";
import reactTestRenderer from "react-test-renderer";
import { LoadingProviderMock, mocked_list } from "utils/test-utils";
import ListRow from "../ListRow";

describe("Loader", () => {
  let props, person;

  person = mocked_list[0];
  props = {
    innerRef: jest.fn(),
    provided: {
      innerRef: jest.fn(),
      draggableProps: {},
      dragHandleProps: {}
    },
    onPersonSelect: jest.fn(),
    person
  };

  it("should render correctly", () => {
    const wrapper = reactTestRenderer.create(
      <LoadingProviderMock>
        <ListRow {...props} />
      </LoadingProviderMock>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("should render according to props", () => {
    let newProps = {
      ...props,
      person: {
        ...mocked_list[0],
        org_name: "Andre Pharmacy"
      }
    };
    render(
      <LoadingProviderMock>
        <ListRow {...newProps} />
      </LoadingProviderMock>
    );
    expect(screen.getByText(/Andre Pharmacy/i)).toBeInTheDocument();
  });

  it("should run onPersonSelect when div[role='button'] clicked", () => {
    render(
      <LoadingProviderMock>
        <ListRow {...props} />
      </LoadingProviderMock>
    );

    fireEvent.click(screen.getByTestId("list_row_div"));

    expect(props.onPersonSelect).toBeCalled();
  });
});
