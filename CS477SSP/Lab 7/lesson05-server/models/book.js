"use strict";

const mongoose = require("mongoose");

const { Schema } = mongoose;

const bookSchema = new Schema({
  title: String,
  ISBN: Number,
  publishedDate: String,
  author: String,
});

bookSchema.methods.saveChekingISBN = function () {
  if (this.ISBN.length < 2) {
    throw new Error("ISBN must be greater than 2");
  } else {
    return this.save();
  }
};

// bookSchema.statics.filterByPrice = function (ISBN) {
//   return this.find().where("ISBN").gt(ISBN);
// };

// model name will be used to turn into collection name
const Model = mongoose.model("book", bookSchema);

module.exports = Model;
