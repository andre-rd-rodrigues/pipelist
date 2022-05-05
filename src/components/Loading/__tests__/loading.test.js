const { render, screen } = require("@testing-library/react");
const reactTestRenderer = require("react-test-renderer");
const { default: Loading } = require("../Loading");

describe("Loader", () => {
  let props;

  props = {
    color: "rgb(54, 215, 183)",
    loading: false,
    size: 20,
    type: "SyncLoader"
  };

  it("should render correctly", () => {
    const wrapper = reactTestRenderer.create(
      <Loading {...props} loading={true} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("should show loader when loading is true", () => {
    render(<Loading {...props} loading={true} />);

    expect(screen.getByTestId("sync_loader")).toBeInTheDocument();
  });

  it("should show proper spinner according to prop trype", () => {
    render(<Loading {...props} loading={true} />);

    expect(screen.getByTestId("sync_loader")).toBeInTheDocument();
  });
});
