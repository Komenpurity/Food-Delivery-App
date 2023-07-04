import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar({ onLogout }) {

    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => onLogout());
      }

  return (
    <>
    {/* <header>
      <button onClick={handleLogout}>Logout</button>
    </header> */}

    <nav className="navbar navbar-expand-lg navbar-light ">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link to="/" className="nav-link text-white">Home</Link>
      </li>
      <li className="nav-item active">
        <Link to="/login" className="nav-link text-white">Login</Link>
      </li>
      <li className="nav-item active">
        <Link to="/signup" className="nav-link text-white">Signup</Link>
      </li>
    </ul>
  </nav>
  </>
  )
}
