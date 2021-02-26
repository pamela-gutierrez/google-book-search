import React from "react";

function SearchForm(props) {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="searchName">Book Search</label>
                <input type="name" className="form-control" aria-describedby="emailHelp" placeholder="Enter Book Name" onChange={(event) => {
                    event.preventDefault();
                    props.handleSearchQueryChange(event)
                }}></input>
            </div>
        </form>
    )
}
export default SearchForm;