"use strict";


function multiplyEvens(...args) {

    let prod = 1;

    for (const argu of arguments) {

        if (arg % 2 === 0) {
            prod = prod * arg;
        }
    }


    return prod;

}

