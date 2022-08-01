"use strict";
const Book = require("../models/book");

exports.getAll = async (req, res, next) => {
  res.json(await Book.getAll());
};

exports.getById = async (req, res, next) => {
  res.json(await Book.getById(req.params.id));
};

exports.save = async (req, res, next) => {
  let newBook = new Book(
    null,
    req.body.title,
    req.body.ISBN,
    req.body.publishedDate,
    req.body.author
  );
  const result = await newBook.save();
  newBook._id = result.insertedId;
  res.json(newBook);
};

exports.update = async (req, res) => {
  let updatedBook = new Book(
    req.params.id,
    req.body.title,
    req.body.ISBN,
    req.body.publishedDate,
    req.body.author
  );
  await updatedBook.update();
  res.json(updatedBook);
};

exports.deleteById = async (req, res) => {
  await Book.deleteById(req.params.id);
  res.json({ _id: req.params.id });
};
