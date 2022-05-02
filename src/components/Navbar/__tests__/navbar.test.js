import React from "react";
import renderer from "react-test-renderer";
import Navbar from "../Navbar";

describe("Navbar", () => {
  it("should render correctly", () => {
    const wrapper = renderer.create(<Navbar />);
    expect(wrapper).toMatchSnapshot();
  });
});
