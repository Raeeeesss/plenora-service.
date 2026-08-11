import React from 'react';
import './FluidCard.css';

export default function FluidCard({ icon, title, description, animationDelay = '0s' }) {
  return (
    <div className="fluid-card-wrapper" style={{ animationDelay }}>
      <div className="fluid-card-blob" style={{ animationDelay }} />
      <div className="fluid-icon-box">{icon}</div>
      <h3 className="fluid-card-title">{title}</h3>
      <p className="fluid-card-desc">{description}</p>
    </div>
  );
}
