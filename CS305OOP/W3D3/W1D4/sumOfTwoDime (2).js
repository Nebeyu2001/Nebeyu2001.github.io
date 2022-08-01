"use stric";

/*Write a function that accepts a two-dimensional array of numbers and returns the 
sum of all the elements in the array.
*/

/**
 * 
 * @param {two dimensional array } multidimesnional array has tobe passed
 * @returns {Number} it returns sum of each element 
 */

function sumOfTwoDimesionalArrays(array) {

    let sum = 0;
    for (let i = 0; i < array.length; i++) {

        for (let j = 0; j < array[i].length; j++) {
            sum = sum + (array[i][j]);
        }
    }

    return sum;

}

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]

];

console.log(sumOfTwoDimesionalArrays(matrix));