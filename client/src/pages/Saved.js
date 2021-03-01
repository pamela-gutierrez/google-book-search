import React, { useState, useEffect } from "react";
import axiosRoutes from "../utils/axiosRoutes.js";
import SavedResults from "../components/SavedResults";

function Saved() {

  const [booksDatabase, setBooksDatabase] = useState([]);

  useEffect(() => {
    fetchBooks()
  }, [])

  function fetchBooks() {
    axiosRoutes.getBooks()
      .then(res => {
        setBooksDatabase(res.data)
      })
      .catch(err => console.log(err))
  }

  function unFavoriteBook(id) {
    console.log(id)
    axiosRoutes.deleteBook(id)
      .then(res => {
        fetchBooks(res.data)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="container-fluid">
      {booksDatabase.map((book, index) => {
        return <SavedResults
          id={book._id}
          key={index}
          title={book.title}
          image={book.image}
          author={book.author}
          description={book.description}
          link={book.link}
          unFavoriteBook={unFavoriteBook}
        />
      })}
    </div>
  );
}

export default Saved;