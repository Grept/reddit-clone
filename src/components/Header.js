import React from "react";
import NavBar from "./NavBar";
import logo from "../assets/img/logo.png"

function Header({titleText}) {
    return(
        <header>
            <NavBar />
            <div className="header-icon">
                {titleText ? <h1>{titleText}</h1> : <img src={logo} alt="reddit-logo"/>}
            </div>
        </header>
    );
}

export default Header;