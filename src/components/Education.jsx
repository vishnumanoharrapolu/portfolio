import React from 'react';
import { Calendar, GraduationCap } from 'lucide-react';
import { PORTFOLIO_DATA } from '../utils/constants';

const Education = () => {
  return (
    <section id="education" className="py-5 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold text-dark dark:text-white mb-4">
            My <span className="bg-gradient text-gradient">Education</span>
          </h2>
          <div className="mx-auto bg-gradient mb-4" style={{width: '100px', height: '4px'}}></div>
          <p className="lead text-muted mx-auto" style={{maxWidth: '600px'}}>
            My educational background and the academic foundation that shaped my technical expertise.
          </p>
        </div>

        <div className="position-relative">
          {/* Timeline Line */}
          <div className="position-absolute start-50 translate-middle-x bg-gradient timeline-line" 
               style={{width: '4px', height: '100%', top: 0}}></div>

          <div className="row">
            {PORTFOLIO_DATA.education.map((edu, index) => (
              <div key={index} className="col-12 mb-5">
                <div className={`row align-items-center ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="position-absolute start-50 translate-middle bg-gradient rounded-circle timeline-dot"
                       style={{width: '24px', height: '24px', zIndex: 10}}></div>

                  {/* Content */}
                  <div className="col-md-5">
                    <div className="card border-0 shadow-lg experience-card bg-white dark:bg-gray-800">
                      <div className="card-body p-4">
                        <div className="d-flex align-items-center gap-2 text-cyan-600 mb-2">
                          <Calendar size={16} />
                          <span className="fw-semibold">{edu.period}</span>
                        </div>
                        <h5 className="card-title fw-bold text-dark dark:text-white mb-2">
                          {edu.title}
                        </h5>
                        <div className="d-flex align-items-center gap-2 text-muted mb-3">
                          <GraduationCap size={16} />
                          <span>{edu.institution}</span>
                        </div>
                        <p className="card-text text-muted">
                          {edu.description}
                        </p>
                        {edu.grade && (
                          <div className="mt-3">
                            <span className="badge bg-gradient-cyan text-dark px-3 py-2">
                              {edu.grade}
                            </span>
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
      </div>
    </section>
  );
};

export default Education;