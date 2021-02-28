const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const savedBooksSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  body: String,
  date: { type: Date, default: Date.now },
  link: { type: String }
});

const savedBooks = mongoose.model("savedBooks", savedBooksSchema);

module.exports = savedBooks;


// Models
  // Skeleton of how we want the data to be presented.
// Controller
  // Gives it functionality
// API
  // Populates it with information
// Server
  // Executes it all.