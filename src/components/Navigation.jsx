import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Get all sections
      const sections = ['home', 'about', 'skills', 'projects', 'certificates', 'education', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for better detection
      
      // Find which section is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home', id: 'home' },
    { href: '#about', label: 'About', id: 'about' },
    { href: '#skills', label: 'Skills', id: 'skills' },
    { href: '#projects', label: 'Projects', id: 'projects' },
    { href: '#certificates', label: 'Certificates', id: 'certificates' },
    { href: '#education', label: 'Education', id: 'education' },
    { href: '#experience', label: 'Experience', id: 'experience' },
    { href: '#contact', label: 'Contact', id: 'contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-100 z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center py-3">
          <div className="fs-3 fw-bold bg-gradient text-gradient">
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <div className="d-none d-md-flex align-items-center">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`btn btn-link text-decoration-none me-4 nav-link-custom fw-medium text-dark dark:text-light ${
                  activeSection === item.id ? 'nav-link-active' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="d-md-none">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="btn btn-outline-dark"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`d-md-none transition-all duration-300 ${
        isOpen 
          ? 'show' 
          : 'collapse'
      } bg-white bg-opacity-95 backdrop-blur border-top border-gray-200`}>
        <div className="container-fluid py-3">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className={`btn btn-link text-decoration-none d-block w-100 text-start py-2 text-dark ${
                activeSection === item.id ? 'nav-link-active' : ''
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;