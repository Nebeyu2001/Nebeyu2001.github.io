"use strict";
let db = [
  { id: 1, fname: "John", lname: "Smith" },

  { id: 2, fname: "Lucy", lname: "Jark" },

  { id: 3, fname: "Edward", lname: "Capton" },
];

class Student {
  constructor(id, firstname, lastname) {
    this.id = id;

    this.fname = firstname;

    this.lname = lastname;
  }

  save() {
    console.log(this);
    const stu = db.find((user) => user.id === this.id);
    if (stu) {
      throw new Error("student already exists with id" + this.id);
    } else {
      db.push(this);
    }
  }

  edit() {
    const stuIndex = db.findIndex((user) => user.id === this.id);
    if (stuIndex < 0) {
      throw new Error("student already exists with id" + this.id);
    }
    db[stuIndex] = this;
  }

  static getById(id) {
    return db.find((user) => user.id === id);
  }

  static getAll() {
    return db;
  }

  static deleteById(id) {
    const stuIndex = db.findIndex((user) => user.id === id);
    return db.splice(stuIndex, 1);
  }
}

new Student(4, "Tina", "Xing").save(); //save to db

new Student(4, "Miss", "Xing").edit(); //edit studentId with id=4

// Student.deleteById(4); //remove studentId=4 from db
// console.log(db);

// Student.getAll(); //return db;
console.log(Student.getAll());

Student.getById(1); //return {id:1, fname: 'John', lname: 'Smith'}
console.log(Student.getById(3));
