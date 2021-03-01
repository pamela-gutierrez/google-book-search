import React from "react";

function SearchResults(props) {

    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <h5 className="card-title">{props.author}</h5>
                    <p className="card-text">{props.description}</p>
                    <img src={props.image} />
                    <button className="btn btn-info" onClick={() => props.favoriteBook(props)}>Save</button>
                    <a href={props.link} target="_blank"><button className="btn btn-info" >View</button></a>
                </div>
            </div>
        </div>
    )
}
export default SearchResults;