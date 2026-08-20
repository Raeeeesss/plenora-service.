import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Car, Home, Bath, Grid, Trees, Shield } from 'lucide-react';
import { useFeaturedServices } from '../hooks/useServices';
import './Services.css';

function getServiceIcon(slug = '') {
  if (slug.includes('vehicle') || slug.includes('foam')) {
    return <Car size={22} color="#0B42F6" strokeWidth={2.2} />;
  }
  if (slug.includes('house') || slug.includes('deep-cleaning')) {
    return <Home size={22} color="#0B42F6" strokeWidth={2.2} />;
  }
  if (slug.includes('bathroom')) {
    return <Bath size={22} color="#0B42F6" strokeWidth={2.2} />;
  }
  if (slug.includes('interlock')) {
    return <Grid size={22} color="#0B42F6" strokeWidth={2.2} />;
  }
  if (slug.includes('garden')) {
    return <Trees size={22} color="#0B42F6" strokeWidth={2.2} />;
  }
  return <Sparkles size={22} color="#0B42F6" strokeWidth={2.2} />;
}

export default function Services() {
  const { featuredServices, loading } = useFeaturedServices();

  const cardsData = featuredServices && featuredServices.length > 0 ? featuredServices : [];

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
          {loading && (!cardsData || cardsData.length === 0) ? (
            [1, 2, 3, 4].map((n) => (
              <div key={n} className="home-card-wrapper">
                <div className="home-service-card" style={{ opacity: 0.7 }}>
                  <div className="home-card-image-wrapper" style={{ background: '#E2E8F0', height: 180 }} />
                  <div className="home-card-body">
                    <div style={{ width: 140, height: 20, background: '#E2E8F0', borderRadius: 4, marginBottom: 8 }} />
                    <div style={{ width: '100%', height: 14, background: '#E2E8F0', borderRadius: 4, marginBottom: 6 }} />
                    <div style={{ width: '80%', height: 14, background: '#E2E8F0', borderRadius: 4 }} />
                  </div>
                </div>
              </div>
            ))
          ) : (
            cardsData.map((card) => {
              const isComingSoon = !card.isAvailable;
              const linkUrl = card.link || `/services/${card.slug}`;
              const imgUrl = card.heroImage || card.image;
              const desc = card.shortDescription || card.description;

              return (
                <Link 
                  key={card.id || card.slug} 
                  to={linkUrl} 
                  className={`home-card-wrapper ${isComingSoon ? 'coming-soon-card' : ''}`} 
                  style={{ textDecoration: 'none' }}
                >
                  <div className="home-service-card">
                    <div className="home-card-image-wrapper">
                      <img src={imgUrl} alt={card.title} className="home-card-img" />
                    </div>
                    <div className="home-card-body">
                      <div className="home-card-icon-badge">
                        {card.icon || getServiceIcon(card.slug)}
                      </div>
                      <h3 className="home-card-title">{card.title}</h3>
                      <p className="home-card-desc">{desc}</p>
                      <div className="home-card-footer">
                        {isComingSoon ? (
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
              );
            })
          )}
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

