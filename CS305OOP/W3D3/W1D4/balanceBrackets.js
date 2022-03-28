"use strict";


/*Given an expression array exp, write a program to examine whether the pairs and the of “{“, “}” 
are balanced in exp. 
- Use a for .. of loop through the expression array
- push any right bracket onto a stack
- on a left bracket pop the stack and check that return value is a right bracket
- if not, then not balanced
- if stack empty at end then balanced, else not balanced
Example: 
Input: exp = [ "{", "}", "{", "{", "}", "}“ ] 
Output: Balanced 
Input: exp = [ "{", "{", "}", "{" ] 
Output: Not Balanced

*/
/**
 * 
 * @param {array} arr 
 * @returns {boolean}
 */




function isBalanced(arr) {
    const stack = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[0] === "}") {
            return false;
        } else if (arr[i] === "{") {
            stack.push("{");
        } else if (arr[i] === "}") {
            stack.pop();
        }
    }
    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }
}

const bracket = ["{", "}", "{", "{", "}", "}"];
const bracket1 = ["{", "{", "}", "{"]

console.log(isBalanced(bracket));
console.log(isBalanced(bracket1));