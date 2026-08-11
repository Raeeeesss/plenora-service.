import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { servicesData } from '../data/servicesData';
import '../styles/ServicesPage.css';

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('All Services');

  const categories = [
    'All Services',
    'Home & Office',
    'Bathrooms',
    'Vehicle',
    'Outdoor',
    'Specialized'
  ];

  const servicesList = Object.values(servicesData);

  const filteredServices = servicesList.filter((service) => {
    if (activeCategory === 'All Services') return true;
    if (activeCategory === 'Bathrooms' && service.category === 'Bathroom') return true;
    return service.category === activeCategory;
  });

  return (
    <div className="services-page">
      <Header />

      <main>
        {/* Compact Dedicated Services Header Banner */}
        <section className="services-compact-header">
          <div className="container services-compact-container">
            <div className="section-badge">OUR SERVICE CATALOG</div>
            
            <h1 className="services-compact-title">
              Professional Cleaning for <span className="highlight">Every Space</span>
            </h1>

            <p className="services-compact-subtitle">
              From deep home cleaning and doorstep car washing & foam detailing to outdoor garden & landscaping care, explore our hospitality-grade solutions tailored to your space.
            </p>
          </div>
        </section>

        {/* Category Filter Tabs & 9 Cards Grid */}
        <section className="filter-tabs-section" id="catalog">
          <div className="container">
            <ul className="filter-tabs-list">
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    className={`filter-tab-btn ${activeCategory === cat ? 'active' : ''}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>

            <div className="catalog-grid">
              {filteredServices.map((service) => (
                <ServiceCard
                  key={service.slug}
                  slug={service.slug}
                  title={service.title}
                  category={service.category}
                  description={service.shortDescription}
                  price={service.price}
                  image={service.heroImage}
                  alt={service.title}
                />
              ))}
            </div>
          </div>
        </section>

        {/* See the Difference Before & After Section */}
        <BeforeAfterSlider />

        {/* Ready for a Cleaner Space CTA Section */}
        <section className="ready-cta-section">
          <div className="container ready-cta-container">
            <h2 className="ready-cta-title">Ready for a cleaner space?</h2>
            <p className="ready-cta-subtitle">
              Book your premium service today and experience the Plenora standard of meticulous care.
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
