import React from "react";
import "../styles/sidebar.css";
import { Link } from "react-router-dom";


 function Sidebar(){
    return(
        <div className="sidebar">
            <h3 className ="sidebar_title">Menu</h3>

            <ul className="sidebar_menu">
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/Inventory">Inventory</Link></li>
                <li><Link to="/alerts">Alerts</Link></li>
                <li><Link to="/analytics">Analytics</Link></li>





            </ul>



        </div>
    )
}

export default Sidebar;