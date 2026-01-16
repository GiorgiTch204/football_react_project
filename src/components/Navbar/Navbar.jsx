import React from "react";
import "../Navbar/Navbar.css";

export default function Navbar(){
    return(
        <nav className="navbar">
            <ul className="nav-list">
                <li><a href="">Home</a></li>                                <li><a href="">Gela</a></li>
                <li><a href="">Players</a></li>
                <li><a href="">Information</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
    )
}