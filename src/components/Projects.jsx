import React, { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { PORTFOLIO_DATA } from '../utils/constants';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const ProjectModal = ({ project, onClose }) => (
    <div className="modal fade show d-block" style={{backgroundColor: 'rgba(0,0,0,0.8)'}}>
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content bg-white dark:bg-gray-800">
          <div className="modal-header border-0">
            <h5 className="modal-title fw-bold">{project.title}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <img
              src={project.image}
              alt={project.title}
              className="img-fluid rounded mb-4"
            />
            <p className="lead mb-4">{project.description}</p>
            
            <div className="mb-4">
              <h6 className="fw-semibold mb-3">Technologies Used</h6>
              <div className="d-flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="badge bg-gradient-cyan text-dark px-3 py-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="d-flex gap-3">
              <a
                href={project.liveUrl}
                className="btn btn-gradient d-flex align-items-center gap-2"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
              <a
                href={project.githubUrl}
                className="btn btn-outline-cyan d-flex align-items-center gap-2"
              >
                <Github size={18} />
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-5 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold text-dark dark:text-white mb-4">
            My <span className="bg-gradient text-gradient">Projects</span>
          </h2>
          <div className="mx-auto bg-gradient mb-4" style={{width: '100px', height: '4px'}}></div>
          <p className="lead text-muted mx-auto" style={{maxWidth: '600px'}}>
            Here are some of the projects I've worked on that showcase my skills and passion for development.
          </p>
        </div>

        <div className="row g-4">
          {PORTFOLIO_DATA.projects.map((project) => (
            <div key={project.id} className="col-lg-4 col-md-6">
              <div
                className="card h-100 border-0 shadow-lg project-card"
                onClick={() => setSelectedProject(project)}
                style={{cursor: 'pointer'}}
              >
                <div className="position-relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="card-img-top project-image"
                    style={{height: '200px', objectFit: 'cover'}}
                  />
                  <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 opacity-0 project-overlay d-flex align-items-center justify-content-center gap-2">
                    <a
                      href={project.liveUrl}
                      onClick={(e) => e.stopPropagation()}
                      className="btn btn-light btn-sm rounded-circle p-2"
                    >
                      <ExternalLink size={16} />
                    </a>
                    <a
                      href={project.githubUrl}
                      onClick={(e) => e.stopPropagation()}
                      className="btn btn-light btn-sm rounded-circle p-2"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>
                
                <div className="card-body">
                  <h5 className="card-title fw-bold">{project.title}</h5>
                  <p className="card-text text-muted">{project.description}</p>
                  
                  <div className="d-flex flex-wrap gap-1">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="badge bg-light text-dark"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="badge bg-gradient-cyan text-dark">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </div>
    </section>
  );
};

export default Projects;