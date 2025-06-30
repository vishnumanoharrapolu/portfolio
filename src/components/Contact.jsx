import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, CheckCircle, AlertCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../utils/constants';
import emailjs from '@emailjs/browser';
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from '../utils/emailjsConfig';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Form submission failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-5 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold text-dark dark:text-white mb-4">
            Get In <span className="bg-gradient text-gradient">Touch</span>
          </h2>
          <div className="mx-auto bg-gradient mb-4" style={{width: '100px', height: '4px'}}></div>
          <p className="lead text-muted mx-auto" style={{maxWidth: '600px'}}>
            Ready to start your next project? Let's work together to create something amazing.
          </p>
        </div>

        <div className="row g-5">
          {/* Contact Information */}
          <div className="col-lg-6">
            <div className="mb-4">
              <h3 className="h4 fw-bold text-dark dark:text-white mb-4">
                Let's talk about everything!
              </h3>
              <p className="lead text-muted mb-4">
                Don't like forms? Send me an email. 👋
              </p>
            </div>

            <div className="d-flex flex-column gap-3 mb-5">
              <div className="d-flex align-items-center gap-3 p-3 bg-light dark:bg-gray-800 rounded-3 contact-item">
                <Mail className="text-cyan-500" size={24} />
                <div>
                  <p className="fw-semibold mb-0 text-dark dark:text-white">Email</p>
                  <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="text-muted text-decoration-none">
                    {PORTFOLIO_DATA.personal.email}
                  </a>
                </div>
              </div>

              <div className="d-flex align-items-center gap-3 p-3 bg-light dark:bg-gray-800 rounded-3 contact-item">
                <Phone className="text-blue-500" size={24} />
                <div>
                  <p className="fw-semibold mb-0 text-dark dark:text-white">Phone</p>
                  <a href={`tel:${PORTFOLIO_DATA.personal.phone}`} className="text-muted text-decoration-none">
                    {PORTFOLIO_DATA.personal.phone}
                  </a>
                </div>
              </div>

              <div className="d-flex align-items-center gap-3 p-3 bg-light dark:bg-gray-800 rounded-3 contact-item">
                <MapPin className="text-purple-500" size={24} />
                <div>
                  <p className="fw-semibold mb-0 text-dark dark:text-white">Location</p>
                  <p className="text-muted mb-0">
                    {PORTFOLIO_DATA.personal.location}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h5 className="fw-semibold text-dark dark:text-white mb-3">
                Follow me on social media
              </h5>
              <div className="d-flex gap-3">
                <a href="https://github.com/vishnumanoharrapolu" className="btn btn-social rounded-circle p-3">
                  <Github size={24} />
                </a>
                <a href="http://www.linkedin.com/in/vishnumanoharrapolu" className="btn btn-social rounded-circle p-3">
                  <Linkedin size={24} />
                </a>
                <a href="https://www.instagram.com/vishnumanohar_rapolu/" className="btn btn-social rounded-circle p-3">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-6">
            <div className="card border-0 shadow-lg bg-light dark:bg-gray-800">
              <div className="card-body p-4">
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="alert alert-success d-flex align-items-center gap-2 mb-4">
                    <CheckCircle size={20} />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="alert alert-danger d-flex align-items-center gap-2 mb-4">
                    <AlertCircle size={20} />
                    <span>Failed to send message. Please try again or email me directly.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label text-dark dark:text-white">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label text-dark dark:text-white">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label text-dark dark:text-white">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What's this about?"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="form-label text-dark dark:text-white">
                      Message
                    </label>
                    <textarea
                      className="form-control form-control-lg"
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      placeholder="Tell me about your project..."
                      style={{resize: 'none'}}
                      disabled={isSubmitting}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-gradient btn-lg w-100 d-flex align-items-center justify-content-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="spinner-border spinner-border-sm" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;