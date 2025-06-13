import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="initials">AG</span>
        <span className="name">Akshita Gupta</span>
        <span className="subtitle">Makeup Artist</span>
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Makeup Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
