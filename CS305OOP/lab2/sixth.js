"use strict";

/*
  Write a function that takes x and y co-ordinates of two points as inputs and returns the distance
between these two points based on the formula, d = √( x 2 − x 1 ) 2 + ( y 2 − y 1 ) 2


*/

/*
Question 6. The distance between two points. 
*/

/**
 * 
 * @param {number} x1 
 * @param {number} y1 
 * @param {number} x2 
 * @param {number} y2 
 * @returns 
 */
function calcDistance(x1, y1, x2, y2) {
  let number = ((x2 - x1) ** 2) + ((y2 - y1) ** 2);
  return Math.sqrt(number);
}
console.log("expect 7.07: ", calcDistance(0, 0, 5, 5));