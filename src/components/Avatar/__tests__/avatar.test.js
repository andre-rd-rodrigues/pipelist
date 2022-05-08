import { render, screen } from "@testing-library/react";
import { LoadingProviderMock } from "mocks/LoadingProviderMock";
import reactTestRenderer from "react-test-renderer";
import Avatar from "../Avatar";

describe("Avatar", () => {
  it("should render correctly", () => {
    const wrapper = reactTestRenderer.create(
      <LoadingProviderMock>
        <Avatar />
      </LoadingProviderMock>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("should render upload picture component when given a profileId", () => {
    render(
      <LoadingProviderMock>
        <Avatar profileId={1} />
      </LoadingProviderMock>
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
