"use strict";
const Book = require("../models/book");
const { ObjectId } = require("mongodb");

exports.getAll = async (req, res, next) => {
  res.json(await Book.find());
};

exports.getById = async (req, res, next) => {
  res.json(await Book.findById(req.params.id));
};

exports.save = async (req, res, next) => {
  //   let newBook = new Book(
  //     null,
  //     req.body.title,
  //     req.body.ISBN,
  //     req.body.publishedDate,
  //     req.body.author
  //   );
  //   const result = await newBook.save();
  //   newBook._id = result.insertedId;
  //   res.json(newBook);
  // };
  try {
    const result = await new Book(req.body).saveChekingISBN();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res) => {
  // let updatedBook = new Book(
  //   req.params.id,
  //   req.body.title,
  //   req.body.ISBN,
  //   req.body.publishedDate,
  //   req.body.author
  // );
  // await updatedBook.update();

  const result = await Book.updateOne(
    { _id: new ObjectId(req.params.id) },
    req.body
  );
  res.json(result);
};

exports.deleteById = async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ _id: req.params.id });
};
