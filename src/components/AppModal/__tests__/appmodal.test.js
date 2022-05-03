import { mount } from "enzyme";
import EnzymeToJson from "enzyme-to-json";
import AppModal from "../AppModal";

describe("App Modal", () => {
  let props;

  props = {
    show: true,
    onHide: jest.fn(),
    type: "default"
  };

  it("should render correctly", () => {
    const wrapper = mount(<AppModal {...props} />);

    expect(EnzymeToJson(wrapper)).toMatchSnapshot();
  });

  it("should render correct modal type according to prop", () => {
    const wrapper = mount(<AppModal {...props} type="checkout_success" />);

    expect(EnzymeToJson(wrapper)).toMatchSnapshot();
  });
});
