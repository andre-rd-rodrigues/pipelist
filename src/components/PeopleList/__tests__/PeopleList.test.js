import { render, screen } from "@testing-library/react";
import { LoadingProvider } from "context/loading-context";
import reactTestRenderer from "react-test-renderer";
import PeopleList from "../PeopleList";

describe("People list", () => {
  let providerProps = {
    loading: false,
    setLoading: jest.fn()
  };

  const MockProvider = ({ children }) => (
    <LoadingProvider value={providerProps}>{children}</LoadingProvider>
  );

  it("renders correctly", () => {
    const wrapper = reactTestRenderer.create(
      <MockProvider>
        <PeopleList />
      </MockProvider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
