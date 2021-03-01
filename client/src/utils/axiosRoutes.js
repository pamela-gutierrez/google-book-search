import axios from "axios";

// exporting a full object 
export default {
  // Gets all books
  // these are keys and values 
  getBooks: function () {
    return axios.get("/api/book");
  },
  // Gets the book with the given id
  // getBook: function (id) {
  //   return axios.get("/api/Books/" + id);
  // },
  // Deletes the Book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/book/" + id);
  },
  // Saves a Book to the database
  saveBook: function (bookData) {
    console.log("savebook")
    return axios.post("/api/book", bookData);
  }
};
