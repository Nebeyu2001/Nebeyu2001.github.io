
"use strict";


let animal = {
    eats: true,
    walk() {
        if (!this.isSleeping)
            console.log("Animal walk");
    },

    sleep() {
        this.isSleeping = true;
    }
};
let rabbit = {
    jumps: true

};



let longEar = {
    earLength: 10,
    __proto__: rabbit
};

rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal
// rabbit.setPrototypeof(animal);

// 
rabbit.sleep();
animal.sleep();




// console.log(rabbit.eats);
// console.log(rabbit.jumps);
// rabbit.walk();
// console.log(longEar.jumps);
//longEar.walk();
console.log(rabbit.isSleeping);
console.log(animal.isSleeping);
console.log(Object.keys(rabbit));

//for (let prop in longEar) console.log(prop);

for (let prop in rabbit) {

    let isOwn = rabbit.hasOwnProperty(prop);

    if (isOwn) {
        console.log("own:" + prop);
    } else {
        console.log(" inherited:" + prop);
    }
}