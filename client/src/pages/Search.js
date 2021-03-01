// import axios from "axios";
import React, { useState } from "react";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import API from "../utils/API.js";
import axiosRoutes from "../utils/axiosRoutes.js";




function Search() {

  const [books, setBooks] = useState([]);
  // const [formObject, setFormObject] = useState({})
  // const [search, setSearch] = useState("");

  // useEffect(() => {
  //   loadBooks();
  // }, []);




  function favoriteBook(data) {
    axiosRoutes.saveBook({
      title: data.title,
      image: data.image,
      author: data.author,
      description: data.description,
      link: data.link
    })
  }

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



  return (
    <div>
      <SearchForm
        loadBooks={loadBooks}
      />
      {books.map((book) => {
        return <SearchResults
          title={book.title}
          image={book.image}
          author={book.author}
          description={book.description}
          link={book.link}
        />
      })}
    </div>
  );
}


export default Search;
