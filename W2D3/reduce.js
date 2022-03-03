"use strict";

let arr = [1, 2, 3, 4, 5];
let result = arr.reduce(function (sum, current) { return sum + current; }, 0);
//let result2 = arr.reduce((sum, current) => sum + current, 0);
console.log(result); // 15
//console.log(result2); // 15

let result1 = arr.reduce(function (product, current) { return product * current; }, 1);

let max = arr.reduce(function (max, current) { return Math.max(max, current); }, -100);
console.log(max);
