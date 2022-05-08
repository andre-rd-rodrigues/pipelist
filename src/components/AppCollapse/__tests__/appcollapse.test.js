import { fireEvent, render, screen } from "@testing-library/react";
import reactTestRenderer from "react-test-renderer";
import AppCollapse from "../AppCollapse";

describe("App collapse", () => {
  it("should render correctly", () => {
    const wrapper = reactTestRenderer.create(<AppCollapse />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should render correct initial label", () => {
    render(<AppCollapse />);

    expect(screen.getByText(/See more/i)).toBeInTheDocument();
  });

  it("should render correct label after button is clicked", () => {
    render(<AppCollapse />);

    const buttonElement = screen.getByRole("button");

    fireEvent.click(buttonElement);
    expect(screen.getByText(/Close/i)).toBeInTheDocument();
  });

  it("should show collapse children after 'See more' button is clicked", () => {
    render(
      <AppCollapse>
        <p>App collapse children</p>
      </AppCollapse>
    );

    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByText(/App collapse children/i)).toBeInTheDocument();
  });
});
