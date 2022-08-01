"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser.
*/
// module.exports = { myMap, myFilter, myReduce }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {Array} arr any array.
 * @param {function} func to modify the elements of the array.
 * @returns {Array} array of modified elements.
 */
function myMap(arr, func) {
let result =[];
for(let i=0; i< arr.length; i++){
    let mapped = func(arr[i],i);
    result.push(mapped);
}
return result;

}

/**
 * 
 * @param {Array} arr any array.
 * @param {function} func to filter the elements that pass the condition.
 * @returns {Array} array of filtered elemets.
 */
function myFilter(arr, func) {
    let filtered = [];
    for(let i=0; i< arr.length; i++){
        if(func(arr[i],i)){
            filtered.push(arr[i]);
        }
    }
    return filtered;
}

/**
 * 
 * @param {array} arr any array.
 * @param {function} func  to modify each element and reduce it to one value.
 * @param {Number} initialValue the starting value.
 * @returns {number} the reduced value of the array.
 */
function myReduce(arr, func, initialValue) {
    let acc = initialValue; 
    for(let i = 0; i<arr.length; i++){
         acc = func(acc, arr[i],i );         
    }

    return acc ;
    }