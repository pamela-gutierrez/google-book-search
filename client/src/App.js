import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import SearchForm from "./components/SearchForm"
import NavBar from "./components/NavBar"
// import Results from "./components/Results"
// import API from "./utils/API.js";
import "./App.css";
import Search from "./pages/Search.js"
import Saved from "./pages/Saved.js"


function App() {

  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Search} />
          {/* PAM I STARTED HERE */}
          <Route exact path="/Saved" component={Saved} />
        </Switch>
      </div>
    </Router>

  );
}


export default App;

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

