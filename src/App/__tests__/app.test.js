import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved
} from "@testing-library/react";
import { LoadingProvider } from "context/loading-context";
import reactTestRenderer from "react-test-renderer";
import App from "../App";

let providerProps = {
  loading: false,
  setLoading: jest.fn()
};

const MockProvider = ({ children }) => (
  <LoadingProvider value={providerProps}>{children}</LoadingProvider>
);

describe("App", () => {
  // it("renders correctly", () => {
  //   const wrapper = reactTestRenderer.create(
  //     <MockProvider>
  //       <App />
  //     </MockProvider>
  //   );
  //   expect(wrapper).toMatchSnapshot();
  // });

  it("renders the title", () => {
    render(
      <MockProvider>
        <App />
      </MockProvider>
    );
    expect(screen.getByText(/People's List/)).toBeInTheDocument();
  });

  it("renders initial loading spinner", () => {
    render(
      <MockProvider>
        <App />
      </MockProvider>
    );
    expect(screen.getByTestId("sync_loader")).toBeInTheDocument();
  });

  it("removes loading spinner seconds after", async () => {
    render(
      <MockProvider>
        <App />
      </MockProvider>
    );
    await waitFor(() => {
      expect(screen.queryByTestId("sync_loader")).toBeFalsy();
    });
  });
});
