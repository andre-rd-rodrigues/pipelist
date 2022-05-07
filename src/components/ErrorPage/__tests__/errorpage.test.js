import reactTestRenderer from "react-test-renderer";
import ErrorPage from "../ErrorPage";

describe("Error page", () => {
  it("renders correctly", () => {
    const wrapper = reactTestRenderer.create(<ErrorPage />);

    expect(wrapper).toMatchSnapshot();
  });
});
