import React from "react";
import "./index.css";

function SearchForm(props) {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="searchName">Start Looking:</label>
                <input type="name" className="form-control" aria-describedby="emailHelp" placeholder="Enter Book Name" onChange={(event) => {
                    event.preventDefault();
                    props.loadBooks(event)
                }}></input>
            </div>
        </form>
    )
}
export default SearchForm;