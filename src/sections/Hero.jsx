import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Star, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import logoImg from '../assets/logo.png';
import { useBooking } from '../context/BookingContext';
import sofaCleaningImg from '../assets/images/service_sofa_mattress_cleaning.png';
import actionCleaningImg from '../assets/images/hero_clean_action1.png';
import './Hero.css';

export default function Hero() {
  const { openBookingModal } = useBooking();

  return (
    <section className="hero-section-ref">
      {/* Decorative Background Line Art Layer */}
      <div className="hero-lineart-layer" aria-hidden="true">
        {/* Spray Bottle & Sponge */}
        <svg className="lineart-icon lineart-top-left" viewBox="0 0 100 100">
          <path d="M35,20 L50,20 L55,30 L30,30 Z M42,30 L42,45 L58,45 L58,90 C58,93 53,95 42,95 C31,95 26,93 26,90 L26,45 L42,45 Z M42,40 L25,48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

        {/* Duster & Sparkles */}
        <svg className="lineart-icon lineart-top-right" viewBox="0 0 120 120">
          <path d="M60,95 L85,25 M60,40 Q40,20 25,40 Q10,60 30,70 Q50,80 60,40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M95,40 L105,40 M100,35 L100,45 M20,25 L26,25 M23,22 L23,28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>

        {/* Vacuum Cleaner */}
        <svg className="lineart-icon lineart-mid-left" viewBox="0 0 120 120">
          <path d="M20,60 C20,40 40,30 60,30 C80,30 100,40 100,60 L100,80 L20,80 Z M30,80 L30,90 M90,80 L90,90" fill="none" stroke="currentColor" strokeWidth="2.5"/>
        </svg>

        {/* House / Building Outline */}
        <svg className="lineart-icon lineart-mid-right" viewBox="0 0 120 120">
          <path d="M60,20 L20,55 L30,55 L30,90 L90,90 L90,55 L100,55 Z M45,90 L45,65 L75,65 L75,90" fill="none" stroke="currentColor" strokeWidth="2.5"/>
        </svg>

        {/* Mop & Bucket */}
        <svg className="lineart-icon lineart-bot-left" viewBox="0 0 100 100">
          <path d="M20,40 L80,40 L75,90 L25,90 Z M30,40 C30,25 70,25 70,40" fill="none" stroke="currentColor" strokeWidth="2.5"/>
        </svg>

        {/* Bubbles */}
        <svg className="lineart-icon lineart-bot-right" viewBox="0 0 100 100">
          <circle cx="30" cy="30" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="65" cy="25" r="14" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="75" cy="60" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </div>

      {/* 5. Floating Top Navigation Pill */}
      <Navbar />

      {/* 8, 9, 10, 11. Main Heading & Supporting Description */}
      <div className="hero-headline-container">
        <h1 className="hero-ref-heading">
          Specialized Cleaning<br />
          Services You <span className="hero-rely-phrase">Can Rely On
            <svg className="hero-wavy-svg" viewBox="0 0 220 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 3 10 C 20 2, 35 16, 55 9 C 75 2, 90 16, 110 9 C 130 2, 145 16, 165 9 C 185 2, 200 16, 217 9" stroke="#FFCC00" strokeWidth="4.5" strokeLinecap="round" />
            </svg>
          </span>
        </h1>

        <p className="hero-ref-subtext">
          Professional residential &amp; commercial cleaning services — houses, apartments, offices &amp; more. Same-day booking available.
        </p>
      </div>

      {/* 12, 13, 14, 15. Image Composition & Yellow Floating Badge */}
      <div className="hero-image-composition">
        {/* Floating Yellow Badge overlapping top-left of Left Image Card */}
        <button onClick={() => openBookingModal()} className="hero-floating-badge-wrapper" title="Book Now & Clean Confident" style={{ background: 'none', border: 'none', padding: 0 }}>
          <div className="hero-badge-rotating-text">
            <svg viewBox="0 0 140 140" width="140" height="140">
              <path id="badgeTextCircle" d="M 70, 70 m -52, 0 a 52,52 0 1,1 104,0 a 52,52 0 1,1 -104,0" fill="none" />
              <text fill="#FFFFFF" fontSize="10.5" fontWeight="700" letterSpacing="2.2">
                <textPath href="#badgeTextCircle">
                  BOOK NOW &amp; CLEAN CONFIDENT • 
                </textPath>
              </text>
            </svg>
          </div>
          <div className="hero-badge-yellow-starburst">
            <ArrowUpRight size={28} strokeWidth={2.8} color="#111827" />
          </div>
        </button>

        {/* Left Image Card - Top-Right Arch Curve */}
        <div className="hero-img-card hero-img-card-left">
          <img 
            src={sofaCleaningImg} 
            alt="Plenora sofa and mattress cleaning in action" 
            className="hero-card-photo" 
          />
        </div>

        {/* Right Image Card - Top-Left Arch Curve */}
        <div className="hero-img-card hero-img-card-right">
          <img 
            src={actionCleaningImg} 
            alt="Plenora professional window and surface cleaning" 
            className="hero-card-photo" 
          />
        </div>
      </div>

      {/* 17. Bottom Organic Cloud Divider */}
      <div className="hero-scallop-divider" aria-hidden="true">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="hero-cloud-svg">
          <path 
            d="M 0 90 L 0 45 Q 60 -15, 120 45 Q 185 -10, 250 45 Q 310 -20, 370 45 Q 435 -15, 500 45 Q 565 -25, 630 45 Q 700 -10, 770 45 Q 835 -20, 900 45 Q 965 -15, 1030 45 Q 1100 -25, 1170 45 Q 1235 -10, 1300 45 Q 1370 -20, 1440 45 L 1440 90 Z" 
            fill="#FFFDF5" 
          />
        </svg>
      </div>
    </section>
  );
}


