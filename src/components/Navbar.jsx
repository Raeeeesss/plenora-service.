import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.png';
import { useBooking } from '../context/BookingContext';
import '../sections/Hero.css';

export default function Navbar() {
  const { openBookingModal } = useBooking();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Hide on scroll down, show on scroll up (or near top of page)
      if (currentScrollPos < 50) {
        setVisible(true);
      } else if (prevScrollPos > currentScrollPos + 5) {
        // Scrolling UP - Show navbar
        setVisible(true);
      } else if (currentScrollPos > prevScrollPos + 5) {
        // Scrolling DOWN - Hide navbar
        setVisible(false);
        setMobileMenuOpen(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className={`hero-nav-pill-wrapper ${visible ? 'nav-visible' : 'nav-hidden'}`}>
      <nav className="hero-nav-pill">
        {/* Left: Brand Logo */}
        <Link to="/" className="hero-pill-logo" onClick={closeMobileMenu}>
          <img src={logoImg} alt="Plenora Cleaning Service" className="hero-pill-logo-img" />
        </Link>

        {/* Center: Desktop Navigation Links */}
        <div className="hero-pill-nav-links desktop-only-links">
          <Link to="/" className={`hero-nav-link ${currentPath === '/' ? 'active' : ''}`}>
            Home
          </Link>
          <Link to="/services" className={`hero-nav-link ${currentPath.startsWith('/services') ? 'active' : ''}`}>
            Services
          </Link>
          <Link to="/why-plenora" className={`hero-nav-link ${currentPath === '/why-plenora' ? 'active' : ''}`}>
            Why Plenora
          </Link>
          <Link to="/contact" className={`hero-nav-link ${currentPath === '/contact' ? 'active' : ''}`}>
            Contact
          </Link>
        </div>

        {/* End / Right: Desktop Book Now Button & Mobile Hamburger Toggle */}
        <div className="hero-pill-actions">
          <button className="hero-btn-book desktop-only-btn" onClick={() => { closeMobileMenu(); openBookingModal(); }}>
            <span>Book Now</span>
            <ArrowRight size={16} className="hero-btn-arrow" />
          </button>

          <button 
            className="mobile-hamburger-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X size={22} color="#0B42F6" /> : <Menu size={22} color="#0B42F6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu (Appears only when mobile menu is toggled open) */}
      {mobileMenuOpen && (
        <div className="mobile-nav-dropdown">
          <Link to="/" className={`mobile-nav-item ${currentPath === '/' ? 'active' : ''}`} onClick={closeMobileMenu}>
            Home
          </Link>
          <Link to="/services" className={`mobile-nav-item ${currentPath.startsWith('/services') ? 'active' : ''}`} onClick={closeMobileMenu}>
            Services
          </Link>
          <Link to="/why-plenora" className={`mobile-nav-item ${currentPath === '/why-plenora' ? 'active' : ''}`} onClick={closeMobileMenu}>
            Why Plenora
          </Link>
          <Link to="/contact" className={`mobile-nav-item ${currentPath === '/contact' ? 'active' : ''}`} onClick={closeMobileMenu}>
            Contact
          </Link>
          <button className="mobile-nav-book-btn" onClick={() => { closeMobileMenu(); openBookingModal(); }}>
            <span>Book Now</span>
            <ArrowRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
