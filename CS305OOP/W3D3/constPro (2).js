"use strict";

let animal = {
    eats: true
};

function Rabbit(name) {
    this.name = name;
}

//Rabbit.prototype = animal;
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

//Rabbit.prototype = {};
//Rabbit.prototype.eats = false;

//delete rabbit.eats;

delete Rabbit.prototype.eats;

console.log(rabbit.eats); // true