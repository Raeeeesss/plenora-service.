import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, Clock, Award, Leaf } from 'lucide-react';
import Navbar from '../components/Navbar';
import logoImg from '../assets/logo.png';
import Footer from '../components/Footer';

import deepCleaningImg from '../assets/images/service_deep_cleaning.png';
import vehicleWashImg from '../assets/images/service_vehicle_detailing.png';
import bathroomImg from '../assets/images/service_bathroom_sanitization.png';
import interlockImg from '../assets/images/service_interlock_cleaning.png';
import tankImg from '../assets/images/service_tank_cleaning.png';
import acGlassImg from '../assets/images/service_acp_glass_cleaning.png';
import roofWallImg from '../assets/images/service_roof_wall_floor_cleaning.png';
import officeImg from '../assets/images/why_hospitality.png';

import avatar1 from '../assets/images/hero_clean_action1.png';
import avatar2 from '../assets/images/ref_hero_right_card.png';
import avatar3 from '../assets/images/under_hero_cleaners_creambg.png';

import '../styles/ServicesPage.css';

export default function ServicesPage() {
  const allServices = [
    {
      id: 1,
      title: 'Vehicle Detailing',
      description: 'Premium touchless foam wash, interior vacuuming and ceramic coating protection.',
      image: vehicleWashImg,
      link: '/services/vehicle-foam-washing',
      comingSoon: false,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B42F6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 1 12.3V16c0 .6.4 1 1 1h2" />
          <circle cx="7" cy="17" r="2" />
          <circle cx="17" cy="17" r="2" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Deep Cleaning',
      description: 'Thorough cleaning to remove dirt, dust & allergens for a healthier home.',
      image: deepCleaningImg,
      link: '/services/house-office-deep-cleaning',
      comingSoon: true,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B42F6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      )
    },
    {
      id: 3,
      title: 'Bathroom Cleaning',
      description: 'Deep cleaning for a hygienic and germ-free bathroom you can trust.',
      image: bathroomImg,
      link: '/services/bathroom-sanitization-cleaning',
      comingSoon: true,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B42F6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3a1 1 0 0 1 1-1z" />
          <path d="M6 12V5a2 2 0 0 1 2-2h3" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Interlock Cleaning',
      description: 'Remove stains, moss and dirt from interlocks and pavements.',
      image: interlockImg,
      link: '/services/interlock-cleaning-restoration',
      comingSoon: true,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B42F6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="8" height="8" rx="1" />
          <rect x="13" y="3" width="8" height="8" rx="1" />
          <rect x="3" y="13" width="8" height="8" rx="1" />
          <rect x="13" y="13" width="8" height="8" rx="1" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'Tank Cleaning',
      description: 'Thorough cleaning of water tanks for pure and safe water.',
      image: tankImg,
      link: '/services/water-tank-cleaning-disinfection',
      comingSoon: true,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B42F6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 3h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
          <line x1="4" y1="9" x2="20" y2="9" />
          <line x1="4" y1="15" x2="20" y2="15" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'AC & Glass Cleaning',
      description: 'Streak-free shine for AC panels and glass surfaces.',
      image: acGlassImg,
      link: '/services/acp-glass-pressure-cleaning',
      comingSoon: true,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B42F6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="12" y1="3" x2="12" y2="21" />
        </svg>
      )
    },
    {
      id: 7,
      title: 'Roof, Wall & Floor Cleaning',
      description: 'Heavy duty pressure cleaning for roofs, exterior walls and floors.',
      image: roofWallImg,
      link: '/services/roof-wall-floor-cleaning',
      comingSoon: true,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B42F6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11" />
        </svg>
      )
    },
    {
      id: 8,
      title: 'Office Deep Cleaning',
      description: 'Professional commercial cleaning for offices and business premises.',
      image: officeImg,
      link: '/services/house-office-deep-cleaning',
      comingSoon: true,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B42F6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <line x1="9" y1="6" x2="9" y2="6.01" />
          <line x1="15" y1="6" x2="15" y2="6.01" />
          <line x1="9" y1="10" x2="9" y2="10.01" />
          <line x1="15" y1="10" x2="15" y2="10.01" />
          <line x1="9" y1="14" x2="9" y2="14.01" />
          <line x1="15" y1="14" x2="15" y2="14.01" />
          <path d="M10 22v-4h4v4" />
        </svg>
      )
    }
  ];

  return (
    <div className="services-page-ref">
      <main>
        {/* Royal Blue Hero Section */}
        <section className="sp-hero-section">
          {/* Floating Top Navigation Pill */}
          <Navbar />

          {/* Decorative Vector Line Art Layer */}
          <div className="sp-lineart-layer" aria-hidden="true">
            <svg className="sp-lineart-icon sp-lineart-tl" viewBox="0 0 100 100">
              <path d="M35,20 L50,20 L55,30 L30,30 Z M42,30 L42,45 L58,45 L58,90 C58,93 53,95 42,95 Z" fill="none" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.18"/>
            </svg>
            <svg className="sp-lineart-icon sp-lineart-tr" viewBox="0 0 120 120">
              <path d="M20,40 L80,40 L75,90 L25,90 Z" fill="none" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.18"/>
            </svg>
          </div>

          <div className="sp-hero-container">
            {/* Eyebrow Badge */}
            <div className="sp-hero-badge">
              <span>OUR SERVICE CATALOG</span>
            </div>

            {/* Main Headline */}
            <h1 className="sp-hero-title">
              Professional Cleaning<br />
              Services for <span className="sp-title-highlight">Every Need
                <svg className="sp-wavy-svg" viewBox="0 0 240 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 3 10 C 20 2, 35 16, 55 9 C 75 2, 90 16, 110 9 C 130 2, 145 16, 165 9 C 185 2, 200 16, 237 9" stroke="#FFCC00" strokeWidth="4.5" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Subtext */}
            <p className="sp-hero-subtext">
              From your home to your office, we deliver exceptional cleaning with care, consistency and confidence.
            </p>
          </div>

          {/* Bottom Scallop Divider into Cream Canvas */}
          <div className="sp-hero-scallop-divider" aria-hidden="true">
            <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="sp-cloud-svg">
              <path 
                d="M 0 90 L 0 45 Q 60 -15, 120 45 Q 185 -10, 250 45 Q 310 -20, 370 45 Q 435 -15, 500 45 Q 565 -25, 630 45 Q 700 -10, 770 45 Q 835 -20, 900 45 Q 965 -15, 1030 45 Q 1100 -25, 1170 45 Q 1235 -10, 1300 45 Q 1370 -20, 1440 45 L 1440 90 Z" 
                fill="#FFFDF5" 
              />
            </svg>
          </div>
        </section>

        {/* Main Services Section (Cream Background #FFFDF5) */}
        <section className="sp-main-section">
          <div className="sp-main-container">
            {/* Section Badge */}
            <div className="sp-section-badge">
              <span>WHAT WE OFFER</span>
            </div>

            {/* Section Title */}
            <h2 className="sp-section-title">Our Cleaning Services</h2>
            
            {/* Section Subtitle */}
            <p className="sp-section-subtext">
              We provide a full range of cleaning solutions tailored to your space.<br />
              Reliable, professional and always done right.
            </p>

            {/* 8 Cards Grid (4x2 Grid) */}
            <div className="sp-cards-grid">
              {allServices.map((service) => (
                <Link key={service.id} to={service.link} className={`sp-card-wrapper ${service.comingSoon ? 'coming-soon-card' : ''}`} style={{ textDecoration: 'none' }}>
                  <div className="sp-service-card">
                    <div className="sp-card-img-wrapper">
                      <img src={service.image} alt={service.title} className="sp-card-img" />
                    </div>
                    <div className="sp-card-body">
                      <div className="sp-card-icon-badge">{service.icon}</div>
                      <h3 className="sp-card-title">{service.title}</h3>
                      <p className="sp-card-desc">{service.description}</p>
                      <div className="sp-card-link">
                        {service.comingSoon ? (
                          <span style={{ color: '#94A3B8', fontWeight: 700 }}>Coming Soon</span>
                        ) : (
                          <>
                            <span>View Service</span>
                            <ArrowRight size={14} />
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

