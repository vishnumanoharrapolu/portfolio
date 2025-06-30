import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`btn btn-gradient rounded-circle position-fixed shadow-lg ${
        isVisible 
          ? 'visible' 
          : 'invisible'
      }`}
      style={{
        bottom: '2rem',
        right: '2rem',
        zIndex: 30,
        width: '3rem',
        height: '3rem',
        transition: 'all 0.3s ease'
      }}
    >
      <ChevronUp size={24} />
    </button>
  );
};

export default ScrollToTop;