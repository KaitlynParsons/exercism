import { resistorColour } from './resistorColour';

test('Check the resistance band colour by numeric value', () => {
    expect(resistorColour(0)).toBe('Black');
    expect(resistorColour(7)).toBe('Violet');
});