import React from "react";
import "../styles/navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h2 className="nav_title">Smart Stock Manager</h2>

      <div className="nav_links">
        {!isLoggedIn ? (
          <>
            <span onClick={() => navigate("/login")}>Login</span>
          </>
        ) : (
          <>
            <span onClick={() => navigate("/profile")}>Profile</span>
            <br />
            <span onClick={handleLogout}>Logout</span>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;