"use strict";
const Book = require("../models/book");

exports.getAll = (req, res, next) => {
  res.json(Book.getAll());
};

exports.getById = (req, res, next) => {
  res.json(Book.getById(req.params.id));
};

exports.save = (req, res, next) => {
  let newBook = new Book(
    null,
    req.body.title,
    req.body.ISBN,
    req.body.publishedDate,
    req.body.author
  ).save();
  res.json(newBook);
};

exports.update = (req, res) => {
  let updatedBook = new Book(
    req.params.id,
    req.body.title,
    req.body.ISBN,
    req.body.publishedDate,
    req.body.author
  ).update();
  res.json(updatedBook);
};

exports.delete = (req, res) => {
  res.json(Book.deleteById(req.params.id));
};
