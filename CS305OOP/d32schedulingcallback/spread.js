"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//module.exports = {copyArray, concat, findMin, combineObjs }; //add all of your function names here that you need for the node mocha tests


function copyArray(arr) {
    return [...arr]
}

function concat(arr1, arr2) {
    let result = [...arr1, ...arr2]
    return result;

}
function findMin(...numbers) {
    return numbers.reduce((min, current) => Math.min(min, current))
}
function combineObjs(obj1, obj2) {
    let result = { ...obj1, ...obj2 }
    return result;
}

//* Question 2
// Write code to illustrate the use of the rest operator
// a. In a destructuring assignment
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// b. In a function call
let str = "Taye"
console.log([...str])