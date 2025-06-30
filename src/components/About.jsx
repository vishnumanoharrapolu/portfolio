import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import { PORTFOLIO_DATA } from '../utils/constants';

const About = () => {
  return (
    <section id="about" className="py-5 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold text-dark dark:text-white mb-4">
            About <span className="bg-gradient text-gradient">Me</span>
          </h2>
          <div className="mx-auto bg-gradient" style={{width: '100px', height: '4px'}}></div>
        </div>

        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="position-relative d-flex justify-content-center">
              <div className="position-absolute bg-gradient rounded-circle blur-effect opacity-25" 
                   style={{inset: '-1rem', zIndex: 0}}></div>
              <div className="position-relative">
                <img
                  src={PORTFOLIO_DATA.personal.avatar}
                  alt={PORTFOLIO_DATA.personal.name}
                  className="img-fluid rounded-circle shadow-lg about-image"
                  style={{
                    width: '350px',
                    height: '350px',
                    objectFit: 'cover'
                  }}
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient rounded-circle opacity-5"></div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="mb-4">
              <h3 className="h2 fw-bold text-dark dark:text-white mb-4">
                I'm {PORTFOLIO_DATA.personal.name}
              </h3>
              <p className="lead text-muted mb-4">
                {PORTFOLIO_DATA.personal.bio}
              </p>
            </div>

            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <div className="d-flex align-items-center gap-3 p-3 bg-light dark:bg-gray-800 rounded-3 about-contact-card">
                  <MapPin className="text-cyan-500 contact-icon" size={20} />
                  <div className="contact-content">
                    <p className="fw-semibold mb-0 text-dark dark:text-white contact-title">Location</p>
                    <p className="text-muted mb-0 contact-value">{PORTFOLIO_DATA.personal.location}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-center gap-3 p-3 bg-light dark:bg-gray-800 rounded-3 about-contact-card">
                  <Mail className="text-blue-500 contact-icon" size={20} />
                  <div className="contact-content">
                    <p className="fw-semibold mb-0 text-dark dark:text-white contact-title">Email</p>
                    <p className="text-muted mb-0 contact-value">{PORTFOLIO_DATA.personal.email}</p>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="d-flex align-items-center gap-3 p-3 bg-light dark:bg-gray-800 rounded-3 about-contact-card">
                  <Phone className="text-purple-500 contact-icon" size={20} />
                  <div className="contact-content">
                    <p className="fw-semibold mb-0 text-dark dark:text-white contact-title">Phone</p>
                    <p className="text-muted mb-0 contact-value">{PORTFOLIO_DATA.personal.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;