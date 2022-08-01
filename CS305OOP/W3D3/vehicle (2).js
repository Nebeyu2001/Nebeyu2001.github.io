"use strict";

// using constuctor
let vehicle = {
    transports: true
};

function Auto(brand) {

    this.brand = brand;
}

Auto.prototype = vehicle;

let honda = new Auto("Honda");

console.log(honda.transports);

// using object literal 
...Auto.......