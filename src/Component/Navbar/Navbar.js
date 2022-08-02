import React from 'react';
import "./navbar.css"
import {Link} from "react-router-dom";

function Navbar(props) {
    return (
        <div className="container">
            <div className="my-navbar">
                <div className="logo">
                    <Link to="/">
                        <img
                            src="https://dynamic.brandcrowd.com/preview/logodraft/590d7a39-1b0a-4dae-b37c-9e5870ce3637/image/large.png"
                            alt="Custom Logo"/>
                    </Link>
                </div>
                <div className="my-navbar-item">
                    <div>
                        <Link to="/teachers">O'qituvchilar</Link>
                    </div>
                    <div>
                        <Link to="/parents">Ota-onalar</Link>
                    </div>
                    <Link to="/login">
                        <button className="btn btn-success">Kirish</button>
                    </Link>
                    <Link to="/register">
                        <button className="btn btn-primary">Ro'yxatdan o'tish</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;