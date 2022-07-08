import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants";
import each from "jest-each";
import * as reducers from "./reducers";

describe("searchRobots", () => {
  const initialStateSearch = {
    searchField: "",
  };

  it("should return initial state", () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: "" });
  });

  it("should handle CHANGE_SEARCHFIELD", () => {
    expect(
      reducers.searchRobots(initialStateSearch, {
        type: CHANGE_SEARCHFIELD,
        payload: "test",
      })
    ).toEqual({ searchField: "test" });
  });
});

describe("requestRobots", () => {
  const initialStateRobots = {
    robots: [],
    isPending: true,
  };

  it("should return initial state robotos", () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
  });

  each([
    [
      { type: REQUEST_ROBOTS_PENDING, payload: ["test"] },
      { robots: [], isPending: true },
    ],
    [
      { type: REQUEST_ROBOTS_SUCCESS, payload: ["test"] },
      { robots: ["test"], isPending: false },
    ],
    [
      { type: REQUEST_ROBOTS_FAILED, payload: "error" },
      { robots: [], isPending: true, error: "error" },
    ],
  ]).it("should handle $action", (action, expected) => {
    expect(reducers.requestRobots(initialStateRobots, action)).toEqual(
      expected
    );
  });
});
