"use strict";

const arr = [1, 5, 16, 3, 108];

const evens = arr.filter(function (num) { if (num % 2 == 0) return true; });
console.log(evens);

const even = arr.findIndex(function (num) { if (num % 2 == 0) return true; });
console.log(even);