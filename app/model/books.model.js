//  create book model schema

const e = require("express");
const mongoose = require("mongoose");

// create Author Schema

const AuthorScheme = mongoose.Schema({
  authorName: { type: String, require: true },
  authorEmail: { type: String, require: true },
  authorCity: { type: String, require: true },
});
//  create Book Schema

const BookSchema = mongoose.Schema({
  bookTitle: { type: String, require: true },
  bookAuthor: { type: String, require: true },
  bookPublication: { type: String, require: true },
  bookPages: { type: Number, require: true },
  AuthorScheme: [AuthorScheme],
});

const BookClass = mongoose.model("BookSchema", BookSchema);
module.exports = BookClass;
