import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User, Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.png';
import Button from './Button';
import './Header.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';
  const isServices = location.pathname.startsWith('/services');
  const isWhyUs = location.pathname === '/why-us' || location.pathname === '/why-plenora';
  const isContact = location.pathname === '/contact';

  if (isHome) return null;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : 'transparent'}`}>
      <div className="container header-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <img src={logoImg} alt="Plenora Service" className="logo-brand-img" />
        </Link>

        {/* Navigation Links */}
        <nav>
          <ul className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
            <li>
              <Link to="/" className={`nav-link ${isHome ? 'active' : ''}`}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className={`nav-link ${isServices ? 'active' : ''}`}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/why-plenora" className={`nav-link ${isWhyUs ? 'active' : ''}`}>
                Why Plenora
              </Link>
            </li>
            <li>
              <Link to="/contact" className={`nav-link ${isContact ? 'active' : ''}`}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className="header-actions">
          <a href="tel:+919876543210" className="call-now-btn">Call Now</a>
          
          <Link to="/contact" className="btn btn-primary quote-btn-desktop">
            Get a Free Quote
          </Link>

          <button className="user-profile-btn" aria-label="User Profile">
            <User size={18} />
          </button>

          <button 
            className="mobile-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
