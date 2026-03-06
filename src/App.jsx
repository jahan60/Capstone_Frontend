import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx"
import Analytics from "./pages/Analytics.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Inventory from "./pages/Inventory.jsx";
import Alerts from "./pages/Alerts.jsx";
import ProductForm from "./components/ProductForm";
import EditProductForm from "./components/EditProductForm.jsx";

function App() {


  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path = "/" element ={<Dashboard />} />
        <Route path = "/inventory" element ={<Inventory />} />
        <Route path = "/alerts" element ={<Alerts />} />
        <Route path = "/analytics" element ={<Analytics />} />
        <Route path="/low-stock" element={<Inventory />} /> 


        <Route path="/products/add" element={<ProductForm />} />
        <Route path="/edit-product/:id" element={<EditProductForm />} />
      </Routes>
    </Router>
  )
      
}

export default App
