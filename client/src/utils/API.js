import axios from "axios";

export default {
  getBooks: function(bookName) {
    return new Promise((resolve, reject) => {
      var searchQuery = "https://www.googleapis.com/books/v1/volumes?q=" + bookName;
      console.log(searchQuery)
      axios.get(searchQuery).then((res) => {
        console.log(res.data.results)
        const books = res.data.results;
        const results = books.map((book) => {
          return {
            title: book.items.volumeInfo.title
            // firstname: user.name.first,
            // lastname: user.name.last,
            // fullname: user.name.first + " " + user.name.last,
            // email: user.email,
            // image: user.picture.large,
            // phone: user.cell,
            // dob: user.dob.date
          };
        });
        resolve(results);
      }).catch((err) => reject(err));
    });
  },
  getBookList: function() {
    return new Promise((resolve) => {
      resolve();
    });
  }
};
