/**
 * Checks if the year is a leap year or not
 * @param year value to check is a leap year
 * @returns {boolean}
 */
export const isLeapYear = (year: number): boolean => {
    // Check given number (4, 100, 400) is divisible by given year
    let divisbleBy = (n: number): boolean => year % n == 0;
    
    return divisbleBy(4) && (! divisbleBy(100) || divisbleBy(400));
}