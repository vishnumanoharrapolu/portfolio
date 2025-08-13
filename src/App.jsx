import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './hooks/useTheme';
import ScrollToTop from './components/ScrollToTop';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <ThemeProvider>
      <div className="relative">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certificates />
          <Education />
          <Experience />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
