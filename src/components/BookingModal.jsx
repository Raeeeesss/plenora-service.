import React, { useState, useEffect } from 'react';
import { X, User, Mail, MessageSquare, Sparkles, Send } from 'lucide-react';
import './BookingModal.css';

export default function BookingModal({ isOpen, onClose, initialService }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: initialService || 'Vehicle Detailing',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    // Lock body scroll when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (e) => {
    const numericValue = e.target.value.replace(/\D/g, '').slice(0, 10);
    setFormData({ ...formData, phone: numericValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const whatsappNumber = '918139895446';
    const messageText = 
      `*New Booking Inquiry from Plenora Website*\n\n` +
      `*Name:* ${formData.fullName}\n` +
      `*Phone:* +91 ${formData.phone}\n` +
      `*Email:* ${formData.email || 'N/A'}\n` +
      `*Selected Service:* ${formData.service || 'General Inquiry'}\n` +
      `*Message:* ${formData.message || 'N/A'}`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        service: 'Vehicle Detailing',
        message: ''
      });
    }, 1000);
  };

  return (
    <div className="bm-overlay" onClick={onClose}>
      <div className="bm-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="bm-header">
          <div>
            <div className="bm-badge">
              <span>QUICK BOOKING</span>
            </div>
            <h3 className="bm-title">Book a Service</h3>
          </div>
          <button className="bm-close-btn" onClick={onClose} aria-label="Close Modal">
            <X size={20} />
          </button>
        </div>

        <p className="bm-subtext">
          Fill in your details below to connect directly with our WhatsApp team.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bm-form">
          {/* Name & Email Row */}
          <div className="bm-form-row bm-two-col">
            <div className="bm-input-field">
              <User size={18} className="bm-field-icon" />
              <input 
                type="text" 
                name="fullName"
                placeholder="Full Name *" 
                value={formData.fullName} 
                onChange={handleChange} 
                required 
              />
            </div>

            <div className="bm-input-field">
              <Mail size={18} className="bm-field-icon" />
              <input 
                type="email" 
                name="email"
                placeholder="Email Address" 
                value={formData.email} 
                onChange={handleChange} 
              />
            </div>
          </div>

          {/* Mobile Field */}
          <div className="bm-form-row">
            <div className="bm-input-field bm-phone-input-field">
              <div className="bm-country-code-badge">
                <span>+91</span>
              </div>
              <input 
                type="tel" 
                name="phone"
                placeholder="10-Digit Mobile Number *" 
                value={formData.phone} 
                onChange={handlePhoneChange} 
                maxLength={10}
                pattern="[0-9]{10}"
                title="Please enter a valid 10-digit mobile number"
                inputMode="numeric"
                required 
              />
            </div>
          </div>

          {/* Service Dropdown */}
          <div className="bm-form-row">
            <div className="bm-input-field">
              <Sparkles size={18} className="bm-field-icon" />
              <select 
                name="service"
                value={formData.service} 
                onChange={handleChange} 
                required 
                className="bm-select-field"
              >
                <option value="Vehicle Detailing">Vehicle Detailing (Available Now)</option>
                <option value="House & Office Deep Cleaning" disabled style={{ color: '#94A3B8' }}>House & Office Deep Cleaning (Coming Soon)</option>
                <option value="Bathroom Deep Cleaning & Sanitization" disabled style={{ color: '#94A3B8' }}>Bathroom Deep Cleaning (Coming Soon)</option>
                <option value="Interlock Cleaning & Restoration" disabled style={{ color: '#94A3B8' }}>Interlock Cleaning (Coming Soon)</option>
                <option value="Water Tank Cleaning & Disinfection" disabled style={{ color: '#94A3B8' }}>Water Tank Cleaning (Coming Soon)</option>
                <option value="ACP & Glass Pressure Cleaning" disabled style={{ color: '#94A3B8' }}>ACP & Glass Cleaning (Coming Soon)</option>
                <option value="Roof, Wall & Floor Deep Cleaning" disabled style={{ color: '#94A3B8' }}>Roof, Wall & Floor Cleaning (Coming Soon)</option>
                <option value="Garden & Landscaping Care" disabled style={{ color: '#94A3B8' }}>Garden & Landscaping Care (Coming Soon)</option>
                <option value="Sofa & Mattress Deep Cleaning" disabled style={{ color: '#94A3B8' }}>Sofa & Mattress Cleaning (Coming Soon)</option>
                <option value="Solar Panel Cleaning" disabled style={{ color: '#94A3B8' }}>Solar Panel Cleaning (Coming Soon)</option>
                <option value="General Inquiry / Other">General Inquiry / Other</option>
              </select>
            </div>
          </div>

          {/* Message Field */}
          <div className="bm-form-row">
            <div className="bm-input-field bm-textarea-field">
              <MessageSquare size={18} className="bm-field-icon bm-top-icon" />
              <textarea 
                name="message"
                placeholder="Additional notes / Requirements (Optional)" 
                rows="3"
                value={formData.message} 
                onChange={handleChange} 
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="bm-submit-row">
            <button type="submit" className="bm-submit-btn">
              <Send size={16} />
              <span>Send Message on WhatsApp</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
