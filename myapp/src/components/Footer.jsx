import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Dynamically set the year

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Company Info */}
        <div className="footer-section company-info">
          <h3>AceAI</h3>
          <p>
            Empowering the future with industry-leading AI and Generative AI education. 
            We bridge the gap between academic knowledge and real-world applications.
          </p>
        </div>

        {/* Programs */}
        <div className="footer-section">
          <h3>Programs</h3>
          <ul>
            <li><Link to="/institutional-training">Institutional Training</Link></li>
            <li><Link to="/individual-learning">Individual Learning</Link></li>
            <li><Link to="/internships">Internship Programs</Link></li>
            <li><Link to="/workshops">Workshop Series</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service">Terms of Service</Link></li>
            <li><Link to="/cookie-policy">Cookie Policy</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <a href="mailto:support@aceai.com">support@aceai.com</a>
            </li>
            <li>
              <a href="tel:+1234567890">+1 (234) 567-890</a>
            </li>
            <li>
              <p>123 AI Innovation Street, Tech City, CA 90210, USA</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} AceAI. All rights reserved. Academic Excellence with AI.</p>
      </div>
    </footer>
  );
};

export default Footer;