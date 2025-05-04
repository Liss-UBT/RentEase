import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">Rent Ease</Link>
        <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`nav-links ${menuOpen ? 'mobile-open' : ''}`}>
          <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>Për Ne</Link>
          <Link to="/search" className="nav-link" onClick={() => setMenuOpen(false)}>Kërko pronën</Link>
          <Link to="/Kontakti" className="nav-link" onClick={() => setMenuOpen(false)}>Kontakti</Link>
          <Link to="/login" onClick={() => setMenuOpen(false)}>
            <button className="login-button">Login</button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
