"use client"

import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import "./ContactPage.css"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "general",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, you would send this data to your server
    console.log("Form submitted:", formData)
    alert("Thank you for contacting us. We'll get back to you soon!")
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "general",
      message: "",
    })
  }

  return (
    <div className="contact-page">
      <div className="page-header">
        <h1 className="page-title">Contact Us</h1>
        <p className="page-subtitle">We'd love to hear from you. Get in touch with our team.</p>
      </div>

      <div className="contact-grid">
        <div className="contact-form-container">
          <div className="contact-form-card">
            <h2 className="form-title">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  Phone Number (Optional)
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="form-input"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Subject</label>
                <div className="radio-group">
                  <div className="radio-option">
                    <input
                      type="radio"
                      id="general"
                      name="subject"
                      value="general"
                      checked={formData.subject === "general"}
                      onChange={handleChange}
                    />
                    <label htmlFor="general">General Inquiry</label>
                  </div>

                  <div className="radio-option">
                    <input
                      type="radio"
                      id="order"
                      name="subject"
                      value="order"
                      checked={formData.subject === "order"}
                      onChange={handleChange}
                    />
                    <label htmlFor="order">Order Status</label>
                  </div>

                  <div className="radio-option">
                    <input
                      type="radio"
                      id="returns"
                      name="subject"
                      value="returns"
                      checked={formData.subject === "returns"}
                      onChange={handleChange}
                    />
                    <label htmlFor="returns">Returns & Exchanges</label>
                  </div>

                  <div className="radio-option">
                    <input
                      type="radio"
                      id="other"
                      name="subject"
                      value="other"
                      checked={formData.subject === "other"}
                      onChange={handleChange}
                    />
                    <label htmlFor="other">Other</label>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="form-textarea"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="contact-info-container">
          <div className="contact-info-card">
            <h2 className="info-title">Contact Information</h2>
            <div className="info-items">
              <div className="info-item">
                <MapPin className="info-icon" />
                <div>
                  <h3 className="info-subtitle">Our Store</h3>
                  <address className="info-text">
                    123 Fashion Avenue
                    <br />
                    New York, NY 10001
                    <br />
                    United States
                  </address>
                </div>
              </div>

              <div className="info-item">
                <Phone className="info-icon" />
                <div>
                  <h3 className="info-subtitle">Phone</h3>
                  <p className="info-text">+1 (555) 123-4567</p>
                  <p className="info-subtext">Mon-Fri: 9am-6pm EST</p>
                </div>
              </div>

              <div className="info-item">
                <Mail className="info-icon" />
                <div>
                  <h3 className="info-subtitle">Email</h3>
                  <p className="info-text">customer.service@elegance.com</p>
                  <p className="info-subtext">We aim to respond within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-info-card">
            <h2 className="info-title">Store Hours</h2>
            <div className="hours-list">
              <div className="hours-item">
                <span>Monday - Friday</span>
                <span>10:00 AM - 8:00 PM</span>
              </div>
              <div className="hours-item">
                <span>Saturday</span>
                <span>10:00 AM - 6:00 PM</span>
              </div>
              <div className="hours-item">
                <span>Sunday</span>
                <span>12:00 PM - 5:00 PM</span>
              </div>
            </div>
          </div>

          <div className="contact-info-card">
            <h2 className="info-title">Customer Service</h2>
            <p className="info-text">
              Our dedicated customer service team is here to help with any questions or concerns.
            </p>
            <div className="service-list">
              <p className="service-item">
                <span className="service-label">Returns & Exchanges:</span>
                <span className="service-value">returns@elegance.com</span>
              </p>
              <p className="service-item">
                <span className="service-label">Order Status:</span>
                <span className="service-value">orders@elegance.com</span>
              </p>
              <p className="service-item">
                <span className="service-label">Wholesale Inquiries:</span>
                <span className="service-value">wholesale@elegance.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
