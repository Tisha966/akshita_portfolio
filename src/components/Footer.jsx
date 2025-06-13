import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <span className="initials">AG</span>
          <span className="name">Akshita Gupta</span>
          <span className="subtitle">Certified Makeup Artist</span>
        </div>

        <div className="footer-description">
          <p>
            Helping you feel confident and beautiful in every moment. Specializing in bridal, editorial, and occasion looks.
            Based in India — available for travel.
          </p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About Me</a>
          <a href="#services">Makeup Services</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-socials">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">Pinterest</a>
        </div>

        <div className="footer-newsletter">
          <p>✨ Stay updated with the latest looks, tips & offers</p>
          <input type="email" placeholder="Your email address" />
          <button type="submit">Subscribe</button>
        </div>

        <p className="footer-credit">© 2025 Akshita Gupta | Designed with ❤️ by Tisha</p>
      </div>
    </footer>
  );
}

export default Footer;
