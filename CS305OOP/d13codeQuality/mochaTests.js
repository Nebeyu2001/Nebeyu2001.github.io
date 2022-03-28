"use strict";

//const assert = require("assert");
// const { calcDistance } = require("./mochaFunctions.js");
//const functionModules = require("./mochaFunctions.js");

// const isVowel = functionModules.isVowel;
// const compoundInterest = functionModules.compoundInterest;
// const computeSalesCommission = functionModules.computeSalesCommission;
// const sumDigit = functionModules.sumDigit;
// const multiDigit = functionModules.multiDigit;
// const calcDistance = functionModules.calcDistance;


// unit test for sum digit

describe("sum the numbers in a digit", function () {
    it("sum 123 and get 6 ", function () {
        assert.strictEqual(sumDigit(123), 6);
    });
    it("sum 102 and get 3 ", function () {
        assert.strictEqual(sumDigit(102), 3);
    });
});


// unit test for the product of digit

describe("multiply the numbers in a  digit", function () {
    it("multipy 1234 and get 24 ", function () {
        assert.strictEqual(multiDigit(123), 6);
    });
    it("multipy 102 and get 0", function () {
        assert.strictEqual(multiDigit(102), 0);
    });
});


// unit test for calculating the distance

describe("calculate distance with x,y coordinates", function () {
    it("x,y coordinates  7.07", function () {
        assert.equal(calcDistance(0, 0, 5, 5), 7.0710678118654755);
    });
});

// unit test for compound interest
describe("tests the compunded interest", function () {
    it(" compounded interest 110.47", function () {
        assert.equal(compoundInterest(100, 10, 1), 110.47130674412968);
    });
    it("compounded interest 16470.09", function () {
        assert.equal(compoundInterest(10000, 5, 10), 16470.0949769028);
    });
});

// unit test for compute commission
describe("test of ComputSalesCommission", function () {
    it("tests salaried and 200 sales", function () {
        assert.equal(computeSalesCommission(true, 200), 0);
    });
    it("tests not salaried and 200 sales", function () {
        assert.equal(computeSalesCommission(false, 200), 0);
    });
    it("tests salaried and 300 sales", function () {
        assert.equal(computeSalesCommission(true, 300), 3);
    });
    it("tests not salaried and 300 sales", function () {
        assert.equal(computeSalesCommission(false, 300), 6);
    });
    it("tests salaried and 3500 sales", function () {
        assert.equal(computeSalesCommission(true, 3500), 65);
    });
    it("tests not salaried and 3500 sales", function () {
        assert.equal(computeSalesCommission(false, 3500), 100);
    });
});

// unit test for isVowels
describe("isVowel", function () {
    it("a is vowel", function () {
        assert.equal(isVowel("a"), true);
    });
    it("e is vowel", function () {
        assert.equal(isVowel("e"), true);
    });
    it("i is vowel", function () {
        assert.equal(isVowel("i"), true);
    });
    it("o is vowel", function () {
        assert.equal(isVowel("o"), true);
    });
    it("u is vowel", function () {
        assert.equal(isVowel("u"), true);
    });
    it("z is not vowel", function () {
        assert.equal(isVowel("z"), false);
    });
    it("5 is not vowel", function () {
        assert.equal(isVowel("5"), false);
    });
});

