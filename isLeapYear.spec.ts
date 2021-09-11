import { isLeapYear } from './isLeapYear';

test('Check if a given year is a leap year', () => {
  expect(isLeapYear(2021)).toBe(false);
  expect(isLeapYear(2020)).toBe(true);
  expect(isLeapYear(2000)).toBe(true);
});