"use strict";

/* Write functions sumDigits and multDigits that take an integer parameter and return the sum or
product of the digits in the number. Use the / and % operators to find the digits
*/

/**
 * 
 * @param {Number} value is an integer
 * @returns {Number} sum of each digit in the number
 */
let sum = 0;
let product = 1;
function sumDigits(value) {
    while (value) {
        let digit = value % 10;
        sum += digit
        value = (value - digit) / 10;
    }
    return sum;

}
console.log(sumDigits(456));

/**
 * 
 * @param {Number} value is an integer
 * @returns {Number} product of each digit in the number
 */


function multDigits(value) {

    while (value) {
        let digit = value % 10;
        product *= digit
        value = (value - digit) / 10;
    }
    return product;
}
console.log(multDigits(235))