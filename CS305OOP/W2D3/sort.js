"use strict";

/**
 * @param{number} a is any number
 * @param{number} b is any numbrer
 * @return {array} sorting arrays 
 */




function compareNumeric(a, b) {
    if (a > b) return -1; // a comes before b;
    if (a == b) return 0;
    if (a < b) return 1;

}

/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */

function compareNumeric1(a, b) {
    if (a > b) return 1; // a comes after b;
    if (a == b) return 0;
    if (a < b) return -1;

}
let arr = [1, 15, 2];
arr.sort(compareNumeric);
console.log(arr);
arr.sort(compareNumeric1);
console.log(arr);