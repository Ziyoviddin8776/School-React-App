import React from 'react';
import "./navbar.scss"
import {Link} from "react-router-dom";

function Navbar(props) {
    return (
        <div className="navbar">
            <div className="container">
                <div className="my-navbar">
                    <div className="logo">
                        <Link to="/">
                            <img
                                src="https://dynamic.brandcrowd.com/preview/logodraft/590d7a39-1b0a-4dae-b37c-9e5870ce3637/image/large.png"
                                alt="Custom Logo"/>
                            {/*<img src="https://dynamic.brandcrowd.com/preview/logodraft/db6e72c8-4292-419f-9ae5-234cc92886b0/image/large.png"*/}
                            {/*     alt="Custom Logo"/>*/}
                        </Link>
                    </div>
                    <div className="my-navbar-item">
                        <div className="links">
                            <Link to="/teachers">O'qituvchilar</Link>
                            <Link to="/parents">Ota-onalar</Link>
                            <Link to="pupils">O'quvchilar</Link>
                        </div>
                        <Link to="/login">
                            <button className="button ">Kirish</button>
                        </Link>
                        <Link to="/register">
                            <button className="button ">Ro'yxatdan o'tish</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Navbar;