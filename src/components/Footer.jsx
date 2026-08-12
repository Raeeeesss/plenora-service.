import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Phone, ArrowUpRight, Mail, MapPin, ShieldCheck, Clock, Award, Leaf 
} from 'lucide-react';
import logoImg from '../assets/logo.png';
import { useBooking } from '../context/BookingContext';
import './Footer.css';

export default function Footer() {
  const { openBookingModal } = useBooking();

  return (
    <footer className="global-footer">
      {/* 1. Top CTA Banner */}
      <div className="footer-cta-wrapper">
        <div className="home-process-cta-banner">
          <div className="cta-banner-left">
            <Link to="/contact" className="cta-badge-wrapper" title="Book & Clean Confident - Contact Us">
              <div className="cta-badge-rotating-text">
                <svg viewBox="0 0 120 120" width="100" height="100">
                  <path id="footerBadgeTextCircle" d="M 60, 60 m -42, 0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0" fill="none" />
                  <text fill="#FFFFFF" fontSize="9.5" fontWeight="700" letterSpacing="1.8">
                    <textPath href="#footerBadgeTextCircle">
                      BOOK &amp; CLEAN CONFIDENT • 
                    </textPath>
                  </text>
                </svg>
              </div>
              <div className="cta-badge-yellow-starburst">
                <ArrowUpRight size={22} strokeWidth={2.8} color="#111827" />
              </div>
            </Link>

            <div className="cta-banner-text-group">
              <h3 className="cta-banner-title">Ready for a Cleaner Space?</h3>
              <p className="cta-banner-subtext">Book your cleaning service today and enjoy a spotless, fresh environment.</p>
            </div>
          </div>

          <div className="cta-banner-divider"></div>

          <div className="cta-banner-right">
            <button onClick={() => openBookingModal()} className="cta-btn-book" style={{ border: 'none', cursor: 'pointer' }}>
              <span>Book Now</span>
              <ArrowRight size={16} />
            </button>

            <a href="tel:+918139895446" className="cta-btn-call">
              <span className="cta-btn-call-icon">
                <Phone size={14} fill="#111827" color="#111827" />
              </span>
              <span className="cta-btn-call-text">Call Now</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Cloud Scallop Wave Transition into Royal Blue Background */}
      <div className="footer-cloud-divider" aria-hidden="true">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="footer-cloud-svg">
          <path 
            d="M 0 90 L 0 45 Q 144 5, 288 45 Q 432 15, 576 45 Q 720 0, 864 45 Q 1008 15, 1152 45 Q 1296 5, 1440 45 L 1440 90 Z" 
            fill="#0B42F6" 
          />
        </svg>
      </div>

      {/* 3. Main Footer Body (Royal Blue #0B42F6) */}
      <div className="footer-body">
        <div className="footer-main-container">
          {/* Columns Grid */}
          <div className="footer-columns-grid">
            {/* Column 1: Brand Info (Desktop Only) */}
            <div className="footer-col footer-brand-col desktop-only-brand">
              <Link to="/" className="footer-logo-link">
                <img src={logoImg} alt="Plenora Service" className="footer-logo-img" />
              </Link>
              <p className="footer-brand-desc">
                Professional cleaning services you can rely on. We make your home, office and every space cleaner, healthier and happier.
              </p>
            </div>

            {/* Column 2: QUICK LINKS (Desktop Only) */}
            <div className="footer-col footer-quicklinks-col">
              <h4 className="footer-col-title">QUICK LINKS</h4>
              <ul className="footer-links-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/why-plenora">About Us</Link></li>
                <li><Link to="/services">Our Services</Link></li>
                <li><Link to="/services">Pricing</Link></li>
                <li><Link to="/why-plenora">FAQs</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>

            {/* Column 3: OUR SERVICES (Desktop Only) */}
            <div className="footer-col footer-services-col">
              <h4 className="footer-col-title">OUR SERVICES</h4>
              <ul className="footer-links-list">
                <li><Link to="/services/house-office-deep-cleaning">Deep Cleaning</Link></li>
                <li><Link to="/services/bathroom-sanitization-cleaning">Bathroom Cleaning</Link></li>
                <li><Link to="/services/vehicle-foam-washing">Vehicle Foam Wash</Link></li>
                <li><Link to="/services/interlock-cleaning-restoration">Interlock Cleaning</Link></li>
                <li><Link to="/services/water-tank-cleaning-disinfection">Tank Cleaning</Link></li>
                <li><Link to="/services/acp-glass-pressure-cleaning">AC &amp; Glass Cleaning</Link></li>
              </ul>
            </div>

            {/* Column 4: SERVICE AREAS */}
            <div className="footer-col footer-areas-col">
              <h4 className="footer-col-title">SERVICE AREAS</h4>
              <ul className="footer-links-list footer-static-list">
                <li>Kuttippuram</li>
                <li>Valanchery</li>
                <li>Tirur</li>
                <li>Ponnani</li>
                <li>Edapal</li>
                <li>And Surrounding Areas</li>
              </ul>
            </div>

            {/* Column 5: CONTACT US */}
            <div className="footer-col footer-contact-col">
              <h4 className="footer-col-title">CONTACT US</h4>
              <div className="footer-contact-items">
                <div className="footer-contact-item">
                  <div className="footer-contact-badge">
                    <Phone size={16} color="#FFFFFF" />
                  </div>
                  <div className="footer-contact-text">
                    <a href="tel:+918139895446" className="footer-contact-heading">+91 8139895446</a>
                    <a href="tel:+919074810790" className="footer-contact-subtext" style={{ color: 'rgba(255, 255, 255, 0.85)', textDecoration: 'none' }}>+91 9074810790</a>
                  </div>
                </div>

                <div className="footer-contact-item">
                  <div className="footer-contact-badge">
                    <Mail size={16} color="#FFFFFF" />
                  </div>
                  <div className="footer-contact-text">
                    <a href="mailto:plenoraservice@gmail.com" className="footer-contact-heading">plenoraservice@gmail.com</a>
                    <span className="footer-contact-subtext">We reply within 30 minutes</span>
                  </div>
                </div>

                <div className="footer-contact-item">
                  <div className="footer-contact-badge">
                    <MapPin size={16} color="#FFFFFF" />
                  </div>
                  <div className="footer-contact-text">
                    <span className="footer-contact-heading">Kuttippuram</span>
                    <span className="footer-contact-subtext">Malappuram, Kerala, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider Line before Bottom Brand & Social Section */}
          <div className="footer-divider-line"></div>

          {/* Bottom Centered Section (Reference Layout) */}
          <div className="footer-bottom-brand-section">
            <Link to="/" className="footer-logo-link">
              <img src={logoImg} alt="Plenora Service" className="footer-logo-img" />
            </Link>
            <p className="footer-brand-tagline">
              Professional cleaning services you can rely on.
            </p>
            <div className="footer-social-links footer-centered-socials">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://wa.me/918139895446" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="WhatsApp">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

