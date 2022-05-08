import { render, screen, waitFor } from "@testing-library/react";
import { LoadingProviderMock } from "mocks/LoadingProviderMock";
import App from "../App";

describe("App", () => {
  beforeAll(() => {
    console.error = jest.fn();
  });
  it("renders the title", () => {
    render(
      <LoadingProviderMock>
        <App />
      </LoadingProviderMock>
    );
    expect(screen.getByText(/People's List/)).toBeInTheDocument();
  });

  it("renders initial loading spinner", () => {
    render(
      <LoadingProviderMock>
        <App />
      </LoadingProviderMock>
    );
    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  it("removes loading spinner seconds after", async () => {
    render(
      <LoadingProviderMock>
        <App />
      </LoadingProviderMock>
    );
    await waitFor(() => {
      expect(screen.queryByTestId("loader")).toBeFalsy();
    });
  });
});
