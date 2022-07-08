import React from "react";
import { shallow } from "enzyme";
import MainPage from "./MainPage";

let wrapper;

beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: "",
    isPending: false,
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

it("renders main page", () => {
  expect(wrapper).toMatchSnapshot();
});

it('filters robots correctly', () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 3,
      name: 'john',
      email: 'john@gmail.com'
    }],
    searchField: "john",
    isPending: false,
  };
  wrapper = shallow(<MainPage {...mockProps2} />);
  expect((wrapper.instance()).filteredRobots()).toEqual([{
    id: 3,
    name: 'john',
    email: 'john@gmail.com'
  }]);
});