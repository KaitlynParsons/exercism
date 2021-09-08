/**
 * Checks if the year is a leap year or not
 * @param year value to check is a leap year
 * @returns {boolean}
 */
export const isLeapYear = (year: number): boolean => {
    let divisbleBy = (n: number): boolean => year % n == 0;
    // true if divisible by 4 and divisble by 400 but not 100
    return divisbleBy(4) && (! divisbleBy(100) || divisbleBy(400));
}