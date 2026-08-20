import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, ArrowUpRight, Star, ShieldCheck, Clock, Award, Leaf, User, Mail, FileText, MessageSquare, MapPin, CheckCircle, Sparkles, Loader2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useServices } from '../hooks/useServices';
import { useBusinessSettings } from '../hooks/useBusinessSettings';
import { submitContactInquiry } from '../services/inquiryApi';

import '../styles/ContactPage.css';

export default function ContactPage() {
  const { services } = useServices();
  const { settings } = useBusinessSettings();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (e) => {
    const numericValue = e.target.value.replace(/\D/g, '').slice(0, 10);
    setFormData({ ...formData, phone: numericValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);

    const whatsappNumber = settings?.whatsapp_number 
      ? settings.whatsapp_number.replace(/\D/g, '') 
      : '918139895446';
    
    // Format message for WhatsApp
    const messageText = 
      `*New Inquiry from Plenora Website*\n\n` +
      `*Name:* ${formData.fullName}\n` +
      `*Phone:* +91 ${formData.phone}\n` +
      `*Email:* ${formData.email || 'N/A'}\n` +
      `*Selected Service:* ${formData.service || 'General Inquiry'}\n` +
      `*Message:* ${formData.message}`;

    try {
      // 1. Submit lead to Supabase Edge Function
      await submitContactInquiry({
        fullName: formData.fullName,
        phone: `+91${formData.phone}`,
        email: formData.email,
        serviceName: formData.service,
        message: formData.message,
        source: 'WEBSITE_CONTACT_PAGE',
      });

      setSubmitted(true);

      // 2. Open WhatsApp with pre-filled details
      const encodedMessage = encodeURIComponent(messageText);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');

      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      }, 5000);
    } catch (err) {
      console.error('[ContactPage] Submission error:', err);
      setSubmitError('Failed to send message. Connecting via WhatsApp...');
      const encodedMessage = encodeURIComponent(messageText);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="contact-page-ref">
      <main>
        {/* 1. Royal Blue Hero Section */}
        <section className="cp-hero-section">
          {/* Floating Top Navigation Pill */}
          <Navbar />

          {/* Decorative Vector Line Art Layer */}
          <div className="cp-lineart-layer" aria-hidden="true">
            <svg className="cp-lineart-icon lineart-top-left" viewBox="0 0 100 100">
              <path d="M35,20 L50,20 L55,30 L30,30 Z M42,30 L42,45 L58,45 L58,90 C58,93 53,95 42,95 Z" fill="none" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.18"/>
            </svg>
            <svg className="cp-lineart-icon lineart-top-right" viewBox="0 0 120 120">
              <path d="M20,40 L80,40 L75,90 L25,90 Z" fill="none" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.18"/>
            </svg>
          </div>

          <div className="cp-hero-container">
            {/* Badge */}
            <div className="cp-hero-badge">
              <span>CONTACT US</span>
            </div>

            {/* Main Headline */}
            <h1 className="cp-hero-title">
              We're Here to <span className="cp-title-highlight">Help!
                <svg className="cp-wavy-svg" viewBox="0 0 200 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 3 10 C 20 2, 35 16, 55 9 C 75 2, 90 16, 110 9 C 130 2, 145 16, 165 9 C 185 2, 195 16, 197 9" stroke="#FFCC00" strokeWidth="4.5" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Subtext */}
            <p className="cp-hero-subtext">
              Have a question or need a cleaning service?<br />
              Get in touch with us and we'll be happy to assist you.
            </p>
          </div>

          {/* Bottom Cloud Divider into Cream Canvas */}
          <div className="cp-hero-scallop-divider" aria-hidden="true">
            <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="cp-cloud-svg">
              <path 
                d="M 0 90 L 0 45 Q 144 5, 288 45 Q 432 15, 576 45 Q 720 0, 864 45 Q 1008 15, 1152 45 Q 1296 5, 1440 45 L 1440 90 Z" 
                fill="#FFFDF5" 
              />
            </svg>
          </div>
        </section>

        {/* 2. Main Contact Section (Warm Cream Background #FFFDF5) */}
        <section className="cp-main-section">
          <div className="cp-main-container">
            <div className="cp-content-grid">
              
              {/* Left Column: Send Us a Message Form */}
              <div className="cp-form-container">
                <h2 className="cp-section-title">
                  Send Us a Message
                  <span className="cp-title-underline"></span>
                </h2>

                <form onSubmit={handleSubmit} className="cp-contact-form">
                  <div className="cp-form-row cp-two-col">
                    <div className="cp-input-field">
                      <User size={18} className="cp-field-icon" />
                      <input 
                        type="text" 
                        name="fullName"
                        placeholder="Full Name *" 
                        value={formData.fullName} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>

                    <div className="cp-input-field">
                      <Mail size={18} className="cp-field-icon" />
                      <input 
                        type="email" 
                        name="email"
                        placeholder="Email Address *" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                  </div>

                  <div className="cp-form-row">
                    <div className="cp-input-field cp-phone-input-field">
                      <div className="cp-country-code-badge">
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

                  <div className="cp-form-row">
                    <div className="cp-input-field">
                      <Sparkles size={18} className="cp-field-icon" />
                      <select 
                        name="service"
                        value={formData.service} 
                        onChange={handleChange} 
                        required 
                        className="cp-select-field"
                      >
                        <option value="" disabled>Select Service *</option>
                        {services && services.length > 0 ? (
                          services.map((s) => (
                            <option 
                              key={s.id || s.slug} 
                              value={s.title}
                              disabled={!s.isAvailable}
                              style={{ color: s.isAvailable ? '#111827' : '#94A3B8' }}
                            >
                              {s.title} {s.isAvailable ? '(Available Now)' : '(Coming Soon)'}
                            </option>
                          ))
                        ) : (
                          <>
                            <option value="Vehicle Detailing">Vehicle Detailing (Available Now)</option>
                            <option value="House & Office Deep Cleaning" disabled style={{ color: '#94A3B8' }}>House & Office Deep Cleaning (Coming Soon)</option>
                            <option value="Bathroom Deep Cleaning" disabled style={{ color: '#94A3B8' }}>Bathroom Deep Cleaning (Coming Soon)</option>
                            <option value="Interlock Cleaning" disabled style={{ color: '#94A3B8' }}>Interlock Cleaning (Coming Soon)</option>
                            <option value="Tank Cleaning" disabled style={{ color: '#94A3B8' }}>Water Tank Cleaning (Coming Soon)</option>
                            <option value="ACP & Glass Cleaning" disabled style={{ color: '#94A3B8' }}>ACP & Glass Cleaning (Coming Soon)</option>
                            <option value="Roof, Wall & Floor Cleaning" disabled style={{ color: '#94A3B8' }}>Roof, Wall & Floor Cleaning (Coming Soon)</option>
                            <option value="Garden & Landscaping Care" disabled style={{ color: '#94A3B8' }}>Garden & Landscaping Care (Coming Soon)</option>
                            <option value="Sofa & Mattress Cleaning" disabled style={{ color: '#94A3B8' }}>Sofa & Mattress Cleaning (Coming Soon)</option>
                            <option value="Solar Panel Cleaning" disabled style={{ color: '#94A3B8' }}>Solar Panel Cleaning (Coming Soon)</option>
                          </>
                        )}
                        <option value="General Inquiry / Other">General Inquiry / Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="cp-form-row">
                    <div className="cp-input-field cp-textarea-field">
                      <MessageSquare size={18} className="cp-field-icon cp-top-icon" />
                      <textarea 
                        name="message"
                        placeholder="Your Message *" 
                        rows="5"
                        value={formData.message} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                  </div>

                  <div className="cp-submit-row">
                    <button type="submit" className="cp-submit-btn" disabled={submitting}>
                      {submitting ? (
                        <>
                          <Loader2 size={16} className="animate-spin" style={{ animation: 'spin 1s linear infinite' }} />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <ArrowRight size={16} />
                        </>
                      )}
                    </button>
                  </div>

                  {submitted && (
                    <div className="cp-success-alert">
                      <CheckCircle size={18} />
                      <span>Thank you! Your message has been sent successfully. We will reply within 30 minutes.</span>
                    </div>
                  )}

                  {submitError && (
                    <div className="cp-success-alert" style={{ background: '#FEF2F2', border: '1px solid #FECACA', color: '#991B1B' }}>
                      <span>{submitError}</span>
                    </div>
                  )}
                </form>
              </div>

              {/* Right Column: Our Location Card */}
              <div className="cp-location-card">
                <h2 className="cp-card-title">
                  Our Location
                  <span className="cp-title-underline"></span>
                </h2>

                {/* Map Stylized Frame pointing to Kuttippuram, Kerala */}
                <div className="cp-map-wrapper">
                  <iframe 
                    title="Plenora Service Location Kuttippuram"
                    src={settings?.google_maps_embed_url || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31333.64923483984!2d76.01524388437502!3d10.838541249999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7c4b4a3a60c6d%3A0xc395f87b649d28c3!2sKuttippuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"}
                    className="cp-map-iframe"
                    loading="lazy"
                  ></iframe>
                  <div className="cp-map-pin-overlay">
                    <MapPin size={24} color="#FFFFFF" fill="#0B42F6" />
                  </div>
                </div>

                {/* Contact Items List */}
                <div className="cp-info-list">
                  <div className="cp-info-item">
                    <div className="cp-info-icon-badge">
                      <MapPin size={20} color="#FFFFFF" />
                    </div>
                    <div className="cp-info-text-group">
                      <h3 className="cp-info-heading">Kuttippuram</h3>
                      <p className="cp-info-subtext">{settings?.operating_address || 'Malappuram District, Kerala, India'}</p>
                    </div>
                  </div>

                  <div className="cp-info-item">
                    <div className="cp-info-icon-badge">
                      <Phone size={20} color="#FFFFFF" />
                    </div>
                    <div className="cp-info-text-group">
                      <h3 className="cp-info-heading">{settings?.primary_phone || '+91 8139895446'} {settings?.secondary_phone ? `/ ${settings.secondary_phone}` : ''}</h3>
                      <p className="cp-info-subtext">{settings?.working_hours_display || 'Mon - Sun: 8AM - 8PM'}</p>
                    </div>
                  </div>

                  <div className="cp-info-item">
                    <div className="cp-info-icon-badge">
                      <Mail size={20} color="#FFFFFF" />
                    </div>
                    <div className="cp-info-text-group">
                      <h3 className="cp-info-heading">
                        <a href={`mailto:${settings?.support_email || 'plenoraservice@gmail.com'}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                          {settings?.support_email || 'plenoraservice@gmail.com'}
                        </a>
                      </h3>
                      <p className="cp-info-subtext">{settings?.sla_response_time || 'We reply within 30 minutes'}</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

