"use strict";

function User(firstname, lastname, birthDate) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthDate = birthDate;
}

User.prototype.getFullName = getFullName;
User.prototype.getAge = getAge;

let user1 = new User('John', 'Smith', new Date('2000-10-01'));
let user2 = new User('Edward', 'Hopkins', new Date('1991-11-14'));



function getFullName() { return this.firstname + ' ' + this.lastname; }
function getAge() { return new Date().getFullYear() - this.birthDate.getFullYear(); }

console.log(user1.getFullName()); //John Smith
console.log(user1.getAge());