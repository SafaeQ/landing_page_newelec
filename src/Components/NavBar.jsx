import React from 'react';

const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
      <div className="logo">Logo</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
    </div>
  );
}

export default NavBar;
