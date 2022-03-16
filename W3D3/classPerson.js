"use strict";

// // function Person(fName, lName) {
// //     this.firstName = fName;
// //     this.lastName = lName;
// // }


// Person.prototype.getFullName = function () {
//     return this.firstName + " " + this.lastName;
// };

// function SuperHero(fName, lName) {
//     // this ={}

//     Person.call(this, fName, lName)
//     this.isSuperHero = true;

// }

// SuperHero.prototype.fightCrime = function () {
//     console.log("Fighting crime");
// };


class Person {
    constructor(fName, lName) {
        this.firstName = fName;
        this.lastName = lName;
    }

    sayMyName() {

        return this.firstName + " " + this.lastName

    }


}

const classP1 = new Person("Bruce", "Wayene")
console.log(classP1.sayMyName())

class SuperHero extends Person {

    constructor(fName, lName) {
        super(fName, lName)
        this.isSuperHero = true;
    }

    fightCrime() {
        console.log("fighting crime")
    }
}

const batman = new SuperHero("Bruce", "Wayne")
console.log(batman.sayMyName())