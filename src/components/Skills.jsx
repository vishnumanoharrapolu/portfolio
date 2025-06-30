import React, { useState, useEffect, useRef } from 'react';
import { PORTFOLIO_DATA } from '../utils/constants';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const SkillBar = ({ skill, delay }) => (
    <div className="skill-item mb-4">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <span className="d-flex align-items-center gap-2 text-dark dark:text-light fw-medium">
          <span className="fs-4 skill-icon">{skill.icon}</span>
          {skill.name}
        </span>
        <span className="text-cyan-500 fw-semibold skill-percentage">{skill.level}%</span>
      </div>
      <div className="progress skill-progress" style={{height: '12px'}}>
        <div
          className="progress-bar bg-gradient skill-progress-bar"
          role="progressbar"
          style={{
            width: isVisible ? `${skill.level}%` : '0%',
            transition: `width 1s ease-out ${delay}ms`
          }}
          aria-valuenow={skill.level}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} id="skills" className="py-5 bg-light dark:bg-gray-800 transition-colors duration-300">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold text-dark dark:text-white mb-4">
            Technical <span className="bg-gradient text-gradient">Skills</span>
          </h2>
          <div className="mx-auto bg-gradient mb-4" style={{width: '100px', height: '4px'}}></div>
          <p className="lead text-muted mx-auto" style={{maxWidth: '600px'}}>
            My expertise spans across embedded systems, signal processing, and modern web technologies.
          </p>
        </div>

        <div className="row g-5">
          {/* Embedded Systems Skills */}
          <div className="col-lg-3 col-md-6">
            <div className="skills-category-card h-100">
              <div className="skills-category-header text-center mb-4">
                <div className="skills-category-icon mb-3">🔧</div>
                <h3 className="h4 fw-bold text-dark dark:text-white">
                  Embedded Systems
                </h3>
              </div>
              <div className="skills-list">
                {PORTFOLIO_DATA.skills.embedded.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} delay={index * 200} />
                ))}
              </div>
            </div>
          </div>

          {/* Software & Simulation Skills */}
          <div className="col-lg-3 col-md-6">
            <div className="skills-category-card h-100">
              <div className="skills-category-header text-center mb-4">
                <div className="skills-category-icon mb-3">📊</div>
                <h3 className="h4 fw-bold text-dark dark:text-white">
                  Software & Simulation
                </h3>
              </div>
              <div className="skills-list">
                {PORTFOLIO_DATA.skills.software.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} delay={(index + 4) * 200} />
                ))}
              </div>
            </div>
          </div>

          {/* Web Development Skills */}
          <div className="col-lg-3 col-md-6">
            <div className="skills-category-card h-100">
              <div className="skills-category-header text-center mb-4">
                <div className="skills-category-icon mb-3">💻</div>
                <h3 className="h4 fw-bold text-dark dark:text-white">
                  Web Development
                </h3>
              </div>
              <div className="skills-list">
                {PORTFOLIO_DATA.skills.web.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} delay={(index + 8) * 200} />
                ))}
              </div>
            </div>
          </div>

          {/* Tools & Design Skills */}
          <div className="col-lg-3 col-md-6">
            <div className="skills-category-card h-100">
              <div className="skills-category-header text-center mb-4">
                <div className="skills-category-icon mb-3">⚙️</div>
                <h3 className="h4 fw-bold text-dark dark:text-white">
                  Tools & Design
                </h3>
              </div>
              <div className="skills-list">
                {PORTFOLIO_DATA.skills.tools.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} delay={(index + 12) * 200} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;