/**
 * {@link https://exercism.org/tracks/typescript/exercises/resistor-color}
 */
const colours = {
    0: 'Black',
    1: 'Brown',
    2: 'Red',
    3: 'Orange',
    4: 'Yellow',
    5: 'Green',
    6: 'Blue',
    7: 'Violet',
    8: 'Grey',
    9: 'White'
};

/**
 * Looks up the resistor colour by numeric value
 * @param value value of the resistor band
 * @returns resistance colour
 */
 export const resistorColour = (value: number): string => {
    return colours[value];
}