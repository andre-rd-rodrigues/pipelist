import { fireEvent, render, screen } from "@testing-library/react";
import reactTestRenderer from "react-test-renderer";
import AppCollapse from "../AppCollapse";

describe("App collapse", () => {
  it("renders correctly", () => {
    const wrapper = reactTestRenderer.create(<AppCollapse />);

    expect(wrapper).toMatchSnapshot();
  });

  it("renders correct initial label", () => {
    render(<AppCollapse />);

    expect(screen.getByText(/See more/i)).toBeInTheDocument();
  });

  it("renders correct label after clicking", () => {
    render(<AppCollapse />);

    const buttonElement = screen.getByRole("button");

    fireEvent.click(buttonElement);
    expect(screen.getByText(/Close/i)).toBeInTheDocument();
  });
});
