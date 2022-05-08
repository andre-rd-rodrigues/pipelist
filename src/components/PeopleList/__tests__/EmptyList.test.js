import reactTestRenderer from "react-test-renderer";
import EmptyList from "../EmptyList";

describe("Empty list", () => {
  it("should render correctly", () => {
    const wrapper = reactTestRenderer.create(<EmptyList />);

    expect(wrapper).toMatchSnapshot();
  });
});
