/**
 * Jest testing file for Utility.js.
 * 
 * Run this with ./test.sh in the root of Flash Chord.
 */
const Utility = require('../js2/Utility');

describe("Utility", () => {
    // ----------------------------------------
    // Check that functions exist.
    // ----------------------------------------

    test("Functions are properly defined", () => {
        expect(typeof Utility.getRandomArrayValue).toBe("function");
    });

    // ----------------------------------------
    // Check that functions perform as expected.
    // ----------------------------------------

    test("getRandomArrayValue() works as expected", () => {
        const arr = [1,2,3,4,5];
        const rando1 = Utility.getRandomArrayValue(arr);
        const rando2 = Utility.getRandomArrayValue(arr);
        const rando3 = Utility.getRandomArrayValue(arr);

        expect(arr.includes(rando1)).toBeTruthy();
        expect(arr.includes(rando2)).toBeTruthy();
        expect(arr.includes(rando3)).toBeTruthy();
        expect(rando1 != rando2 != rando3).toBeTruthy();
        console.log("rando1: " + rando1);
        console.log("rando2: " + rando2);
        console.log("rando3: " + rando3);
    });
});
