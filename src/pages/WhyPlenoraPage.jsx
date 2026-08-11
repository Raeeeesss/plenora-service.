import React from 'react';
import { CheckCircle2, Check, X, Star } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Stats from '../sections/Stats';

import hospitalityImg from '../assets/images/why_hospitality.png';
import specialistsImg from '../assets/images/why_specialists.png';
import ecoImg from '../assets/images/why_eco.png';
import equipmentImg from '../assets/images/why_equipment.png';
import vehicleImg from '../assets/images/service_vehicle_detailing.png';
import gardeningImg from '../assets/images/service_gardening_care.png';

import '../styles/WhyPlenoraPage.css';

export default function WhyPlenoraPage() {
  const showcaseRows = [
    {
      step: '01 / HOSPITALITY STANDARDS',
      title: '5-Star Hospitality Protocols For Every Space',
      description: 'Our techniques are derived directly from luxury 5-star hotel housekeeping standards. We inspect every corner, window frame, and delicate surface, ensuring a pristine hospitality-grade clean that elevates your environment.',
      image: hospitalityImg,
      alt: 'Luxury 5-Star Hospitality Suite Cleaning',
      checklist: [
        'Deep stain extraction & optical glass polishing',
        'Hospital-grade surface sanitization',
        'Zero scratch guarantee on brass, marble & chrome'
      ],
      reverse: false
    },
    {
      step: '02 / VETTED SPECIALISTS',
      title: 'Background-Checked, Uniformed & Insured Crew',
      description: 'Your security and peace of mind are non-negotiable. Every Plenora technician undergoes rigorous background checks, extensive technical training, and arrives in full uniform with comprehensive commercial safety insurance.',
      image: specialistsImg,
      alt: 'Plenora Uniformed Specialist Cleaning Team',
      checklist: [
        '100% Background-verified personnel',
        'Comprehensive commercial liability coverage',
        'Equipped with specialized heavy-duty tools'
      ],
      reverse: true
    },
    {
      step: '03 / ECO-SAFE FORMULATIONS',
      title: 'Child-Safe, Pet-Friendly & Zero-Residue Solvents',
      description: 'We believe cleanliness should never compromise health. Our non-toxic, pH-balanced disinfectants eliminate 99.9% of bacteria and allergens without harsh fumes or corrosive chemical residues.',
      image: ecoImg,
      alt: 'Eco-Friendly Non-Toxic Cleaning Products',
      checklist: [
        'Biodegradable plant-based solvents',
        'Safe for children, pets & allergy sufferers',
        'Preserves delicate stone, wood & leather finishes'
      ],
      reverse: false
    },
    {
      step: '04 / ADVANCED MACHINERY',
      title: 'State-of-the-Art Heavy Duty Equipment',
      description: 'From de-ionized solar water poles and rotary interlock pressure washers to commercial hot-water extraction units, we invest in cutting-edge machinery to deliver superior speed and thoroughness.',
      image: equipmentImg,
      alt: 'Commercial Floor Polishing & Steam Equipment',
      checklist: [
        'Rotary high-pressure jet technology',
        'Zero-TDS purified water systems',
        'Deep extraction hot-water steam units'
      ],
      reverse: true
    },
    {
      step: '05 / CAR WASHING & DETAILING',
      title: 'Doorstep Vehicle Foam Wash & Interior Steam Care',
      description: 'We bring specialized mobile pressure snow foam, leather trim conditioning, and trunk vacuuming directly to your home garage or corporate fleet parking.',
      image: vehicleImg,
      alt: 'Luxury Vehicle Foam Wash Detailing',
      checklist: [
        'pH-Neutral scratch-free snow foam pre-wash',
        'Deep interior vacuuming & leather conditioning',
        'Hydrophobic glass sealant & alloy wheel scrubbing'
      ],
      reverse: false
    },
    {
      step: '06 / GARDEN & LANDSCAPING CARE',
      title: 'Precision Lawn Mowing, Hedge Pruning & Yard Care',
      description: 'Maintain lush, thriving green outdoor spaces with Plenora’s dedicated horticulture team. We provide lawn edging, shrub shaping, weed removal, and organic soil fertilization.',
      image: gardeningImg,
      alt: 'Professional Lawn Mowing and Garden Care',
      checklist: [
        'Precision cordless lawn mowing & edge detailing',
        'Organic plant nutrient & eco fertilizer treatment',
        'Complete weed eradication & garden waste disposal'
      ],
      reverse: true
    }
  ];

  const comparisonData = [
    { feature: 'Hospitality-Trained Cleaning Crew', plenora: true, others: false },
    { feature: 'Doorstep Car Foam Washing & Fleet Detailing', plenora: true, others: false },
    { feature: 'Garden Maintenance & Outdoor Landscaping Care', plenora: true, others: false },
    { feature: 'Mechanized Heavy-Duty Steam Extraction', plenora: true, others: false },
    { feature: 'pH-Balanced Acid-Free Cleaners', plenora: true, others: false },
    { feature: 'Comprehensive Property Insurance', plenora: true, others: false },
    { feature: '100% Satisfaction Re-Clean Guarantee', plenora: true, others: false },
    { feature: 'Transparent Upfront Estimates', plenora: true, others: 'Unpredictable' }
  ];

  const testimonials = [
    {
      quote: "Plenora transformed our marble flooring and sofa upholstery after our home renovation. The team was punctual, courteous, and incredibly thorough.",
      author: "Vikram R.",
      role: "Luxury Villa Owner"
    },
    {
      quote: "As a corporate fleet manager, our vehicles require immaculate presentation daily. Plenora's foam detailing is second to none.",
      author: "Ananya M.",
      role: "Corporate Operations Director"
    },
    {
      quote: "Their bathroom deep clean removed years of stubborn hard water scaling from our glass partition without a single scratch. Highly recommended!",
      author: "Siddharth K.",
      role: "Apartment Resident"
    }
  ];

  return (
    <div className="why-plenora-page">
      <Header />

      <main>
        {/* Header Banner */}
        <section className="why-header-banner">
          <div className="container why-header-container">
            <div className="section-badge">WHY PLENORA</div>
            
            <h1 className="why-header-title">
              The Standard of Excellence for <span className="highlight">Premium Spaces</span>
            </h1>

            <p className="why-header-subtitle">
              Discover how Plenora combines 5-star hotel protocols, vetted specialists, doorstep car washing, and garden maintenance to deliver uncompromised care.
            </p>
          </div>
        </section>

        {/* Line-by-Line Visual Showcase */}
        <section className="line-showcase-section">
          <div className="container">
            <div className="line-showcase-list">
              {showcaseRows.map((row, index) => (
                <div key={index} className={`line-row ${row.reverse ? 'reverse' : ''}`}>
                  <div className="line-image-wrapper">
                    <img src={row.image} alt={row.alt} className="line-image" />
                  </div>

                  <div className="line-content">
                    <div className="line-step-number">{row.step}</div>
                    <h2 className="line-title">{row.title}</h2>
                    <p className="line-description">{row.description}</p>

                    <ul className="line-checklist">
                      {row.checklist.map((item, idx) => (
                        <li key={idx} className="line-checklist-item">
                          <CheckCircle2 size={18} className="line-check-icon" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Performance Metrics Stats Bar */}
        <Stats />

        {/* Comparison Matrix Table */}
        <section className="comparison-section">
          <div className="container">
            <div className="process-header" style={{ marginBottom: 50 }}>
              <div className="section-badge">THE COMPARISON</div>
              <h2 className="process-heading">How Plenora compares to standard cleaners</h2>
            </div>

            <div className="comparison-table-wrapper">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Service Standard</th>
                    <th className="plenora-col">Plenora Service</th>
                    <th>Standard Local Cleaners</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index}>
                      <td className="feature-name">{row.feature}</td>
                      <td className="plenora-cell">
                        {row.plenora === true ? <Check className="check-icon" size={20} /> : row.plenora}
                      </td>
                      <td className="others-cell">
                        {row.others === false ? <X className="cross-icon" size={20} /> : row.others}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials-section">
          <div className="container">
            <div className="process-header" style={{ marginBottom: 50 }}>
              <div className="section-badge">CLIENT REVIEWS</div>
              <h2 className="process-heading">Trusted by homeowners and executives</h2>
            </div>

            <div className="testimonials-grid">
              {testimonials.map((t, index) => (
                <div key={index} className="testimonial-card">
                  <div>
                    <div className="testimonial-stars">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
                      ))}
                    </div>
                    <p className="testimonial-quote">"{t.quote}"</p>
                  </div>
                  <div>
                    <div className="testimonial-author">{t.author}</div>
                    <div className="testimonial-role">{t.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="ready-cta-section">
          <div className="container ready-cta-container">
            <h2 className="ready-cta-title">Elevate your space today</h2>
            <p className="ready-cta-subtitle">
              Join hundreds of satisfied clients who trust Plenora for hospitality-grade cleanliness.
            </p>
            <Button variant="primary" href="#quote">
              Get Your Free Estimate
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
