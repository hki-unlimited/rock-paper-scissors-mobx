/** Generates a random integer between min and max */
export function generateRandomInteger(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}