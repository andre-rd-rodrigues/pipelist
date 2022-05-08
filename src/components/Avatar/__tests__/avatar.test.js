import { render, screen } from "@testing-library/react";
import reactTestRenderer from "react-test-renderer";
import { LoadingProviderMock } from "utils/test-utils";
import Avatar from "../Avatar";

describe("Avatar", () => {
  it("renders correctly", () => {
    const wrapper = reactTestRenderer.create(
      <LoadingProviderMock>
        <Avatar />
      </LoadingProviderMock>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("renders upload component from profileId", () => {
    render(
      <LoadingProviderMock>
        <Avatar profileId={1} />
      </LoadingProviderMock>
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
