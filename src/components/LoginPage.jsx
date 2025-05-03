import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Auth.css';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', credentials);
  };

  return (
    <div className={`auth-page ${animate ? 'fade-in' : ''}`}>
      <div className="auth-container animated-slide">
        <h2>Kyçu</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />

          <label>Fjalëkalimi</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Kyçu</button>
        </form>
        <p className="auth-footer-text">
          Nuk jeni të regjistruar?{' '}
          <Link to="/signup" className="auth-link">Regjistrohu</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
