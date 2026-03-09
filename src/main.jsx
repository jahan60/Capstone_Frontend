import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import axios from "axios"

//Set global Authorization header for ALL axios requests
axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("token")

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
