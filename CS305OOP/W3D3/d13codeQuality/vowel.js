"use strict";
/* global assert isVowel*/
/* isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. */

//const assert = require("assert");

// eslint-disable-next-line require-jsdoc
function isVowel(letter) {
    if (letter === "a" || letter === "e" || letter === "i" ||
        letter === "o" || letter === "u") {
        return true;
    } else {
        return false;
    }
}

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

