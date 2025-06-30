import React from 'react';
import { Calendar, Briefcase, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../utils/constants';

const Experience = () => {
  const handleCertificateClick = (url) => {
    // Create a temporary anchor element and click it
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="experience" className="py-5 bg-light dark:bg-gray-800 transition-colors duration-300">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold text-dark dark:text-white mb-4">
            Work <span className="bg-gradient text-gradient">Experience</span>
          </h2>
          <div className="mx-auto bg-gradient mb-4" style={{width: '100px', height: '4px'}}></div>
          <p className="lead text-muted mx-auto" style={{maxWidth: '600px'}}>
            My professional journey and internship experiences that have shaped my career.
          </p>
        </div>

        {PORTFOLIO_DATA.experience.length > 0 ? (
          <div className="position-relative">
            {/* Timeline Line */}
            <div className="position-absolute start-50 translate-middle-x bg-gradient timeline-line" 
                 style={{width: '4px', height: '100%', top: 0}}></div>

            <div className="row">
              {PORTFOLIO_DATA.experience.map((exp, index) => (
                <div key={index} className="col-12 mb-5">
                  <div className={`row align-items-center ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                    {/* Timeline Dot */}
                    <div className="position-absolute start-50 translate-middle bg-gradient rounded-circle timeline-dot"
                         style={{width: '24px', height: '24px', zIndex: 10}}></div>

                    {/* Content */}
                    <div className="col-md-5">
                      <div className="card border-0 shadow-lg experience-card bg-white dark:bg-gray-900">
                        <div className="card-body p-4">
                          <div className="d-flex align-items-center gap-2 text-cyan-600 mb-2">
                            <Calendar size={16} />
                            <span className="fw-semibold">{exp.period}</span>
                          </div>
                          <h5 className="card-title fw-bold text-dark dark:text-white mb-2">
                            {exp.position}
                          </h5>
                          <div className="d-flex align-items-center gap-2 text-muted mb-3">
                            <Briefcase size={16} />
                            <span>{exp.company}</span>
                          </div>
                          <p className="card-text text-muted mb-3">
                            {exp.description}
                          </p>
                          {exp.technologies && (
                            <div className="d-flex flex-wrap gap-2 mb-3">
                              {exp.technologies.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="badge bg-gradient-cyan text-dark px-2 py-1"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}
                          {exp.certificateUrl && (
                            <div className="mt-3">
                              <button
                                onClick={() => handleCertificateClick(exp.certificateUrl)}
                                className="btn btn-outline-cyan btn-sm d-flex align-items-center gap-2"
                              >
                                <ExternalLink size={16} />
                                View Certificate
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Empty space for alternating layout */}
                    <div className="col-md-5"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-5">
            <div className="display-1 text-muted mb-4">💼</div>
            <h4 className="text-dark dark:text-white mb-3">Experience Coming Soon</h4>
            <p className="lead text-muted">
              Currently focused on building skills and working on exciting projects. 
              Professional experience section will be updated as I gain more industry exposure.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;