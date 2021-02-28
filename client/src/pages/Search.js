import React, { useState } from "react";
import SearchForm from "../components/SearchForm"
import Results from "../components/Results"
import API from "../utils/API.js";




function Search() {

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


export default Search;
