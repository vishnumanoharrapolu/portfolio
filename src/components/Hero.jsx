import React, { useState, useEffect } from 'react';
import { Download, ArrowDown, Github, Linkedin, Mail, MessageCircle, Phone } from 'lucide-react';
import { PORTFOLIO_DATA } from '../utils/constants';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = ['Full-Stack Developer', 'UI/UX Designer', 'Tech Innovator', 'Problem Solver'];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    
    const typeSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        if (typedText.length < currentRole.length) {
          setTypedText(currentRole.substring(0, typedText.length + 1));
        } else {
          // Finished typing, start deleting after pause
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting
        if (typedText.length > 0) {
          setTypedText(currentRole.substring(0, typedText.length - 1));
        } else {
          // Finished deleting, move to next role
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [typedText, currentIndex, isDeleting, roles]);

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHireMe = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    const resumeUrl = 'https://drive.google.com/file/d/14UFItu84IspY520U4kPftfwtP0LhLIfv/view?usp=sharing';
    window.open(resumeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="home" className="min-vh-100 position-relative overflow-hidden bg-gradient-dark">
      {/* Animated Background */}
      <div className="position-absolute top-0 start-0 w-100 h-100">
        <div className="position-absolute bg-cyan-glow rounded-circle blur-effect animate-pulse" 
             style={{top: '20%', left: '20%', width: '300px', height: '300px'}}></div>
        <div className="position-absolute bg-blue-glow rounded-circle blur-effect animate-pulse" 
             style={{bottom: '20%', right: '20%', width: '400px', height: '400px', animationDelay: '1s'}}></div>
        <div className="position-absolute bg-purple-glow rounded-circle blur-effect animate-pulse" 
             style={{top: '50%', left: '50%', width: '250px', height: '250px', animationDelay: '2s', transform: 'translate(-50%, -50%)'}}></div>
      </div>

      {/* Floating Particles */}
      <div className="position-absolute top-0 start-0 w-100 h-100">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="position-absolute bg-cyan-400 rounded-circle animate-pulse particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: '4px',
              height: '4px',
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              opacity: 0.3
            }}
          ></div>
        ))}
      </div>

      <div className="position-relative d-flex align-items-center justify-content-center min-vh-100 px-4" style={{zIndex: 10}}>
        <div className="text-center container">
          <div className="mb-5 animate-fade-in">
            <h1 className="display-1 fw-bold mb-4">
              <span className="bg-gradient text-gradient">
                {PORTFOLIO_DATA.personal.name}
              </span>
            </h1>
            <div className="display-6 text-light mb-4" style={{minHeight: '3rem'}}>
              I'm a <span className="text-cyan-400 fw-semibold">{typedText}</span>
              <span className="text-cyan-400 animate-pulse">|</span>
            </div>
            <p className="lead text-light-50 mx-auto" style={{maxWidth: '600px'}}>
              {PORTFOLIO_DATA.personal.tagline}
            </p>
          </div>

          <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center gap-3 mb-5">
            <button 
              onClick={handleDownloadResume}
              className="btn btn-gradient btn-lg rounded-pill px-4 py-3 d-flex align-items-center gap-2 hero-btn"
            >
              <Download size={20} />
              Download Resume
              <span className="arrow-move">→</span>
            </button>
            <button 
              onClick={handleHireMe}
              className="btn btn-hire-me btn-lg rounded-pill px-4 py-3 d-flex align-items-center gap-2 position-relative overflow-hidden"
            >
              <MessageCircle size={20} />
              <span className="hire-me-text">Hire Me</span>
              <div className="hire-me-pulse"></div>
            </button>
          </div>

          <div className="d-flex align-items-center justify-content-center gap-3 mb-5">
            <a href="https://github.com/vishnumanoharrapolu" className="btn btn-social rounded-circle p-3">
              <Github size={24} />
            </a>
            <a href="http://www.linkedin.com/in/vishnumanoharrapolu" className="btn btn-social rounded-circle p-3">
              <Linkedin size={24} />
            </a>
            <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="btn btn-social rounded-circle p-3">
              <Mail size={24} />
            </a>
          </div>

          <button 
            onClick={scrollToNext}
            className="btn btn-link text-cyan-400 animate-bounce p-2 rounded-circle bg-white bg-opacity-10"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;