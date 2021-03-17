// ---------------------------------------------------------------------------
/**
 *  Title: Node Js Rest API for Book Management
 * Author: Pruthviraj
 * Description: This is REST api developed for perform CRUD operations on BOOK
 *              Database.
 */
// ---------------------------------------------------------------------------

// Setting up the server
// Import the required package

const express = require("express");
const bodyParser = require("body-parser");

// define the PORT
const PORT = process.env.PORT || 8080;

// create the express app

const app = express();

// create the routes

const routes = express.Router();

// configure the body parser

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// configure the Database here

const dbConfig = require("./app/config/development.config");
const mongoose = require("mongoose");
const prependListener = require("./app/model/books.model");

mongoose.Promise = global.Promise;

// connecting to the database here

mongoose
  .connect(dbConfig.dbUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("-----*******----------************");
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.error("Could not able to connect the database, Exiting now...");
    process.exit();
  });

// create sample get request

routes.get("/", (req, res) => {
  res.status(200).send({
    message: "Successfully connected to the express app server!!!",
  });
});

// register the our simple routes
app.use(routes);

// Listen for request

app.listen(PORT, () => {
  console.log("-------------------------------------------------");
  console.log("yess!!! server is running successfully on port" + PORT);
});
