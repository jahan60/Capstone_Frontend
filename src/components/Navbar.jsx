import React from "react";
import "../styles/navbar.css";


function Navbar () {
    return (
        <nav className="navbar">
            <h2 className ="nav_title">Smart Stock Manager</h2>
            <div className = "nav_links">
                <span>Profile</span>
                <br></br>
                <span>Logout</span>
            </div>
        </nav>
    )
    
};

export default Navbar;