import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            We provide high-quality products with a commitment to customer satisfaction.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: stitch.sketchspeak@gmail.com</p>
          <p>Phone: +92 315 4526202</p>
          <p>Address: Shop#5 Icon Shopping Mall , Mall Road Lahore, Pakistan</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} YourStore. All rights reserved.<br/> <h3>Developed By Muh@mmad Usm@n</h3></p>
      </div>
    </footer>
  );
};

export default Footer;
