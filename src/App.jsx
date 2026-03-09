import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";

import Analytics from "./pages/Analytics.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Inventory from "./pages/Inventory.jsx";
import Alerts from "./pages/Alerts.jsx";
import ProductForm from "./components/ProductForm";
import EditProductForm from "./components/EditProductForm.jsx";
import LowStock from "./pages/LowStock.jsx";

import Login from "./pages/Login.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check token on page refresh
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLoggedIn(true);
  }, []);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Sidebar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/low-stock" element={<LowStock />} />

        <Route path="/products/add" element={<ProductForm />} />
        <Route path="/edit-product/:id" element={<EditProductForm />} />

   
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} /> 
        
      </Routes>
    </Router>
  );
}

export default App;
