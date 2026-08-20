import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Car, Home, Bath, Grid, Trees, Shield, AlertCircle, RefreshCw } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useServices } from '../hooks/useServices';
import '../styles/ServicesPage.css';

function getServiceIcon(slug = '') {
  if (slug.includes('vehicle') || slug.includes('foam')) {
    return <Car size={22} color="#0B42F6" strokeWidth={2.2} />;
  }
  if (slug.includes('house') || slug.includes('deep-cleaning') || slug.includes('office')) {
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

export default function ServicesPage() {
  const { services, loading, error, refetch } = useServices();

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
                d="M 0 90 L 0 45 Q 144 5, 288 45 Q 432 15, 576 45 Q 720 0, 864 45 Q 1008 15, 1152 45 Q 1296 5, 1440 45 L 1440 90 Z" 
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

            {/* Error State */}
            {error && (
              <div style={{ textAlign: 'center', padding: '3rem 1rem', background: '#FEE2E2', borderRadius: '16px', maxWidth: 600, margin: '0 auto 2rem' }}>
                <AlertCircle size={32} color="#DC2626" style={{ margin: '0 auto 12px' }} />
                <h3 style={{ color: '#991B1B', fontSize: '1.25rem', fontWeight: 700, marginBottom: 8 }}>Unable to load services</h3>
                <p style={{ color: '#7F1D1D', fontSize: '0.95rem', marginBottom: 16 }}>{error}</p>
                <button 
                  onClick={() => refetch()} 
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 20px', background: '#DC2626', color: '#FFF', border: 'none', borderRadius: 8, fontWeight: 600, cursor: 'pointer' }}
                >
                  <RefreshCw size={16} />
                  <span>Retry</span>
                </button>
              </div>
            )}

            {/* Services Cards Grid */}
            <div className="sp-cards-grid">
              {loading && (!services || services.length === 0) ? (
                [1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <div key={n} className="sp-card-wrapper">
                    <div className="sp-service-card" style={{ opacity: 0.65 }}>
                      <div className="sp-card-img-wrapper" style={{ background: '#E2E8F0', height: 200 }} />
                      <div className="sp-card-body">
                        <div style={{ width: 140, height: 20, background: '#E2E8F0', borderRadius: 4, marginBottom: 8 }} />
                        <div style={{ width: '100%', height: 14, background: '#E2E8F0', borderRadius: 4, marginBottom: 6 }} />
                        <div style={{ width: '75%', height: 14, background: '#E2E8F0', borderRadius: 4 }} />
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                (services || []).map((service) => {
                  const isComingSoon = !service.isAvailable;
                  const linkUrl = `/services/${service.slug}`;
                  const imgUrl = service.heroImage;
                  const desc = service.shortDescription || service.description;

                  return (
                    <Link 
                      key={service.id || service.slug} 
                      to={linkUrl} 
                      className={`sp-card-wrapper ${isComingSoon ? 'coming-soon-card' : ''}`} 
                      style={{ textDecoration: 'none' }}
                    >
                      <div className="sp-service-card">
                        <div className="sp-card-img-wrapper">
                          <img src={imgUrl} alt={service.title} className="sp-card-img" />
                        </div>
                        <div className="sp-card-body">
                          <div className="sp-card-icon-badge">
                            {getServiceIcon(service.slug)}
                          </div>
                          <h3 className="sp-card-title">{service.title}</h3>
                          <p className="sp-card-desc">{desc}</p>
                          <div className="sp-card-link">
                            {isComingSoon ? (
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
                  );
                })
              )}
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

