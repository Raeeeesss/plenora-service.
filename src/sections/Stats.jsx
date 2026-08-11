import React from 'react';
import './Stats.css';

export default function Stats() {
  const statsData = [
    { number: '500+', label: 'SERVICES COMPLETED' },
    { number: '100+', label: 'HAPPY CUSTOMERS' },
    { number: '8+', label: 'PRO SERVICES' },
    { number: '100%', label: 'SATISFACTION' },
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <div key={index} className="stat-item">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
