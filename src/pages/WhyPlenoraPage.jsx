import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, ArrowUpRight, Star, ShieldCheck, Clock, Award, Leaf, Users, MessageSquare, ThumbsUp, Calendar, MapPin, Smile } from 'lucide-react';
import Navbar from '../components/Navbar';
import logoImg from '../assets/logo.png';
import cleanersCreamBgImg from '../assets/images/under_hero_cleaners_creambg.png';
import Footer from '../components/Footer';

import avatar1 from '../assets/images/hero_clean_action1.png';
import avatar2 from '../assets/images/ref_hero_right_card.png';
import avatar3 from '../assets/images/under_hero_cleaners_creambg.png';

import '../styles/WhyPlenoraPage.css';

export default function WhyPlenoraPage() {
  return (
    <div className="why-plenora-page-ref">
      <main>
        {/* 1. Royal Blue Hero Section */}
        <section className="wp-hero-section">
          {/* Floating Top Navigation Pill */}
          <Navbar />

          {/* Decorative Vector Line Art Layer */}
          <div className="wp-lineart-layer" aria-hidden="true">
            <svg className="wp-lineart-icon lineart-top-left" viewBox="0 0 100 100">
              <path d="M35,20 L50,20 L55,30 L30,30 Z M42,30 L42,45 L58,45 L58,90 C58,93 53,95 42,95 Z" fill="none" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.18"/>
            </svg>
            <svg className="wp-lineart-icon lineart-top-right" viewBox="0 0 120 120">
              <path d="M20,40 L80,40 L75,90 L25,90 Z" fill="none" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.18"/>
            </svg>
          </div>

          <div className="wp-hero-container">
            {/* Badge */}
            <div className="wp-hero-badge">
              <span>WHY PLENORA</span>
            </div>

            {/* Main Headline */}
            <h1 className="wp-hero-title">
              Why Choose<br />
              Plenora <span className="wp-title-highlight">Service?
                <svg className="wp-wavy-svg" viewBox="0 0 240 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 3 10 C 20 2, 35 16, 55 9 C 75 2, 90 16, 110 9 C 130 2, 145 16, 165 9 C 185 2, 200 16, 237 9" stroke="#FFCC00" strokeWidth="4.5" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Subtext */}
            <p className="wp-hero-subtext">
              We go beyond just cleaning. We deliver trust, quality, and a spotless experience every single time.
            </p>
          </div>

          {/* Bottom Cloud Divider into Cream Canvas */}
          <div className="wp-hero-scallop-divider" aria-hidden="true">
            <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="wp-cloud-svg">
              <path 
                d="M 0 90 L 0 45 Q 144 5, 288 45 Q 432 15, 576 45 Q 720 0, 864 45 Q 1008 15, 1152 45 Q 1296 5, 1440 45 L 1440 90 Z" 
                fill="#FFFDF5" 
              />
            </svg>
          </div>
        </section>

        {/* 2. Main Why Plenora Section (Warm Cream Background #FFFDF5) */}
        <section className="wp-main-section">
          <div className="wp-main-container">
            
            {/* Center Cleaners Photo & 4 Key Pillars Layout */}
            <div className="wp-pillars-composition">
              {/* Left Column Pillars */}
              <div className="wp-pillar-column wp-left-col">
                <div className="wp-pillar-item">
                  <div className="wp-pillar-icon-wrapper">
                    <ShieldCheck size={32} color="#0B42F6" />
                  </div>
                  <h3 className="wp-pillar-title">
                    Trusted &amp; Insured
                    <span className="wp-pillar-underline"></span>
                  </h3>
                  <p className="wp-pillar-desc">
                    Your property is protected with full insurance coverage for complete peace of mind.
                  </p>
                </div>

                <div className="wp-pillar-item">
                  <div className="wp-pillar-icon-wrapper">
                    <Clock size={32} color="#0B42F6" />
                  </div>
                  <h3 className="wp-pillar-title">
                    On-Time, Every Time
                    <span className="wp-pillar-underline"></span>
                  </h3>
                  <p className="wp-pillar-desc">
                    We respect your time and always arrive on schedule, ready to deliver the best.
                  </p>
                </div>
              </div>

              {/* Center Column: Cleaners Photo with Waist Scallop Overlay */}
              <div className="wp-center-col">
                <div className="wp-cleaner-wrapper">
                  <img 
                    src={cleanersCreamBgImg} 
                    alt="Plenora Professional Cleaners" 
                    className="wp-cleaner-img" 
                  />
                  {/* Cream Cloud Overlay at Waist */}
                  <div className="wp-cleaner-scallop" aria-hidden="true">
                    <svg viewBox="0 0 400 45" preserveAspectRatio="none" className="wp-waist-cloud-svg">
                      <path 
                        d="M 0 45 L 0 25 Q 20 0, 40 25 Q 60 -5, 80 25 Q 100 5, 120 25 Q 140 -5, 160 25 Q 180 5, 200 25 Q 220 -5, 240 25 Q 260 5, 280 25 Q 300 -5, 320 25 Q 340 5, 360 25 Q 380 0, 400 25 L 400 45 Z" 
                        fill="#FFFDF5" 
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Right Column Pillars */}
              <div className="wp-pillar-column wp-right-col">
                <div className="wp-pillar-item">
                  <div className="wp-pillar-icon-wrapper">
                    <Award size={32} color="#0B42F6" />
                  </div>
                  <h3 className="wp-pillar-title">
                    Quality You Can See
                    <span className="wp-pillar-underline"></span>
                  </h3>
                  <p className="wp-pillar-desc">
                    We follow a detailed cleaning process to ensure exceptional results every time.
                  </p>
                </div>

                <div className="wp-pillar-item">
                  <div className="wp-pillar-icon-wrapper">
                    <Leaf size={32} color="#0B42F6" />
                  </div>
                  <h3 className="wp-pillar-title">
                    Safe &amp; Eco-Friendly
                    <span className="wp-pillar-underline"></span>
                  </h3>
                  <p className="wp-pillar-desc">
                    We use eco-friendly products that are safe for your family, pets, and the environment.
                  </p>
                </div>
              </div>
            </div>

            {/* 4 Value Cards Grid */}
            <div className="wp-value-cards-grid">
              <div className="wp-value-card">
                <div className="wp-value-icon-wrapper">
                  <Users size={28} color="#0B42F6" />
                </div>
                <h3 className="wp-value-title">Trained Professionals</h3>
                <p className="wp-value-desc">Our team is trained, verified, and passionate about delivering excellent service.</p>
              </div>

              <div className="wp-value-card">
                <div className="wp-value-icon-wrapper">
                  <MessageSquare size={28} color="#0B42F6" />
                </div>
                <h3 className="wp-value-title">Customer First</h3>
                <p className="wp-value-desc">Your satisfaction is our priority. We listen, we care, and we make it right.</p>
              </div>

              <div className="wp-value-card">
                <div className="wp-value-icon-wrapper">
                  <ThumbsUp size={28} color="#0B42F6" />
                </div>
                <h3 className="wp-value-title">Satisfaction Guarantee</h3>
                <p className="wp-value-desc">Not happy with the service? We'll come back and make it right.</p>
              </div>

              <div className="wp-value-card">
                <div className="wp-value-icon-wrapper">
                  <Calendar size={28} color="#0B42F6" />
                </div>
                <h3 className="wp-value-title">Flexible Booking</h3>
                <p className="wp-value-desc">Book at your convenience with same-day &amp; advance scheduling.</p>
              </div>
            </div>

            {/* Counter / Stats Bar */}
            <div className="wp-stats-bar">
              <div className="wp-stat-item">
                <div className="wp-stat-icon-wrapper">
                  <Star size={24} color="#0B42F6" />
                </div>
                <div className="wp-stat-text-group">
                  <span className="wp-stat-number">5000+</span>
                  <span className="wp-stat-label">Happy Customers</span>
                </div>
              </div>

              <div className="wp-stat-item">
                <div className="wp-stat-icon-wrapper">
                  <Calendar size={24} color="#0B42F6" />
                </div>
                <div className="wp-stat-text-group">
                  <span className="wp-stat-number">10000+</span>
                  <span className="wp-stat-label">Cleanings Completed</span>
                </div>
              </div>

              <div className="wp-stat-item">
                <div className="wp-stat-icon-wrapper">
                  <MapPin size={24} color="#0B42F6" />
                </div>
                <div className="wp-stat-text-group">
                  <span className="wp-stat-number">15+</span>
                  <span className="wp-stat-label">Areas We Serve</span>
                </div>
              </div>

              <div className="wp-stat-item">
                <div className="wp-stat-icon-wrapper">
                  <Smile size={24} color="#0B42F6" />
                </div>
                <div className="wp-stat-text-group">
                  <span className="wp-stat-number">4.7★</span>
                  <span className="wp-stat-label">Average Rating</span>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

