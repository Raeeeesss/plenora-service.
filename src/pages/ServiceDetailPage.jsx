import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, ChevronDown, ChevronUp, ShieldCheck, Award, Zap } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';
import Process from '../sections/Process';
import { servicesData } from '../data/servicesData';
import '../styles/ServiceDetailPage.css';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const [openFaq, setOpenFaq] = useState(null);

  const service = servicesData[slug];

  if (!service) {
    return (
      <div className="services-page">
        <Header />
        <main className="container not-found-container">
          <h2>Service Not Found</h2>
          <p style={{ margin: '16px 0 24px 0', color: 'var(--text-muted)' }}>
            The requested cleaning service could not be located in our catalog.
          </p>
          <Button variant="primary" href="/services">
            Back to Services
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  // Get 3 related services
  const relatedServices = Object.values(servicesData)
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="service-detail-page">
      <Header />

      {/* Breadcrumb Navigation */}
      <nav className="breadcrumb-nav">
        <div className="container">
          <ul className="breadcrumb-list">
            <li><Link to="/" className="breadcrumb-link">Home</Link></li>
            <li className="breadcrumb-separator">/</li>
            <li><Link to="/services" className="breadcrumb-link">Services</Link></li>
            <li className="breadcrumb-separator">/</li>
            <li className="breadcrumb-current">{service.title}</li>
          </ul>
        </div>
      </nav>

      <main>
        {/* Service Hero */}
        <section className="detail-hero-section">
          <div className="container detail-hero-container">
            <div className="hero-content">
              <div className="section-badge">{service.category.toUpperCase()}</div>
              
              <h1 className="hero-title">{service.title}</h1>
              
              <p className="hero-description">{service.fullDescription}</p>

              <div className="detail-price-badge">
                Starting {service.price}
              </div>

              <div className="hero-actions">
                <Button variant="primary" href="#book">
                  Book This Service
                </Button>
                <Button variant="secondary" href="#quote">
                  Get a Free Quote
                </Button>
              </div>
            </div>

            <div className="hero-image-wrapper">
              <img src={service.heroImage} alt={service.title} className="hero-image" />
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="included-section">
          <div className="container">
            <div className="included-header">
              <div className="section-badge">SERVICE SCOPE</div>
              <h2 className="section-heading">What's Included in {service.title}</h2>
            </div>

            <div className="included-grid">
              {service.whatsIncluded.map((item, index) => (
                <div key={index} className="included-item">
                  <CheckCircle2 size={20} className="included-icon" />
                  <span className="included-text">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="features-section">
          <div className="container">
            <div className="services-header" style={{ marginBottom: 40 }}>
              <div>
                <div className="section-badge">WHY CHOOSE PLENORA</div>
                <h2 className="section-heading">Engineered for perfection</h2>
              </div>
            </div>

            <div className="features-grid">
              {service.features.map((feat, index) => (
                <div key={index} className="feature-card">
                  <h3 className="feature-card-title">{feat.title}</h3>
                  <p className="feature-card-desc">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4-Step Process */}
        <Process />

        {/* FAQ Accordion */}
        {service.faqs && service.faqs.length > 0 && (
          <section className="faq-section">
            <div className="container faq-container">
              <div className="process-header">
                <div className="section-badge">GOT QUESTIONS?</div>
                <h2 className="process-heading">Frequently Asked Questions</h2>
              </div>

              <div className="faq-list">
                {service.faqs.map((faq, index) => (
                  <div key={index} className="faq-item">
                    <button className="faq-question-btn" onClick={() => toggleFaq(index)}>
                      <span>{faq.question}</span>
                      {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                    {openFaq === index && (
                      <div className="faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Services */}
        <section className="services-section" style={{ backgroundColor: '#F8FAFC' }}>
          <div className="container">
            <div className="services-header">
              <div>
                <div className="section-badge">EXPLORE MORE</div>
                <h2 className="section-heading">Related Cleaning Services</h2>
              </div>
              <Button variant="secondary" href="/services">
                View All Services
              </Button>
            </div>

            <div className="services-grid">
              {relatedServices.map((rel) => (
                <ServiceCard
                  key={rel.slug}
                  slug={rel.slug}
                  title={rel.title}
                  category={rel.category}
                  description={rel.shortDescription}
                  price={rel.price}
                  image={rel.heroImage}
                  alt={rel.title}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="ready-cta-section">
          <div className="container ready-cta-container">
            <h2 className="ready-cta-title">Ready for a cleaner space?</h2>
            <p className="ready-cta-subtitle">
              Book your {service.title} today and experience the Plenora standard of hospitality care.
            </p>
            <Button variant="primary" href="#book">
              Book Now
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
