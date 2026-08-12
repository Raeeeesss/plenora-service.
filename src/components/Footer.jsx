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
            {/* Column 1: Brand Info */}
            <div className="footer-col footer-brand-col">
              <Link to="/" className="footer-logo-link">
                <img src={logoImg} alt="Plenora Service" className="footer-logo-img" />
              </Link>
              <p className="footer-brand-desc">
                Professional cleaning services you can rely on. We make your home, office and every space cleaner, healthier and happier.
              </p>
              <div className="footer-social-links">
                <a href="#facebook" className="footer-social-icon" aria-label="Facebook">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#instagram" className="footer-social-icon" aria-label="Instagram">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#twitter" className="footer-social-icon" aria-label="Twitter">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                <a href="#linkedin" className="footer-social-icon" aria-label="LinkedIn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2: QUICK LINKS */}
            <div className="footer-col">
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

            {/* Column 3: OUR SERVICES */}
            <div className="footer-col">
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
            <div className="footer-col">
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

        </div>



        {/* 5. Copyright Bar (#0628A4) */}
        <div className="footer-copyright-bar">
          <div className="footer-main-container footer-copyright-container">
            <p className="copyright-text">© 2025 Plenora Service. All rights reserved.</p>
            <div className="legal-links">
              <Link to="/contact">Privacy Policy</Link>
              <span className="legal-divider">|</span>
              <Link to="/contact">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

