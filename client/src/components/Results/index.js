import React from "react";

function Results(props) {
    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    {/* title */}
                    <h5 className="card-title">{props.title}</h5>
                    {/* author */}
                    <h5 className="card-title">{props.author}</h5>
                    {/* description */}
                    <p className="card-text">{props.description}</p>
                    {/* image */}
                    <img src={props.image} />
                    {/* <a href="#" className="card-link">Card link</a> */}
                    {/* <a href="#" className="card-link">Another link</a> */}
                </div>
            </div>
        </div>
    )
}
export default Results;