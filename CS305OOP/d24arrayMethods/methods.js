"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { groupById, unique, filterRangeInPlace, filterRange, Calculator }; //add all of your function names here that you need for the node mocha tests



/**
 * 
 * @param {Array} arr array of numbers
 * @param {Number} a  a number must be less than b
 * @param {Number} b  a number must be greater than a
 * @returns {Array} returns an array with the flitered numbers
 */
function filterRange(arr, a, b) {
    // let filteredArr =[];
    // for(const number of arr){
    //     if(number >= a && number <= b){
    //         filteredArr.push(number);
    //     }
    // }
    // return filteredArr;
    return arr.filter(function (item) { return (item >= a && item <= b); });
}

/**
 * 
 * @param {Array} arr array of numbers
 * @param {Number} a  a number must be less than b
 * @param {Number} b  a number must be greater than a
 * @returns{} 
 */
function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            i--;
        }
    }

}

/**
 * 
 */
function Calculator() {
    this.calculations = {
        ["-"]: (num1, num2) => num1 - num2,
        ["+"]: (num1, num2) => num1 + num2,
    };

    this.calculate = function (str) {
        let splitted = str.split(" ");
        let num1 = +splitted[0];
        let operator = splitted[1];
        let num2 = +splitted[2];
        if (!this.calculations[operator]) {
            return NaN;
        }
        return this.calculations[operator](num1, num2);
    };

    this.addMethod = function (prop, func) {
        this.calculations[prop] = func;

    };
}



/**
 * 
 * @param {Array} arr an array with unique items;
 * @returns {Array} new array with only the new elements
 */
function unique(arr) {

    let uniqueArr = arr.filter((item, index, itself) => {

        return itself.indexOf(item) === index;
    });

    return uniqueArr;

}


function groupById(array) {

    return array.reduce((user, currentUser) => {
        user[currentUser.id] = currentUser;
        return user;

    }, {});


}