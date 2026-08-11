import React from 'react';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';
import { servicesData } from '../data/servicesData';
import './Services.css';

export default function Services() {
  const featuredServices = [
    servicesData['house-office-deep-cleaning'],
    servicesData['vehicle-foam-washing'],
    servicesData['garden-landscaping-care']
  ];

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="services-header">
          <div className="services-title-wrapper">
            <div className="section-badge">WHAT WE DO</div>
            <h2 className="section-heading">Cleaning solutions for every space.</h2>
          </div>

          <Button variant="secondary" href="/services">
            View All Services
          </Button>
        </div>

        <div className="services-grid">
          {featuredServices.map((service) => (
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
  );
}
