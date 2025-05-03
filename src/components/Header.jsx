import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          Rent Ease
        </Link>
        <nav className="nav-links">
          <Link to="/Për Ne" className="nav-link">Për Ne</Link>
          <Link to="/Kërko pronën" className="nav-link">Kërko pronën</Link>
          <Link to="/Kontakti" className="nav-link">Kontakti</Link>
          <button className="login-button">Login</button>
        </nav>
      </div>
    </header>
  );
};

export default Header; 