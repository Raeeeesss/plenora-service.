import React, { useState, useEffect } from 'react';
import './LiveCounter.css';

export default function LiveCounter() {
  const metrics = [
    { target: 500, suffix: '+', label: 'SERVICES COMPLETED' },
    { target: 100, suffix: '+', label: 'HAPPY CUSTOMERS' },
    { target: 8, suffix: '+', label: 'PRO SERVICES' },
    { target: 100, suffix: '%', label: 'SATISFACTION' },
  ];

  const [counts, setCounts] = useState(metrics.map(() => 0));

  useEffect(() => {
    const duration = 2000;
    const steps = 50;
    const intervalTime = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounts(
        metrics.map((m) => Math.min(Math.floor(m.target * progress), m.target))
      );

      if (step >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="live-counter-section">
      <div className="container">
        <div className="live-counter-grid">
          {metrics.map((m, index) => (
            <div key={index} className="live-counter-item">
              <div className="live-counter-circle">
                <span className="live-counter-number">
                  {counts[index]}{m.suffix}
                </span>
              </div>
              <span className="live-counter-label">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
