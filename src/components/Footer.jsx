import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { PORTFOLIO_DATA } from '../utils/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row g-4 mb-4">
          {/* Brand */}
          <div className="col-md-4 text-center text-md-start">
            <h3 className="h4 fw-bold bg-gradient text-gradient mb-3">
              {PORTFOLIO_DATA.personal.name}
            </h3>
            <p className="text-light-50">
              {PORTFOLIO_DATA.personal.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 text-center">
            <h5 className="fw-semibold mb-3">Quick Links</h5>
            <div className="d-flex flex-column gap-2">
              {['Home', 'About', 'Skills', 'Projects', 'Certificates', 'Education', 'Experience', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.querySelector(`#${link.toLowerCase()}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="btn btn-link text-light-50 text-decoration-none p-0"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 text-center text-md-end">
            <h5 className="fw-semibold mb-3">Get In Touch</h5>
            <div className="d-flex flex-column gap-2 text-light-50">
              <p className="mb-0">{PORTFOLIO_DATA.personal.location}</p>
              <a 
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="text-light-50 text-decoration-none"
              >
                {PORTFOLIO_DATA.personal.email}
              </a>
              <a 
                href={`tel:${PORTFOLIO_DATA.personal.phone}`}
                className="text-light-50 text-decoration-none"
              >
                {PORTFOLIO_DATA.personal.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="d-flex justify-content-center gap-3 mb-4">
          <a href="https://github.com/vishnumanoharrapolu" className="btn btn-social rounded-circle p-3">
            <Github size={20} />
          </a>
          <a href="http://www.linkedin.com/in/vishnumanoharrapolu" className="btn btn-social rounded-circle p-3">
            <Linkedin size={20} />
          </a>
          <a href="https://www.instagram.com/" className="btn btn-social rounded-circle p-3">
            <Instagram size={20} />
          </a>
          <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="btn btn-social rounded-circle p-3">
            <Mail size={20} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center pt-4 border-top border-secondary">
          <p className="text-light-50 d-flex align-items-center justify-content-center gap-2 mb-0">
            © {currentYear} {PORTFOLIO_DATA.personal.name}. Made with 
            <Heart className="text-danger" size={16} />
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;