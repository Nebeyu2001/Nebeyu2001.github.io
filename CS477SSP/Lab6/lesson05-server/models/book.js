"use strict";

const { getDB } = require("../util/database");
const { ObjectId } = require("mongodb");

module.exports = class Book {
  constructor(id, title, ISBN, publishedDate, author) {
    this.id = id;
    this.title = title;
    this.ISBN = ISBN;
    this.publishedDate = publishedDate;
    this.author = author;
  }

  static getAll() {
    return getDB().collection("book").find().toArray();
  }

  static getById(id) {
    return getDB()
      .collection("book")
      .findOne({ _id: new ObjectId(id) });
  }

  save() {
    return getDB().collection("book").insertOne(this);
  }

  update() {
    const self = Object.assign({}, this);
    delete self._id;

    return getDB()
      .collection("book")
      .updateOne({ _id: new ObjectId(this._id) }, { $set: self });
  }

  static deleteById(id) {
    return getDB()
      .collection("books")
      .deleteOne({ _id: new ObjectId(id) });
  }
};
