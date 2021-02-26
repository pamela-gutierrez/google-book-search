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
    function loadBooks(bookName) {
      API.getBookList()
        .then(() => {
          API.getBooks(bookName).then((books) => {
            setBooks(books);
          });
        })
        .catch(err => console.log(err));
    }



  return (
    <div>
      <NavBar />
      <SearchForm />
      <Results />
    </div>
  );
}


export default App;
