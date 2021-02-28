import React from "react";
import SavedResults from "../components/SavedResults"
// import React, { useState } from "react";
// import API from "../utils/API.js";


const [books, setBooks] = useState([]);

function Saved() {

  function fetchBooks() {
    axiosRoutes.getBooks()
      .then(res => {
        setBooks(res.data)
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