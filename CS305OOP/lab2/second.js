"use strict";

/*
Make a defining table and function that will return the balance of a savings account that
compounds interest monthly. Parameters for the function will be:
• initial amount
• annual interest rate
• number of years to compound

*/

/*
Input :     initial amount, annual interest rate, number of years to compund 
Processing: multiply the inital amount,anual interest, and years to compund and divided by 12 months. 
Output:     monthly compound interest
*/
function compoundInterest(deposit, rate, years) {
    const monthlyRate = (rate / 12) / 100;
    const numPayments = years * 12;
    let balance = deposit;

    for (let i = 1; i <= numPayments; i++) {
        balance = balance + (balance * monthlyRate);
        //        debugger;
    }
    return balance;
}

console.log("expect 110.47", compoundInterest(100, 10, 1));
console.log("expect 16470.09", compoundInterest(10000, 5, 10));

