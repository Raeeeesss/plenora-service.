import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, PhoneCall } from 'lucide-react';
import logoImg from '../assets/logo.png';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Info */}
          <div className="footer-brand">
            <Link to="/">
              <img src={logoImg} alt="Plenora Service" className="footer-logo-img" />
            </Link>
            <p className="footer-tagline">
              Elevating standard cleaning to a high-end hospitality experience for your premium space.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="footer-column-title">SERVICES</h4>
            <ul className="footer-links">
              <li><Link to="/services" className="footer-link">Residential</Link></li>
              <li><Link to="/services" className="footer-link">Commercial</Link></li>
              <li><Link to="/services" className="footer-link">Deep Clean</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="footer-column-title">COMPANY</h4>
            <ul className="footer-links">
              <li><a href="#about" className="footer-link">Our Story</a></li>
              <li><a href="#impact" className="footer-link">Impact</a></li>
              <li><a href="#careers" className="footer-link">Careers</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="footer-column-title">CONTACT</h4>
            <ul className="footer-links">
              <li><a href="#support" className="footer-link">Support</a></li>
              <li><a href="#quote" className="footer-link">Quote</a></li>
            </ul>
            <div className="contact-icons">
              <a href="mailto:info@plenoraservice.com" className="contact-icon-btn" aria-label="Mail">
                <Mail size={16} />
              </a>
              <a href="tel:#" className="contact-icon-btn" aria-label="Phone">
                <PhoneCall size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© 2024 Plenora Service. All rights reserved.</p>
          <div className="footer-legal-links">
            <a href="#privacy" className="footer-link">Privacy Policy</a>
            <a href="#terms" className="footer-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
