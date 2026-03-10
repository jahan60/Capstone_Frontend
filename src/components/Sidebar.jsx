import React from "react";
import "../styles/sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebar_menu">
        <li>
          <Link to="/">🏠Dashboard</Link>
        </li>
        <li>
          <Link to="/Inventory">🧑‍💻Inventory</Link>
        </li>
        <li>
          <Link to="/alerts">🚨Alerts</Link>
        </li>
        <li>
          <Link to="/analytics">📊Analytics</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
