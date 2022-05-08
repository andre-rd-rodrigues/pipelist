import { render, screen } from "@testing-library/react";
import reactTestRenderer from "react-test-renderer";
import AppButton from "../AppButton";

describe("App button", () => {
  it("should render correctly", () => {
    const wrapper = reactTestRenderer.create(<AppButton />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should render according to props", () => {
    render(<AppButton label="Test" />);

    expect(screen.getByText(/test/i)).toBeInTheDocument();
  });
});
