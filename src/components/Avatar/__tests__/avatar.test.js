import { render, screen } from "@testing-library/react";
import { LoadingProvider } from "context/loading-context";
import reactTestRenderer from "react-test-renderer";
import Avatar from "../Avatar";

let providerProps = {
  loading: false,
  setLoading: jest.fn()
};

const MockProvider = ({ children }) => (
  <LoadingProvider value={providerProps}>{children}</LoadingProvider>
);

describe("Avatar", () => {
  it("renders correctly", () => {
    const wrapper = reactTestRenderer.create(
      <MockProvider>
        <Avatar />
      </MockProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("renders upload component from profileId", () => {
    render(
      <MockProvider>
        <Avatar profileId={1} />
      </MockProvider>
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
