import "jest";
import { sum } from "..";

it("should return sum of 2 numbers", () => {
  expect(sum(1, 2)).toBe(3);
});
