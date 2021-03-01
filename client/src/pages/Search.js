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
    console.log(data)
    axiosRoutes.saveBook({
      title: data.title,
      image: data.image,
      author: data.author,
      description: data.description,
      link: data.link
    })
  }

  return (
    <div>
      <SearchForm
        loadBooks={loadBooks}
      />
      {books.map((book) => {
        return (<div>
          <SearchResults
            title={book.title}
            image={book.image}
            author={book.author}
            description={book.description}
            link={book.link}
            favoriteBook={favoriteBook}
          />
        </div>
        )
      })}
    </div>
  );
}


export default Search;
