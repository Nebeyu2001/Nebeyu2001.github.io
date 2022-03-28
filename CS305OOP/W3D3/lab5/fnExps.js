"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/
// module.exports = {double, times100, myMap }; //add all of your function names here that you need for the node mocha tests

/**
 * @param {Number} num is an input
 *@returns {Number} double the input
 */
function double(num) {
    return num * 2;
}


/**
 * @param {number} num number input
 * @returns {number} 100 times the input
 */
function times100(num) {
    return 100 * num;
}


/**
 * @param {Array} arr array input
 * @param {function} fun is a function 
 * @returns {Array} creates a new array with function mapped to each element
 */
function myMap(arr, fun) {
    let newArr = [];
    for (let elements of arr) {
        let newValue = fun(elements);
        newArr.push(newValue);

    }
    return newArr;
}










