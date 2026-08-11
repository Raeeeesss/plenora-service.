import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

export default function Button({ children, variant = 'primary', icon, className = '', onClick, href, ...props }) {
  const buttonClass = `btn btn-${variant} ${className}`;

  if (href) {
    if (href.startsWith('/')) {
      return (
        <Link to={href} className={buttonClass} {...props}>
          {children}
          {icon && <span className="btn-icon">{icon}</span>}
        </Link>
      );
    }

    return (
      <a href={href} className={buttonClass} {...props}>
        {children}
        {icon && <span className="btn-icon">{icon}</span>}
      </a>
    );
  }

  return (
    <button className={buttonClass} onClick={onClick} {...props}>
      {children}
      {icon && <span className="btn-icon">{icon}</span>}
    </button>
  );
}
