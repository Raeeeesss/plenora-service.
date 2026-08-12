import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import deepCleaningImg from '../assets/images/service_deep_cleaning.png';
import vehicleWashImg from '../assets/images/service_vehicle_detailing.png';
import bathroomImg from '../assets/images/service_bathroom_sanitization.png';
import interlockImg from '../assets/images/service_interlock_cleaning.png';
import './Services.css';

export default function Services() {
  const cardsData = [
    {
      id: 1,
      title: 'VEHICLE DETAILING',
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
      title: 'DEEP CLEANING',
      description: 'Complete home deep cleaning to remove dust, dirt and allergens. A healthier, fresher living space for you and your family.',
      image: deepCleaningImg,
      link: '/services/house-office-deep-cleaning',
      comingSoon: true,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B42F6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'BATHROOM CLEANING',
      description: 'Deep cleaning for a hygienic and germ-free bathroom.',
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
      title: 'INTERLOCK CLEANING',
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
    }
  ];

  return (
    <section className="home-services-section" id="services">
      {/* Decorative Line Art Layer around Heading */}
      <div className="home-services-lineart-layer" aria-hidden="true">
        {/* Left: Spray Bottle */}
        <svg className="services-lineart-icon lineart-left" viewBox="0 0 100 100">
          <path d="M35,20 L50,20 L55,30 L30,30 Z M42,30 L42,45 L58,45 L58,90 C58,93 53,95 42,95 C31,95 26,93 26,90 L26,45 L42,45 Z" fill="none" stroke="#0B42F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.35"/>
          <path d="M95,40 L105,40 M100,35 L100,45 M20,25 L26,25" fill="none" stroke="#0B42F6" strokeWidth="1.5" strokeLinecap="round" opacity="0.35"/>
        </svg>

        {/* Right: Vacuum Cleaner */}
        <svg className="services-lineart-icon lineart-right" viewBox="0 0 120 120">
          <path d="M60,95 L85,25 M60,40 Q40,20 25,40 Q10,60 30,70 Q50,80 60,40" fill="none" stroke="#0B42F6" strokeWidth="2" strokeLinecap="round" opacity="0.35"/>
          <path d="M95,40 L105,40 M100,35 L100,45" fill="none" stroke="#0B42F6" strokeWidth="1.5" strokeLinecap="round" opacity="0.35"/>
        </svg>
      </div>

      <div className="home-services-container">
        {/* Section Label */}
        <div className="home-services-badge">
          <span>WHAT WE OFFER</span>
        </div>

        {/* Main Heading: OUR CLEANING SERVICES */}
        <h2 className="home-services-title">
          OUR CLEANING <span className="services-title-highlight">SERVICES
            <svg className="services-wavy-svg" viewBox="0 0 220 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 3 10 C 20 2, 35 16, 55 9 C 75 2, 90 16, 110 9 C 130 2, 145 16, 165 9 C 185 2, 200 16, 217 9" stroke="#FFCC00" strokeWidth="4.5" strokeLinecap="round" />
            </svg>
          </span>
        </h2>

        {/* Subtext Description */}
        <p className="home-services-subtext">
          Professional cleaning solutions designed to make your home, office and every space shine like new.
        </p>

        {/* 4 Featured Service Cards Grid */}
        <div className="home-services-cards-grid">
          {cardsData.map((card) => (
            <Link key={card.id} to={card.link} className={`home-card-wrapper ${card.comingSoon ? 'coming-soon-card' : ''}`} style={{ textDecoration: 'none' }}>
              <div className="home-service-card">
                <div className="home-card-image-wrapper">
                  <img src={card.image} alt={card.title} className="home-card-img" />
                </div>
                <div className="home-card-body">
                  <div className="home-card-icon-badge">{card.icon}</div>
                  <h3 className="home-card-title">{card.title}</h3>
                  <p className="home-card-desc">{card.description}</p>
                  <div className="home-card-footer">
                    {card.comingSoon ? (
                      <div className="home-card-book-btn disabled-btn">
                        <span>Coming Soon</span>
                      </div>
                    ) : (
                      <div className="home-card-book-btn">
                        <span>View Service</span>
                        <ArrowRight size={14} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Centered View All Services Button */}
        <div className="home-services-footer-action">
          <Link to="/services" className="home-view-all-btn">
            <span>View All Services</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

