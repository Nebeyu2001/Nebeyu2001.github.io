"use strict";

Array.prototype.even = function () {
  let arrEven = [];
  for (const item of this) {
    if (item % 2 === 0) arrEven.push(item);
  }

  return arrEven;
};

Array.prototype.odd = function () {
  let arrOdd = [];
  for (const item of this) {
    if (item % 2 === 1) arrOdd.push(item);
  }
  return arrOdd;
};

console.log([1, 2, 3, 4, 5, 6, 7, 8].even());
console.log([1, 2, 3, 4, 5, 6, 7, 8].odd());
// [1,3,5,7]
//Test your code in Node.JS CLI
