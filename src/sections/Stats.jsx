import React from 'react';
import cleanersCreamBgImg from '../assets/images/under_hero_cleaners_creambg.png';
import './Stats.css';

export default function Stats() {
  const tickerItems = [
    'FLOOR', '•', 'SOFA', '•', 'HOUSE', '•', 'CORPORATE', '•', 
    'OFFICE', '•', 'CLEAN', '•', 'GLASS', '•', 'CLEAR', '•', 'CONFIDENT'
  ];

  return (
    <section className="under-hero-section">
      {/* Main Feature Canvas */}
      <div className="under-hero-container">
        <div className="under-hero-layout">
          
          {/* Left Column Features */}
          <div className="under-hero-column under-hero-left-col">
            {/* Top Left Feature */}
            <div className="under-hero-feature-item">
              <div className="under-hero-icon-wrapper">
                <svg width="56" height="56" viewBox="0 0 64 64" fill="none" stroke="#0B42F6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M42 12 C34 6 22 14 26 24 C18 20 10 30 20 36 C12 40 18 52 30 46 L50 14 Z" />
                  <path d="M18 48 L8 58" strokeWidth="3" />
                  <path d="M46 8 L54 6 M52 14 L58 14 M44 4 L44 10" strokeWidth="2" />
                  <circle cx="22" cy="20" r="1.5" fill="#0B42F6" />
                  <circle cx="16" cy="28" r="1.5" fill="#0B42F6" />
                </svg>
              </div>
              <h3 className="under-hero-feature-title">Fully Insured</h3>
              <p className="under-hero-feature-desc">Your home is safe hands</p>
            </div>

            {/* Bottom Left Feature */}
            <div className="under-hero-feature-item">
              <div className="under-hero-icon-wrapper">
                <svg width="56" height="56" viewBox="0 0 64 64" fill="none" stroke="#0B42F6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M24 16 H40 M32 16 V8 M28 8 H36" />
                  <path d="M20 24 H44 V30 H20 Z" />
                  <path d="M32 30 V56" strokeWidth="3" />
                  <path d="M18 36 Q22 42 26 36 T34 36 T42 36 T50 36" strokeWidth="2" />
                  <path d="M12 12 L16 16 M52 12 L48 16" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="under-hero-feature-title">Same-Day Service</h3>
              <p className="under-hero-feature-desc">Book today, we clean today</p>
            </div>
          </div>

          {/* Center Column: Waist-Up Cleaners Photo */}
          <div className="under-hero-center-col">
            <div className="under-hero-cleaner-wrapper">
              <img 
                src={cleanersCreamBgImg} 
                alt="Plenora Professional Cleaners Team (Waist Up)" 
                className="under-hero-cleaner-img" 
              />
              {/* Cream Cloud Overlay at Waist of Cleaners */}
              <div className="under-hero-cleaner-scallop" aria-hidden="true">
                <svg viewBox="0 0 400 45" preserveAspectRatio="none" className="cleaner-waist-cloud-svg">
                  <path 
                    d="M 0 45 L 0 25 Q 20 0, 40 25 Q 60 -5, 80 25 Q 100 5, 120 25 Q 140 -5, 160 25 Q 180 5, 200 25 Q 220 -5, 240 25 Q 260 5, 280 25 Q 300 -5, 320 25 Q 340 5, 360 25 Q 380 0, 400 25 L 400 45 Z" 
                    fill="#FFFDF5" 
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column Features */}
          <div className="under-hero-column under-hero-right-col">
            {/* Top Right Feature */}
            <div className="under-hero-feature-item">
              <div className="under-hero-icon-wrapper">
                <svg width="56" height="56" viewBox="0 0 64 64" fill="none" stroke="#0B42F6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 12 L48 44 M48 12 L16 44" />
                  <path d="M12 8 L24 20 M52 8 L40 20" strokeWidth="3" />
                  <path d="M14 54 C20 48 30 48 36 52 L50 52 C54 52 56 48 56 44" strokeWidth="2" />
                  <path d="M32 6 L32 10 M28 8 L36 8" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="under-hero-feature-title">Satisfaction Guarantee</h3>
              <p className="under-hero-feature-desc">100% satisfaction or we make it right</p>
            </div>

            {/* Bottom Right Feature */}
            <div className="under-hero-feature-item">
              <div className="under-hero-icon-wrapper">
                <svg width="56" height="56" viewBox="0 0 64 64" fill="none" stroke="#0B42F6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 52 V32 L24 38 V28 L36 34 V52 Z" />
                  <rect x="16" y="38" width="4" height="4" fill="#0B42F6" />
                  <rect x="28" y="40" width="4" height="4" fill="#0B42F6" />
                  <path d="M44 52 L52 16" strokeWidth="3" />
                  <path d="M46 16 L58 16 L54 28 L42 28 Z" fill="none" />
                  <path d="M48 8 L48 12 M44 10 L52 10" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="under-hero-feature-title">Deep Cleaning</h3>
              <p className="under-hero-feature-desc">Thorough cleaning for spotless home</p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Organic Cloud Divider Transition */}
      <div className="under-hero-bottom-scallop" aria-hidden="true">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="under-hero-cloud-svg">
          <path 
            d="M 0 0 L 0 45 Q 60 105, 120 45 Q 185 100, 250 45 Q 310 110, 370 45 Q 435 105, 500 45 Q 565 115, 630 45 Q 700 100, 770 45 Q 835 110, 900 45 Q 965 105, 1030 45 Q 1100 115, 1170 45 Q 1235 100, 1300 45 Q 1370 110, 1440 45 L 1440 0 Z" 
            fill="#FFFDF5" 
          />
        </svg>
      </div>

      {/* Service Ticker Strip */}
      <div className="under-hero-ticker-strip">
        <div className="under-hero-ticker-track">
          <div className="under-hero-ticker-group">
            {tickerItems.map((item, idx) => (
              <span key={`t1-${idx}`} className={item === '✦' ? 'ticker-sparkle' : 'ticker-text'}>
                {item}
              </span>
            ))}
          </div>
          <div className="under-hero-ticker-group" aria-hidden="true">
            {tickerItems.map((item, idx) => (
              <span key={`t2-${idx}`} className={item === '✦' ? 'ticker-sparkle' : 'ticker-text'}>
                {item}
              </span>
            ))}
          </div>
          <div className="under-hero-ticker-group" aria-hidden="true">
            {tickerItems.map((item, idx) => (
              <span key={`t3-${idx}`} className={item === '✦' ? 'ticker-sparkle' : 'ticker-text'}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

