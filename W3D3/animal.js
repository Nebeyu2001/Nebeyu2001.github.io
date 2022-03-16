"use strict";


let animal = {

    eats: true

};

function Dog(name) {
    this.name = name
}

let snoppy = new Dog("Snoopy");
//Dog.prototype = animal;

snoppy.__proto__ = animal;

console.log(snoppy.eats);
//console.log(rabbit.jumps);

// function makeCounter() {
//     let count = 0;
//     return function (count) {
//         if (count > 3) {
//             return { 'warning: increament was by value greater than${count}'}
//         }
//         return count++;
//     };
// }
