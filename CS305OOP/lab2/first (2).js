/* Write a function, computeSalesCommission that takes a Boolean argument for salaried and
number argument for salesAmount. It should return the sales commission based on following
rules. First make a defining table for the function.
• If the salesman is salaried then
• These is no commission for sales below $300
• 1% for sales between $300 and $500 (inclusive, and commission on the entire amount)
• 2% for sales above $500 (only for the portion above 500 plus the 1% commission on the
first 500)
• If the salesman is not salaried then
• no commission for sales below $300
• 2% for sales between $300 and $500 (inclusive, and commission on the entire amount)
• 3% for sales above $500 (only for the portion above 500 plus the 2% commission on the
first 500)

*/

/* 
Question 1. Sales commission. 

Input:             sales amount; 
Output:            sales commission. 
Processing Output: if salesman isSalaried compute, execute if sales amount is less than 300 compute no commission
                    if sales amount is greater than 300 and less than and equal to 500 comput sales amount * 0.01, 
                    otherwise,  compute 500 * 0.01 plus sales amount minus 500 times 0.02. 
                    if salesman is not salaried compute
                    -if sales amount is  less than 300 compute no commission -if sales amount is grater than
                    $300 and less than and equal $500  compute sales amount * 0.02.
                    -otherwise sales amount is above $500 compute sales amount * 0.03.

*/

let isSalaried = true;
function computeSalesCommission(isSalaried, salesAmount) {
    if (isSalaried) {
        if (salesAmount < 300) {
            return 0;
        } else if (salesAmount >= 300 && salesAmount <= 500) {
            return salesAmount * 0.01;
        } else
            return ((500 * 0.01) + ((salesAmount - 500) * 0.02));
    } else {
        if (salesAmount < 300) {
            return 0;
        } else if (salesAmount >= 300 && salesAmount <= 500) {
            return salesAmount * 0.02;
        } else {
            return ((500 * 0.02) + ((salesAmount - 500) * 0.03));
        }
    }
}

console.log("expect 0: ", computeSalesCommission(true, 200));
console.log("expect 0: ", computeSalesCommission(false, 200));
console.log("expect 3: ", computeSalesCommission(true, 300));
console.log("expect 6: ", computeSalesCommission(false, 300));
console.log("expect 65: ", computeSalesCommission(true, 3500));
console.log("expect 100: ", computeSalesCommission(false, 3500));

