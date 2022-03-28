"use strict";

/*

Make a defining table and then write a function that calculates down payment for a home loan based on
following rules. Your function should have a parameter for the cost and return the down payment
amount.
Cost of House Down Payment
$0 to less than 50K 5% of the cost
$50K to less than 100K $2500 + 10% of (cost - $50K)
$100K to less than 200K $7500 + 15% of (cost - $100K)
$200K and above $20000 + 10% of (cost - $200K)

*/

/*
Input:      cost of the house.
Output:     The house down payment. 
Processing: if the cost of the house is less than 50K execute (0.05 * cost). 
            esle if cost of the house is greater than or equal 50k and less than or equal to 100k execute (2500 + (0.1 * (cost - 50000))),
            else if cost of the house is greater than or equal 100k and less than or equal to 200k execute (7500 + ( 0.15 * (cost-100000)).
            otherwise execute (20000 + (0.1 * (cost -200000));
*/

function calcDownpayment(cost) {
    if (cost < 50000) {
        return cost * 0.05;
    } else if (cost >= 50000 && cost <= 100000) {
        return 2500 + (0.1 * (cost - 50000));
    } else if (cost >= 100000 && cost <= 200000) {
        let calCost1 = 7500 + (0.15 * (cost - 100000));
        return calCost1;
    } else {
        return 20000 + (0.1 * (cost - 200000));
    }
}
console.log("expect 2000: ", calcDownpayment(40000));
console.log("expect 2500: ", calcDownpayment(50000));
console.log("expect 7500: ", calcDownpayment(100000));
console.log("expect 25000: ", calcDownpayment(250000));