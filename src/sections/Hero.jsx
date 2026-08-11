import React from 'react';
import { Link } from 'react-router-dom';
import teamPhoto from '../assets/images/ref_hero_right_card.png';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-ref-container">
        <div className="hero-split-grid">
          
          {/* Left Text Content */}
          <div className="hero-ref-content">
            <div className="hero-ref-eyebrow">
              Quality cleaning at a fair price.
            </div>

            <h1 className="hero-ref-title">
              Specialized, efficient, and thorough cleaning services
            </h1>

            <p className="hero-ref-description">
              We provide performing cleaning tasks using the least amount of time, energy, and money.
            </p>

            <div className="hero-ref-actions">
              <Link to="/contact" className="btn-ref-primary">
                Get Start Now
              </Link>

              <Link to="/services" className="btn-ref-secondary">
                View all Services
              </Link>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="hero-right-image-wrapper">
            <img 
              src={teamPhoto} 
              alt="Plenora Professional Cleaning Team" 
              className="hero-right-photo"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
