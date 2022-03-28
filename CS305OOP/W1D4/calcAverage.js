"use strict"
/*
 * Write code to create an array named scores and fill it with 5 test scores 10, 
20, 30, 40 and 50.
• Now write a function named findAverage, that takes an array as an 
argument and return average of the array values.
• Call findAverage function passing array you created in step1 and save the 
return result in a variable, average.
• Print the average, it should be 30 for this example. 
• Create a second array filled with 10 random values between 0 to 10 and 
find the average of the array values.
• Should compute correct average for an array of any size



/**
 * 
 * @param {array} array 
 * @returns {number}
 */

function findAverage(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }

    const average = sum / array.length;

    return average;
}



let scores = [10, 20, 30, 40, 50]
console.log(findAverage(scores))

const value = []

for (let i = 0; i < 10; i++) {

    value[i] = Math.ceil(Math.random() * 10)
}

console.log(findAverage(value));