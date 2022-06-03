/**
 * Utility class provides handy functions that don't belong to any other class.
 * 
 * Tested via /tests/Utility.test.js.
 */
module.exports = class Utility {
    /**
     * Returns a randomly selected value from an array.
     * 
     * @param {array} $array 
     * @returns 
     */
    static getRandomArrayValue($array) {
        return $array[Math.floor(Math.random() * $array.length)];
    }
}
