"use strict";

class Animal {

    constructor(name) {
        this.speed = 0;
        this.name = name;
    }

    run(speed) {

        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed}`);

    }

    stop() {
        this.speed = 0;
        console.log(`${this.name} stands still`);
    }

}

let animal = new Animal("My animal");


class Rabbit extends Animal {
    constructor(name, earLength) {
        super(name);
        this.earLength = earLength;
    }

    hide() {
        console.log(`${this.name} hides!`);
    }
}


let rabbit = new Rabbit("white Rabbit", 10);

// rabbit.run(5);
// rabbit.hide();

console.log(rabbit.name);
console.log(rabbit.earLength);

// function User(name) {
//     this.name = name;
// }

// User.prototype.sayHi = function () {
//     alert(this.name);
// };

// let user = new User("John");
// user.sayHi();

// class User {
//     constructor(name) {
//         this.name = name;
//     }

//     sayHi() {
//         alert(this.name);
//     }


// }
// let user = new User("John");
// user.sayHi();
