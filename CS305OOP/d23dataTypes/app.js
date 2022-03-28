"use strict";
/* eslint-disable */

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//   module.exports = { ucFirst, getMaxSubSum, truncate , camelize, checkSpam,extractCurrencyValue}; //add all of your function names here that you need for the node mocha tests



function ucFirst(str) {
  let firstLetter = str.slice(0, 1);
  firstLetter = firstLetter.toUpperCase();
  return firstLetter + str.slice(1);
}

function checkSpam(str) {

  return (str.includes("ViAgRA") || str.includes("xxxxx"));
}


function truncate(str, maxlength) {
  const ending = "…"
  if (str.length >= maxlength) {
    return str.slice(0, maxlength - 1) + ending;
  } else {
    return str.slice(0, maxlength + 1)
  }

}

function extractCurrencyValue(str) {
  const actualNumber = str.slice(1);
  const currency = Number(actualNumber);
  return currency;
}


/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 
 */
function getMaxSubSum(arr) {

  let maxSum = 0;
  for (let i = 0; i < arr.length; i++) {
    let sumStart = 0;
    for (let j = i; j < arr.length; j++) {
      sumStart += arr[j];
      maxSum = Math.max(maxSum, sumStart);
    }
  }
  return maxSum;
}





function camelize(str) {
  let words = str.split("-");

  let result = "";
  result = words[0];
  for (let i = 1; i < words.length; i++) {
    let word = words[i];
    let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    result += capitalizedWord;
  }

  return result;

}

