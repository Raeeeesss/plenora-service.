import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, ArrowUpRight } from 'lucide-react';
import actionImg from '../assets/images/hero_clean_action1.png';
import teamImg from '../assets/images/ref_hero_right_card.png';
import deepCleanImg from '../assets/images/service_deep_cleaning.png';
import './Process.css';

export default function Process() {
  const steps = [
    {
      step: '01',
      title: 'BOOK ONLINE',
      description: 'Choose your service, select date & time and book in just a few clicks.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0B42F6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
          <path d="M9 16l2 2 4-4"></path>
        </svg>
      )
    },
    {
      step: '02',
      title: 'WE ARRIVE',
      description: 'Our professional cleaner arrives on time, fully equipped and ready to clean.',
      image: teamImg,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0B42F6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a5 5 0 0 0-5 5v1h10V7a5 5 0 0 0-5-5z"></path>
          <path d="M6 8h12"></path>
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"></path>
        </svg>
      )
    },
    {
      step: '03',
      title: 'WE CLEAN',
      description: 'We clean every corner with care using safe products and proven techniques.',
      image: actionImg,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0B42F6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 2h4M12 2v4M8 6h8l1 4H7l1-4zM8 10l-1 12h10l-1-12"></path>
          <path d="M19 6l2-2M20 10l2 1"></path>
        </svg>
      )
    },
    {
      step: '04',
      title: 'YOU RELAX',
      description: "Enjoy your spotless space and peace of mind. It's that simple!",
      image: deepCleanImg,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0B42F6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <path d="M9 16l2 2 4-4"></path>
        </svg>
      )
    }
  ];

  return (
    <section className="home-process-section" id="process">
      {/* Top Organic Cloud Divider */}
      <div className="process-top-cloud" aria-hidden="true">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="process-cloud-svg">
          <path 
            d="M 0 90 L 0 45 Q 60 -15, 120 45 Q 185 -10, 250 45 Q 310 -20, 370 45 Q 435 -15, 500 45 Q 565 -25, 630 45 Q 700 -10, 770 45 Q 835 -20, 900 45 Q 965 -15, 1030 45 Q 1100 -25, 1170 45 Q 1235 -10, 1300 45 Q 1370 -20, 1440 45 L 1440 90 Z" 
            fill="#FFFDF5" 
          />
        </svg>
      </div>

      {/* Line Art Background Layer around Header */}
      <div className="home-process-lineart-layer" aria-hidden="true">
        {/* Left: Spray Bottle */}
        <svg className="process-lineart-icon lineart-left" viewBox="0 0 100 100">
          <path d="M35,20 L50,20 L55,30 L30,30 Z M42,30 L42,45 L58,45 L58,90 C58,93 53,95 42,95 C31,95 26,93 26,90 L26,45 L42,45 Z" fill="none" stroke="#0B42F6" strokeWidth="2" strokeLinecap="round" opacity="0.35"/>
        </svg>

        {/* Right: Bucket & Duster */}
        <svg className="process-lineart-icon lineart-right" viewBox="0 0 120 120">
          <path d="M20,40 L80,40 L75,90 L25,90 Z M30,40 C30,25 70,25 70,40" fill="none" stroke="#0B42F6" strokeWidth="2" opacity="0.35"/>
        </svg>
      </div>

      <div className="home-process-container">
        {/* Sub-Eyebrow Label */}
        <div className="home-process-badge">
          <span>OUR PROCESS</span>
        </div>

        {/* Main Headline: OUR SIMPLE 4 STEP PROCESS */}
        <h2 className="home-process-title">
          OUR SIMPLE 4 STEP <span className="process-title-highlight">PROCESS
            <svg className="process-wavy-svg" viewBox="0 0 220 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 3 10 C 20 2, 35 16, 55 9 C 75 2, 90 16, 110 9 C 130 2, 145 16, 165 9 C 185 2, 200 16, 217 9" stroke="#FFCC00" strokeWidth="4.5" strokeLinecap="round" />
            </svg>
          </span>
        </h2>

        {/* Subtext Description */}
        <p className="home-process-subtext">
          We make cleaning easy and hassle-free.<br />
          Just book, relax and we’ll take care of the rest.
        </p>

        {/* 4 Process Cards Row */}
        <div className="home-process-cards-row">
          {steps.map((item, idx) => (
            <div key={idx} className="home-process-card-wrapper">
              {/* Connector Arrow between steps */}
              {idx < steps.length - 1 && (
                <div className="process-connector-arrow" aria-hidden="true">
                  <svg viewBox="0 0 80 30" width="80" height="30" fill="none">
                    <path d="M 10 15 Q 40 5, 68 18" stroke="#0B42F6" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
                    <path d="M 64 12 L 72 19 L 63 24" fill="none" stroke="#0B42F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}

              {/* Top Badges Row: Number & Icon */}
              <div className="process-badges-row">
                <span className="process-number-badge">{item.step}</span>
                <div className="process-yellow-icon-badge">
                  {item.icon}
                </div>
              </div>

              {/* Card Container */}
              <div className="home-process-card">
                <div className="process-card-circle-img-wrapper">
                  <img src={item.image} alt={item.title} className="process-card-circle-img" />
                </div>
                <h3 className="process-card-title">{item.title}</h3>
                <p className="process-card-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
