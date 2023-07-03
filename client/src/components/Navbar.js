import React from 'react'

export default function Navbar() {
  return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light ">  
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
        <a className="nav-item nav-link" href="#">Add to Cart</a>
        <a className="nav-item nav-link" href="#">Contacts</a>
      </div>
    </div>
  </nav>
  )
}
