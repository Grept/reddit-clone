import React from "react";
import {Link} from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return(
        <nav>
            <ul>
                <li><Link to="/">Hottest Posts</Link></li>
                <li><a href="https://www.reddit.com/">Reddit</a></li>
                <li>Memes</li>
            </ul>
        </nav>
    );
}

export default NavBar;