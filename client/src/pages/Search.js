// import axios from "axios";
import React, { useState } from "react";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import API from "../utils/API.js";
import axiosRoutes from "../utils/axiosRoutes.js";

function Search() {

  const [books, setBooks] = useState([]);

  // pass me to search form
  function loadBooks(event) {
    var bookSearch = event.target.value
    API.getBookList()
      .then(() => {
        API.getBooks(bookSearch).then((books) => {
          setBooks(books);
        });
      })
      .catch(err => console.log(err));
  }

  function favoriteBook(data) {
    console.log(data);
    console.log(data.author)
    var myBook = {
      title: data.title,
      image: data.image,

      description: data.description,
      link: data.link
    };
    if (!myBook.description || !myBook.author[0]) {
      if (!myBook.description) {
        myBook.description = "No Description"
      }
      if (!data.author) {
        myBook.author = "No Author"
      }
      else {
        myBook.author = data.author[0]
      }
    }
    axiosRoutes.saveBook(myBook)
  }

  return (
    <div>
      <SearchForm
        loadBooks={loadBooks}
      />
      {books.map((book, index) => {
        return (
          <SearchResults
            key={index}
            title={book.title}
            image={book.image}
            author={book.author}
            description={book.description}
            link={book.link}
            favoriteBook={favoriteBook}
          />
        )
      })}
    </div>
  );
}


export default Search;
