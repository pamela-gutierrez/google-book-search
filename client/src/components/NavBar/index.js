import React from "react";
import "./index.css";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
            <div className="container">
                <a className="navbar-brand important" href="/">Google Books</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link nav-sub" href="/">Search Books</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-sub" href="/Saved">Saved Books</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default NavBar;