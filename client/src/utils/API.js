import axios from "axios";

export default {
  getBooks: function (bookSearch) {
    return new Promise((resolve, reject) => {
      var searchQuery = "https://www.googleapis.com/books/v1/volumes?q=" + bookSearch;
      // console.log(searchQuery)
      axios.get(searchQuery).then((res) => {
        // console.log(res.data.results)
        const books = res.data.items;

        const results = books.map((book) => {
          // console.log(book.volumeInfo.title)
          // console.log(book.volumeInfo.authors)
          // console.log(book.volumeInfo.description)
          // console.log(book.volumeInfo.imageLinks.thumbnail)
          if (book.volumeInfo.imageLinks === undefined) {
            return {
              title: book.volumeInfo.title,
              image: "https://via.placeholder.com/130x200.png",
              author: book.volumeInfo.authors,
              description: book.volumeInfo.description,
              link: book.volumeInfo.infoLink
            };
          } else {
            return {
              title: book.volumeInfo.title,
              image: book.volumeInfo.imageLinks.thumbnail,
              author: book.volumeInfo.authors,
              description: book.volumeInfo.description,
              link: book.volumeInfo.infoLink
            };
          }

        });
        resolve(results);
      }).catch((err) => reject(err));
    });
  },
  getBookList: function () {
    return new Promise((resolve) => {
      resolve();
    });
  }
};
