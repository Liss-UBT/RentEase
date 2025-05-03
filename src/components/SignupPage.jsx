import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Auth.css';

const SignupPage = () => {
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup submitted:', user);
  };

  return (
    <div className={`auth-page ${animate ? 'fade-in' : ''}`}>
      <div className="auth-container animated-slide">
        <h2>Regjistrohu</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label>Emri</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />

          <label>Fjalëkalimi</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Regjistrohu</button>
        </form>
        <p className="auth-footer-text">
          Keni një llogari?{' '}
          <Link to="/login" className="auth-link">Kyçu</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
