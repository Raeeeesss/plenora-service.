import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin, MessageSquare, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import '../styles/ContactPage.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'House & Office Deep Cleaning',
    date: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: 'House & Office Deep Cleaning',
        date: '',
        message: ''
      });
    }, 4000);
  };

  return (
    <div className="contact-page">
      <Header />

      <main>
        {/* Contact Header Banner */}
        <section className="contact-header-banner">
          <div className="container contact-header-container">
            <div className="section-badge">GET IN TOUCH</div>
            
            <h1 className="contact-header-title">
              We're Here to Elevate <span className="highlight">Your Space</span>
            </h1>

            <p className="contact-header-subtitle">
              Have a question, need a custom commercial quote, or ready to book your service? Reach out to our dedicated support team today.
            </p>
          </div>
        </section>

        {/* Contact Form & Info Grid */}
        <section className="contact-section">
          <div className="container">
            <div className="contact-grid">
              
              {/* Interactive Booking & Inquiry Form */}
              <div className="contact-form-card">
                <h2 className="form-title">Request a Free Estimate</h2>
                <p className="form-subtitle">Fill in your service requirements and our team will contact you within 30 minutes.</p>

                <form onSubmit={handleSubmit}>
                  <div className="contact-form-grid">
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-input"
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-input"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-input"
                        placeholder="rahul@example.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="service">Select Service *</label>
                      <select
                        id="service"
                        name="service"
                        className="form-select"
                        value={formData.service}
                        onChange={handleChange}
                        required
                      >
                        <option value="House & Office Deep Cleaning">House & Office Deep Cleaning</option>
                        <option value="Vehicle Foam Washing & Detailing">Vehicle Foam Washing & Detailing</option>
                        <option value="Garden & Landscaping Care">Garden & Landscaping Care</option>
                        <option value="Bathroom Deep Cleaning">Bathroom Deep Cleaning</option>
                        <option value="Tank Cleaning">Tank Cleaning</option>
                        <option value="Interlock Cleaning">Interlock Cleaning</option>
                        <option value="Roof, Wall & Floor Cleaning">Roof, Wall & Floor Cleaning</option>
                        <option value="ACP & Glass Cleaning">ACP & Glass Cleaning</option>
                        <option value="Solar Panel Cleaning">Solar Panel Cleaning</option>
                        <option value="Sofa & Mattress Cleaning">Sofa & Mattress Cleaning</option>
                      </select>
                    </div>

                    <div className="form-group full-width">
                      <label className="form-label" htmlFor="date">Preferred Service Date</label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        className="form-input"
                        value={formData.date}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group full-width">
                      <label className="form-label" htmlFor="message">Message / Specific Requirements</label>
                      <textarea
                        id="message"
                        name="message"
                        className="form-textarea"
                        placeholder="Tell us about your property size, vehicle type, or specific cleaning requirements..."
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <button type="submit" className="form-submit-btn">
                    Submit Request
                  </button>

                  {submitted && (
                    <div className="form-success-alert">
                      <CheckCircle size={20} style={{ display: 'inline', marginRight: 8, verticalAlign: 'middle' }} />
                      Thank you! Your request has been received. Our manager will call you shortly.
                    </div>
                  )}
                </form>
              </div>

              {/* Sidebar Info Cards */}
              <div className="contact-sidebar">
                <div className="info-card">
                  <div className="info-icon-box">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h3 className="info-title">Phone & WhatsApp</h3>
                    <p className="info-detail">
                      <a href="tel:+919876543210">+91 98765 43210</a><br />
                      Mon - Sun, 8:00 AM - 8:00 PM
                    </p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon-box">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h3 className="info-title">Email Us</h3>
                    <p className="info-detail">
                      <a href="mailto:support@plenoraservice.com">support@plenoraservice.com</a><br />
                      Fast 2-hour response time
                    </p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon-box">
                    <Clock size={22} />
                  </div>
                  <div>
                    <h3 className="info-title">Working Hours</h3>
                    <p className="info-detail">
                      Monday - Sunday: 8:00 AM - 8:00 PM<br />
                      24/7 Emergency Commercial Response
                    </p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon-box">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h3 className="info-title">Service Coverage</h3>
                    <p className="info-detail">
                      City Metro Area & All Surrounding Suburbs<br />
                      Doorstep Mobile Service Units Available
                    </p>
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
