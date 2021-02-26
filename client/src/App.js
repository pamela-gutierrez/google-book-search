import React, { useEffect, useState } from "react";
import SearchForm from "./components/SearchForm"
import NavBar from "./components/NavBar"
import Results from "./components/Results"
import API from "./utils/API.js";
import "./App.css";

function App() {

  const [books, setBooks] = useState([]);
  // const [search, setSearch] = useState("");

  // useEffect(() => {
  //   loadBooks();
  // }, []);


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
      <NavBar />
      <SearchForm
        loadBooks={loadBooks}
      />
      {books.map((book) => {
        return <Results
          title={book.title}
          image={book.image}
          author={book.author}
          description={book.description}
        />
      })}
    </div>
  );
}


export default App;
