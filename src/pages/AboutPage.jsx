import React from 'react';
import { ShieldCheck, Award, Heart, Leaf, CheckCircle2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Stats from '../sections/Stats';

import foundingImg from '../assets/images/about_founding.png';
import missionImg from '../assets/images/about_mission.png';

import '../styles/AboutPage.css';
import '../styles/WhyPlenoraPage.css';

export default function AboutPage() {
  const storyRows = [
    {
      step: 'OUR FOUNDING STORY',
      title: 'Elevating Standard Cleaning to Hospitality Standards',
      description: 'Plenora was founded on a simple realization: standard cleaning services lacked consistency, surface care knowledge, and trained personnel. We bridged the gap by introducing 5-star hotel housekeeping protocols to residential homes, commercial offices, doorstep car washing, and outdoor garden landscaping.',
      image: foundingImg,
      alt: 'Plenora Executive Leadership and Vision',
      checklist: [
        'Founded with 5-star hotel housekeeping protocols',
        'Standardized training academy for all technicians',
        'Zero compromise on surface longevity & material safety'
      ],
      reverse: false
    },
    {
      step: 'OUR MISSION & PROMISE',
      title: 'Meticulous Care For Every Space You Live & Work In',
      description: 'Our mission is to create healthier, pristine environments using hospital-grade disinfectants, 100% biodegradable eco-safe solutions, and high-efficiency machinery. Whether detailing a luxury vehicle or manicured garden lawn, we bring meticulous care to every corner.',
      image: missionImg,
      alt: 'Plenora Team Executing Mission',
      checklist: [
        'Hospital-grade sanitization & allergen extraction',
        'Transparent upfront estimates with zero hidden fees',
        '100% Satisfaction re-cleaning guarantee'
      ],
      reverse: true
    }
  ];

  const values = [
    {
      icon: <Award size={26} />,
      title: 'Uncompromised Quality',
      desc: 'Hospitality-grade standards applied to every home, commercial venue, vehicle, and garden.'
    },
    {
      icon: <ShieldCheck size={26} />,
      title: 'Safety & Integrity',
      desc: '100% background-verified, insured professionals who treat your property with absolute respect.'
    },
    {
      icon: <Leaf size={26} />,
      title: 'Environmental Care',
      desc: 'Child-safe, pet-friendly, zero-residue biodegradable disinfectants and eco-safe solvents.'
    },
    {
      icon: <Heart size={26} />,
      title: 'Customer-Centric Care',
      desc: 'Clear communication, punctual scheduling, and a 100% satisfaction guarantee.'
    }
  ];

  return (
    <div className="about-page">
      <Navbar />

      <main>
        {/* About Hero Banner */}
        <section className="about-hero-banner">
          <div className="container about-hero-container">
            <div className="section-badge">ABOUT PLENORA SERVICE</div>
            
            <h1 className="about-hero-title">
              Redefining Cleanliness Through <span className="highlight">Hospitality & Integrity</span>
            </h1>

            <p className="about-hero-subtitle">
              Learn how we combine hotel-grade standards, background-checked specialists, and eco-conscious technology to care for your spaces.
            </p>
          </div>
        </section>

        {/* Story Rows Section */}
        <section className="line-showcase-section">
          <div className="container">
            <div className="line-showcase-list">
              {storyRows.map((row, index) => (
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

        {/* Company Values Grid */}
        <section className="values-section">
          <div className="container">
            <div className="process-header" style={{ marginBottom: 50 }}>
              <div className="section-badge">OUR CORE VALUES</div>
              <h2 className="process-heading">Principles that guide everything we do</h2>
            </div>

            <div className="values-grid">
              {values.map((v, index) => (
                <div key={index} className="value-card">
                  <div className="value-icon-box">{v.icon}</div>
                  <h3 className="value-title">{v.title}</h3>
                  <p className="value-desc">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Metrics Bar */}
        <Stats />

        {/* Final CTA */}
        <section className="ready-cta-section">
          <div className="container ready-cta-container">
            <h2 className="ready-cta-title">Experience the Plenora difference</h2>
            <p className="ready-cta-subtitle">
              Book your premium service today and discover hospitality-grade cleanliness.
            </p>
            <Button variant="primary" href="#quote">
              Get a Free Quote
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
