import React from "react";
import { shallow } from "enzyme";
import Card from "./Card";


it("expect to render card component", () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});
