import { render, screen } from "@testing-library/react";
import reactTestRenderer from "react-test-renderer";
import { LoadingProviderMock } from "utils/test-utils";
import PeopleList from "../PeopleList";

describe("People list", () => {
  it("should render correctly", () => {
    const wrapper = reactTestRenderer.create(
      <LoadingProviderMock>
        <PeopleList />
      </LoadingProviderMock>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
