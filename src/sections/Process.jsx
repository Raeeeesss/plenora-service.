import React from 'react';
import { ClipboardList, FileText, Calendar, Sparkles } from 'lucide-react';
import './Process.css';

export default function Process() {
  const steps = [
    {
      step: '1',
      icon: <ClipboardList size={26} />,
      title: 'Tell Us',
      description: 'Describe your space and cleaning requirements online or over the phone.'
    },
    {
      step: '2',
      icon: <FileText size={26} />,
      title: 'Get Quote',
      description: 'Receive a transparent, no-obligation estimate tailored to your needs.'
    },
    {
      step: '3',
      icon: <Calendar size={26} />,
      title: 'Schedule',
      description: 'Pick a date and time that fits seamlessly into your busy routine.'
    },
    {
      step: '4',
      icon: <Sparkles size={26} />,
      title: 'Enjoy',
      description: 'Walk into a pristine, refreshed environment cleaned to perfection.'
    }
  ];

  return (
    <section className="process-section" id="process">
      <div className="container">
        <div className="process-header">
          <div className="section-badge">PROCESS</div>
          <h2 className="process-heading">
            Effortless booking.<br />
            Spotless results.
          </h2>
        </div>

        <div className="process-grid">
          {steps.map((item, index) => (
            <div key={index} className="process-card">
              <div className="process-icon-container">
                <span className="process-step-number">{item.step}</span>
                {item.icon}
              </div>
              <h3 className="process-title">{item.title}</h3>
              <p className="process-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
