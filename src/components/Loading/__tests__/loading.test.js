import { render, screen } from "@testing-library/react";
import reactTestRenderer from "react-test-renderer";
import Loading from "../Loading";

describe("Loading", () => {
  let props;

  props = {
    color: "rgb(54, 215, 183)",
    loading: true,
    size: 20,
    type: "SyncLoader"
  };

  it("should render correctly", () => {
    const wrapper = reactTestRenderer.create(<Loading {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should show loader when loading is true", () => {
    render(<Loading {...props} />);

    expect(screen.getByTestId("sync_loader")).toBeInTheDocument();
  });

  it("should not show loader when loading is false", () => {
    render(<Loading {...props} loading={false} />);

    expect(screen.queryByTestId("sync_loader")).not.toBeInTheDocument();
  });
});
