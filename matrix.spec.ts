import { Matrix } from "./matrix";
const matrix = new Matrix("9 8 7\n5 3 2\n6 6 7");
const expectedRows = [
  [9, 8, 7],
  [5, 3, 2],
  [6, 6, 7],
];
const expectedColumns = [
  [9, 5, 6],
  [8, 3, 6],
  [7, 2, 7],
];
test("Check rows and columns of matrix", () => {
  expect(matrix.rows).toStrictEqual(expectedRows);
  expect(matrix.columns).toStrictEqual(expectedColumns);
});
