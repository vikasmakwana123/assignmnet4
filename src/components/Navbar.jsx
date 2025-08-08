// Navbar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{
      padding: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'beige',
      width: '100vw',
      borderBottom: '1px solid #ccc',
      borderRadius: '5px'
    }}>
      <div className="navbar-brand" style={{ paddingLeft: '20px', fontSize: '25px' }}>
        Healthcare
      </div>

      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}
        >
          Home
        </NavLink>
        <NavLink
          to="/ambulance"
          className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}
        >
          Ambulance
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}
        >
          Contact
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}
        >
          Login
        </NavLink>
      </div>

      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  );
};

export default Navbar;
