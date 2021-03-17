//  define controller

const BookClass = require("../model/books.model");

// create and save the book

exports.create = (req, res) => {
  // validate the request
  if (!req.body.content) {
    return res.status(400).send({
      error:
        "Book can not be empty, please enter the all required data to create the book!",
    });
  }
  // create book
  const book = new BookClass({});
};
