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
          <p>Email: <a href="mailto:stitch.sketchspeak@gmail.com">stitch.sketchspeak@gmail.com</a></p>
          <p>Phone: <a href="tel:+923154526202">+92 315 4526202</a></p>
          <p>Address: Shop#5 Icon Shopping Mall,<br />Mall Road Lahore, Pakistan</p>
        </div>
      </div>

      <div className="footer-learn-more">
     
        <ul>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/terms">Terms & Conditions</a></li>
          <li><a href="/faq">FAQ</a></li>
        </ul>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} YourStore. All rights reserved.</p>
        <p className="developer">Developed By <strong>Muh@mmad Usm@n</strong></p>
      </div>
    </footer>
  );
};

export default Footer;
