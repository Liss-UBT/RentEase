import React, { useState } from 'react';
import '../styles/Contact.css';
import Header from './Header';
import office from '../Assets/office.png';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <Header />
      <div className="contact-section">
        <div className="contact-image">
          <img src={office} alt="Contact" />
        </div>
        <div className="contact-form-container">
          <h2>Na Kontaktoni</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <label htmlFor="name">Emri</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email-i</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Mesazhi</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit">Dërgo</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
