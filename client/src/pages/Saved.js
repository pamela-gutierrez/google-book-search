import React, { useState } from "react";
import axiosRoutes from "../utils/axiosRoutes.js";
import SavedResults from "../components/SavedResults";
// import API from "../utils/API.js";



function Saved() {

  const [booksDatabase, setBooksDatabase] = useState([]);


  function fetchBooks() {
    axiosRoutes.getBooks()
      .then(res => {
        setBooksDatabase(res.data)
          .catch(err => console.log(err))
      })
  }

  function unFavoriteBook(id) {
    axiosRoutes.deleteBook(id)
      .then(res => {
        fetchBooks(res.data)
          .catch(err => console.log(err))
      })
  }

  return (
    <div className="container">
      {booksDatabase.map((book) => {
        return <SavedResults
          _id={book._id}
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

// const [books, setBooks] = useState([]);
// // const [search, setSearch] = useState("");

// // useEffect(() => {
// //   loadBooks();
// // }, []);


// // pass me to search form
// function loadBooks(event) {
//   var bookSearch = event.target.value
//   API.getBookList()
//     .then(() => {
//       API.getBooks(bookSearch).then((books) => {
//         setBooks(books);
//       });
//     })
//     .catch(err => console.log(err));
// }


{/* <div>
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
</div> */}