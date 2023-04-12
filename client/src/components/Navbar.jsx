import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar.css';

function Navbar() {
  return (
    <nav className="navbar mb-11">
      <div className="navbar-brand">Navigation Bar</div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to={'/'} className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to={'/add'} className="nav-link">Add New Data</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
