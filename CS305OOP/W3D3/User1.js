"use strict"

class User {

    constructor(name) { this.name = name; }
    sayHi() { console.log(this.name); }

}



console.log(typeof User);

console.log(User === User.prototype.constructor);

console.log(User.prototype.sayHi);

console.log(Object.getOwnPropertyNames(User.prototype));

User(); // Error: class constructor user cannot be invoked without "new"
// rewriting class user in pure functions

// create constructor function

function User(name) {
    this.name = name;
}

// a functiion prototytpe has consturcor by default

User.prototype.sayHi = function () {
    console.log(this.name);
}


let user = new User("John");

user.sayHi();



