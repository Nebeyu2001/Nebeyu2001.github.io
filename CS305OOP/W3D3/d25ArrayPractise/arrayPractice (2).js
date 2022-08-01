"use strict"
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { doubleNums, doubleAges, filterEven, filterOver10, findEvenNum, findEvenAge, sumOfNumbers, averageOfNumbers, maxOfNumbers, maxForAges, averageOfEvenAge, averageOfOddAge }; //add all of your function names here that you need for the node mocha tests


function doubleNums(arr) {

    return arr.map(num => num * 2);
}

function doubleAges(arr) {

    return arr.map(item => ({
        name: item.name,
        age: item.age * 2
    }))

}

function filterEven(arr) {
    return arr.filter(item => item % 2 === 0);

}

function filterOver10(arr) {
    return arr.filter(item => item.age > 10);


}

function findEvenNum(arr) {
    return arr.find(number => number % 2 == 0);

}

function findEvenAge(arr) {
    return arr.find(people => people.age % 2 === 0);

}

function includesEvenNum(arr) {
    let num = arr.find(item => item % 2 === 0);
    return arr.includes(num);

}

function includesEvenAge(arr) {
    let people = arr.find(item => item.age % 2 === 0);
    if (people.age !== undefined) {
        return true;
    } else {
        return false;
    }


}

//let arr = [1, 2, 3, 4, 5];

function sumOfNumbers(arr) {
    return arr.reduce(function (sum, current) { return sum + current; }, 0);
}

function averageOfNumbers(arr) {

    return (arr.reduce(function (sum, current) { return sum + current; }, 0) / arr.length);
}

function maxOfNumbers(arr) {

    return arr.reduce((max, current) => Math.max(max, current), 0);
}

function maxForAges(arr) {

    return arr.reduce((max, current) => Math.max(max, current.age), 0);
}

function averageOfEvenAge(arr) {
    return arr.map(element => element.age).filter(element => element % 2 == 0).reduce((sum, current) => sum + current, 0) / arr.map(element => element.age).filter(element => element % 2 == 0).length;
}

function averageOfOddAge(arr) {

    return arr.map(element => element.age).filter(element => element % 2 !== 0).reduce((sum, current) => sum + current, 0) / arr.map(element => element.age).filter(element => element % 2 !== 0).length;
}
