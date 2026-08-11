import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import './ServiceCard.css';

export default function ServiceCard({ slug, title, category, description, price, image, alt }) {
  const detailUrl = slug ? `/services/${slug}` : '#services';

  return (
    <Link to={detailUrl} className="service-card-link">
      <div className="service-card">
        <div className="service-card-image-wrapper">
          {category && <span className="service-card-category-tag">{category}</span>}
          <img src={image} alt={alt || title} className="service-card-image" />
        </div>

        <div className="service-card-content">
          <div className="service-card-header">
            <h3 className="service-card-title">{title}</h3>
            <div className="service-card-arrow-btn">
              <ArrowUpRight size={18} />
            </div>
          </div>

          <p className="service-card-description">{description}</p>

          <div className="service-card-footer">
            <div className="service-card-price">
              <span className="amount">{price}</span>
            </div>
            <span className="service-view-link">
              VIEW SERVICE →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
