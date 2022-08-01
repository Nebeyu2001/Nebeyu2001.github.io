"use strict";
// let books = [
//   {
//     id: 1,
//     title: "The monk who sold his Ferrari",
//     ISBN: 101,
//     publishedDate: "2008-03-05",
//     author: "Robin S.Sharma",
//   },
//   {
//     id: 2,
//     title: "Man's search for meaning",
//     ISBN: 102,
//     publishedDate: "2012-03-05",
//     author: "Vicktor Frankle",
//   },
//   {
//     id: 3,
//     title: "The obstacle is the way",
//     ISBN: 103,
//     publishedDate: "2016-03-05",
//     author: "Ryan Holiday",
//   },
//   {
//     id: 4,
//     title: "Eat,Pray,Love",
//     ISBN: 104,
//     publishedDate: "2013-03-05",
//     author: "Elizabeth Gilbert",
//   },
//   {
//     id: 5,
//     title: "Tools of Titans",
//     ISBN: 105,
//     publishedDate: "2015-03-05",
//     author: "Tim Feriss",
//   },
// ];

// let counter = 6;

const { getDB } = require("../util/database");

module.exports = class Book {
  constructor(id, title, ISBN, publishedDate, author) {
    this.id = id;
    this.title = title;
    this.ISBN = ISBN;
    this.publishedDate = publishedDate;
    this.author = author;
  }

  static getAll() {
    return books;
  }

  static getById(id) {
    const bookIndex = books.findIndex((book) => book.id == id);

    if (bookIndex < -1) {
      throw new Error(`No book found with ID:${id}`);
    } else {
      return books[bookIndex];
    }
  }

  save() {
    this.id = counter++;
    books.push(this);
    return this;
  }

  update() {
    const index = books.findIndex((book) => book.id == this.id);

    if (index < -1) {
      throw new Error(`No book Found with Id:${id}`);
    } else {
      books[index] = this;
      return this;
    }
  }

  static deleteById(id) {
    const index = books.findIndex((book) => book.id == id);
    if (index < -1) {
      throw new Error(`No book Found with Id:${id}`);
    } else {
      let temp = books[index];
      books.splice(index, 1);
      return temp;
    }
  }
};
