"use strict";

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

arr.even = function () {
  let arrEven = [];
  if (this.forEach((item) => item % 2 === 0)) arrEven.push(item);
  return arrEven;
}

  (1, 2, 3, 4, 5, 6, 7, 8)
].even();
// [2,4,6,8]
// [1, 2, 3, 4, 5, 6, 7, 8].odd(); // [1,3,5,7]
//Test your code in Node.JS CLI
