import React from "react";
import NavBar from "./NavBar";

function Header({titleText}) {
    return(
        <header>
            <NavBar />
            <div className="header-icon">
                {titleText ? <h1>{titleText}</h1> : <img src="../assets/img/logo.png" alt="reddit-logo"/>}
            </div>
        </header>
    );
}

export default Header;