"use strict";
//module.exports = { isVowel, computeSalesCommission, compoundInterest, calcDistance, sumDigit, multiDigit }

/**
 * 
 * @param {string} letter 
 * return true or false
 */
function isVowel(letter) {
    if (letter === "a" || letter === "e" || letter === "i" ||
        letter === "o" || letter === "u") {
        return true;
    } else {
        return false;
    }
}


/**
 * 
 * @param {boolean} isSalaried 
 * @param {number} salesAmnt 
 * retrun {number } commission
 */
function computeSalesCommission(isSalaried, salesAmnt) {
    let Commission = 0;
    if (isSalaried) {
        if (salesAmnt < 300) {
            Commission = 0;
        } else if (salesAmnt >= 300 && salesAmnt <= 500) {
            Commission = salesAmnt * 0.01;
        } else if (salesAmnt > 500) {
            Commission = ((salesAmnt - 500) * 0.02) + 5;
        }
    } else if (!isSalaried) {
        if (salesAmnt >= 300 && salesAmnt <= 500) {
            Commission = salesAmnt * 0.02;
        } else if (salesAmnt > 500) {
            Commission = ((salesAmnt - 500) * 0.03) + 10;
        }
    }

    return Commission;

}



/**
 * 
 * @param {number} initAmnt 
 * @param {number} interestRate 
 * @param {number} yearsSaved 
 */
function compoundInterest(initAmnt, interestRate, yearsSaved) {
    const MONTHS = 12;
    let totalPayment = initAmnt * (1 + (interestRate / 100) / MONTHS) ** (yearsSaved * MONTHS);
    return totalPayment;
}




/**
 * 
 * @param {number} cost 
 */
function calcDownpayment(cost) {
    let downPayment;
    if (cost >= 0 && cost <= 50000) {
        downPayment = cost * 0.05;
    } else if (cost > 50000 && cost <= 100000) {
        downPayment = 2500 + ((cost - 50000) * 0.10);
    } else if (cost < 100000 && cost > 200000) {
        downPayment = 7500 + ((cost - 100000) * 0.15);
    } else if (cost >= 200000) {
        downPayment = 5000 + ((cost - 200000) * 0.10);
    }
    return downPayment;
}



/**
 * 
 * @param {number} x1 
 * @param {number} y1 
 * @param {number} x2 
 * @param {number} y2 
 */
function calcDistance(x1, y1, x2, y2) {
    let xCor = Math.pow((x2 - x1), 2);
    let YCor = Math.pow((y2 - y1), 2);
    let distance = Math.sqrt((xCor + YCor));
    return distance;
}



/**
 * 
 * @param {number} num 
 * return the sum of digits
 */
function sumDigit(num) {
    let sum = 0;
    while (num) {
        sum += num % 10;

        num = Math.floor(num / 10);
    }
    return sum;
}


/**
 * 
 * @param {*number} num 
 * returns the product of digits
 */
function multiDigit(num) {
    let product = 1;
    while (num) {
        product *= num % 10;
        num = Math.floor(num / 10);
    }
    return product;
}

