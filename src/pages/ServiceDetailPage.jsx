import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  CheckCircle2, ChevronDown, ChevronUp, ShieldCheck, Award, Leaf, 
  ArrowRight, Phone, ArrowUpRight, ArrowLeft 
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import { useBooking } from '../context/BookingContext';
import { servicesData, getServiceBySlug } from '../data/servicesData';
import '../styles/ServiceDetailPage.css';

export default function ServiceDetailPage() {
  const { openBookingModal } = useBooking();
  const { slug } = useParams();
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);

  const service = getServiceBySlug(slug);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  if (!service) {
    return (
      <div className="sdp-page-ref">
        {/* Not Found Hero Header */}
        <section className="sdp-hero-section">
          <Navbar />
          <div className="sdp-hero-container">
            <div className="sdp-top-bar">
              <button onClick={() => navigate('/services')} className="sdp-back-btn">
                <ArrowLeft size={16} />
                <span>Back to Services</span>
              </button>
            </div>
            <div className="sdp-hero-badge">
              <span>SERVICE CATALOG</span>
            </div>
            <h1 className="sdp-hero-title">Service Not Found</h1>
            <p className="sdp-hero-subtext">
              The requested cleaning service could not be located. Please explore our full catalog below.
            </p>
            <div className="sdp-hero-actions" style={{ marginTop: 24 }}>
              <Link to="/services" className="sdp-btn-primary">
                <span>View All Services</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          
          <div className="sdp-hero-scallop-divider" aria-hidden="true">
            <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="sdp-cloud-svg">
              <path 
                d="M 0 90 L 0 45 Q 60 -15, 120 45 Q 185 -10, 250 45 Q 310 -20, 370 45 Q 435 -15, 500 45 Q 565 -25, 630 45 Q 700 -10, 770 45 Q 835 -20, 900 45 Q 965 -15, 1030 45 Q 1100 -25, 1170 45 Q 1235 -10, 1300 45 Q 1370 -20, 1440 45 L 1440 90 Z" 
                fill="#FFFDF5" 
              />
            </svg>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  // Get 3 related services
  const relatedServices = Object.values(servicesData)
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <div className="sdp-page-ref">
      {/* 1. Royal Blue Hero Section (With Top Back Navigation Button) */}
      <section className="sdp-hero-section">
        <Navbar />

        {/* Line-art background */}
        <div className="sdp-lineart-layer" aria-hidden="true">
          <svg className="sdp-lineart-icon lineart-top-left" viewBox="0 0 100 100">
            <path d="M35,20 L50,20 L55,30 L30,30 Z M42,30 L42,45 L58,45 L58,90 C58,93 53,95 42,95 Z" fill="none" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.18"/>
          </svg>
          <svg className="sdp-lineart-icon lineart-top-right" viewBox="0 0 120 120">
            <path d="M20,40 L80,40 L75,90 L25,90 Z" fill="none" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.18"/>
          </svg>
        </div>

        <div className="sdp-hero-container">
          {/* Top Back Button */}
          <div className="sdp-top-bar">
            <button onClick={() => navigate('/services')} className="sdp-back-btn">
              <ArrowLeft size={16} />
              <span>Back to Services</span>
            </button>
          </div>

          {/* Eyebrow Badge */}
          <div className="sdp-hero-badge">
            <span>{service.isAvailable ? service.category.toUpperCase() : 'COMING SOON • CURRENTLY UNAVAILABLE'}</span>
          </div>

          {/* Main Title */}
          <h1 className="sdp-hero-title">
            {service.title}
          </h1>

          {/* Subtext */}
          <p className="sdp-hero-subtext">
            {service.fullDescription}
          </p>

          {!service.isAvailable && (
            <div style={{
              color: '#FF4D4D',
              fontWeight: 700,
              fontSize: '1rem',
              marginTop: 16,
              marginBottom: 8
            }}>
              This service is currently unavailable in Kuttippuram (Coming Soon).
            </div>
          )}

          {/* Top Hero Buttons Grouped Cleanly */}
          <div className="sdp-hero-actions-wrapper">
            <div className="sdp-hero-actions">
              {service.isAvailable ? (
                <button onClick={() => openBookingModal(service.title)} className="sdp-btn-primary" style={{ border: 'none', cursor: 'pointer' }}>
                  <span>Book This Service</span>
                  <ArrowRight size={16} />
                </button>
              ) : (
                <button onClick={() => openBookingModal(service.title)} className="sdp-btn-primary" style={{ border: 'none', cursor: 'pointer' }}>
                  <span>Contact Us</span>
                  <ArrowRight size={16} />
                </button>
              )}
              <a href="tel:+918139895446" className="sdp-btn-secondary">
                <Phone size={15} fill="#111827" color="#111827" />
                <span>Call for Details</span>
              </a>
            </div>
          </div>
        </div>

        {/* Hero Scallop Divider into Cream Canvas */}
        <div className="sdp-hero-scallop-divider" aria-hidden="true">
          <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="sdp-cloud-svg">
            <path 
              d="M 0 90 L 0 45 Q 60 -15, 120 45 Q 185 -10, 250 45 Q 310 -20, 370 45 Q 435 -15, 500 45 Q 565 -25, 630 45 Q 700 -10, 770 45 Q 835 -20, 900 45 Q 965 -15, 1030 45 Q 1100 -25, 1170 45 Q 1235 -10, 1300 45 Q 1370 -20, 1440 45 L 1440 90 Z" 
              fill="#FFFDF5" 
            />
          </svg>
        </div>
      </section>

      {/* 2. Breadcrumb Navigation */}
      <div className="sdp-breadcrumb-bar">
        <div className="sdp-main-container">
          <ul className="sdp-breadcrumb-list">
            <li><Link to="/">Home</Link></li>
            <li className="sdp-sep">/</li>
            <li><Link to="/services">Services</Link></li>
            <li className="sdp-sep">/</li>
            <li className="sdp-active">{service.title}</li>
          </ul>
        </div>
      </div>

      {/* 3. Main Content Sections */}
      <main className="sdp-main-canvas">
        <div className="sdp-main-container">
          
          {/* Service Image & Scope Overview */}
          <div className="sdp-overview-grid">
            <div className="sdp-image-card">
              <img src={service.heroImage} alt={service.title} className="sdp-hero-img" />
            </div>

            <div className="sdp-scope-card">
              <h2 className="sdp-section-title">
                What's Included
                <span className="sdp-title-underline"></span>
              </h2>
              <p className="sdp-scope-desc">
                Our hospitality-trained professionals deliver a comprehensive cleaning scope with zero compromise on surface safety.
              </p>

              <div className="sdp-checklist-grid">
                {service.whatsIncluded.map((item, index) => (
                  <div key={index} className="sdp-checklist-item">
                    <div className="sdp-check-icon-badge">
                      <CheckCircle2 size={16} color="#FFFFFF" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>





          {/* FAQ Accordion Section */}
          {service.faqs && service.faqs.length > 0 && (
            <div className="sdp-faq-block">
              <h2 className="sdp-section-title text-center">
                Frequently Asked Questions
                <span className="sdp-title-underline center"></span>
              </h2>

              <div className="sdp-faq-list">
                {service.faqs.map((faq, index) => (
                  <div key={index} className={`sdp-faq-item ${openFaq === index ? 'active' : ''}`}>
                    <button className="sdp-faq-question-btn" onClick={() => toggleFaq(index)}>
                      <span>{faq.question}</span>
                      {openFaq === index ? <ChevronUp size={20} color="#0B42F6" /> : <ChevronDown size={20} color="#64748B" />}
                    </button>
                    {openFaq === index && (
                      <div className="sdp-faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Cleaning Services */}
          <div className="sdp-related-block">
            <div className="sdp-related-header">
              <h2 className="sdp-section-title">
                Explore More Services
                <span className="sdp-title-underline"></span>
              </h2>
              <Link to="/services" className="sdp-view-all-link">
                <span>View All Services</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="sdp-related-grid">
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

        </div>
      </main>

      <Footer />
    </div>
  );
}


