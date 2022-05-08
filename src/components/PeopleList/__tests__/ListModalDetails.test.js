import { render, screen } from "@testing-library/react";
import reactTestRenderer from "react-test-renderer";
import ListModalDetails from "../ListModalDetails";

describe("List modal details", () => {
  it("should render correctly", () => {
    const wrapper = reactTestRenderer.create(<ListModalDetails />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render according to props", () => {
    render(<ListModalDetails label="Assistant" value="Stacy Conely" />);
    expect(screen.getByText(/Stacy Conely/i)).toBeInTheDocument();
  });
});
