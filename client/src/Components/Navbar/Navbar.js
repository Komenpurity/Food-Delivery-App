import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light p-2">
      <h6 className="navbar-brand">Food Ordering</h6> 
    <ul className="navbar-nav">

      <li className="nav-item active">
        <Link to="/home" className="nav-link text-white">Home</Link>  
      </li>   

      <li className="nav-item active">
        <Link to="/current" className="nav-link text-white">CurrentOrder</Link>
      </li>

      <li className="nav-item active">
        <Link to="/search" className="nav-link text-white">Search</Link>
      </li>   

      <li className="nav-item active">
        <Link to="/" className="nav-link text-white">Signup</Link>
      </li>

      <li className="nav-item active">
        <Link to="/login" className="nav-link text-white">Login</Link>
      </li>
        
    </ul>
  </nav>
  )
}
