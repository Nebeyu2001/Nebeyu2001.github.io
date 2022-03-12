"use strict";

// 

const person = {

    name: "neb",
    sayMyName: function () {
        console.log(`my name is ${this.name}`);
    },
}

// person.sayMyName();

function sayMyName() {
    console.log(`my name is ${this.name}`);
}

//sayMyName.call(person);

function Person(name) {
    this.name = name;
}

const p1 = new Person("Batman");

console.log(p1.name);