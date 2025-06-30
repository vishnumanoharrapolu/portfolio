import React, { useState } from 'react';
import { Award, ExternalLink, Calendar, Building, Eye, X } from 'lucide-react';
import { PORTFOLIO_DATA } from '../utils/constants';

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const handleOriginalLinkClick = (url) => {
    // Create a temporary anchor element and click it
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const CertificateModal = ({ certificate, onClose }) => (
    <div className="modal fade show d-block" style={{backgroundColor: 'rgba(0,0,0,0.8)'}}>
      <div className="modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content bg-white dark:bg-gray-800">
          <div className="modal-header border-0">
            <h5 className="modal-title fw-bold text-dark dark:text-white">{certificate.title}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <div className="text-center mb-4">
              <iframe
                src={certificate.embedUrl}
                width="100%"
                height="600"
                frameBorder="0"
                className="rounded"
                title={certificate.title}
                allow="autoplay"
              ></iframe>
            </div>
            
            <div className="row g-4">
              <div className="col-md-6">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <Building className="text-cyan-500" size={20} />
                  <div>
                    <p className="fw-semibold mb-0 text-dark dark:text-white">Issuer</p>
                    <p className="text-muted mb-0">{certificate.issuer}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <Calendar className="text-blue-500" size={20} />
                  <div>
                    <p className="fw-semibold mb-0 text-dark dark:text-white">Date Issued</p>
                    <p className="text-muted mb-0">{certificate.date}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="lead mb-4 text-dark dark:text-white">{certificate.description}</p>
            
            <div className="d-flex gap-3">
              <button
                onClick={() => handleOriginalLinkClick(certificate.credentialUrl)}
                className="btn btn-gradient d-flex align-items-center gap-2"
              >
                <ExternalLink size={18} />
                View Original Certificate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="certificates" className="py-5 bg-light dark:bg-gray-800 transition-colors duration-300">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold text-dark dark:text-white mb-4">
            Certificates & <span className="bg-gradient text-gradient">Achievements</span>
          </h2>
          <div className="mx-auto bg-gradient mb-4" style={{width: '100px', height: '4px'}}></div>
          <p className="lead text-muted mx-auto" style={{maxWidth: '600px'}}>
            Professional certifications and achievements that validate my skills and expertise in various technologies.
          </p>
        </div>

        {PORTFOLIO_DATA.certificates && PORTFOLIO_DATA.certificates.length > 0 ? (
          <div className="row g-4">
            {PORTFOLIO_DATA.certificates.map((certificate, index) => (
              <div key={index} className="col-lg-6 col-md-6">
                <div className="card h-100 border-0 shadow-lg certificate-card bg-white dark:bg-gray-900">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-start gap-3 mb-3">
                      <div className="certificate-icon bg-gradient rounded-circle p-3 d-flex align-items-center justify-content-center">
                        <span className="fs-3">{certificate.icon}</span>
                      </div>
                      <div className="flex-grow-1 certificate-content">
                        <h5 className="card-title fw-bold text-dark dark:text-white mb-2 certificate-title">
                          {certificate.title}
                        </h5>
                        <div className="d-flex align-items-center gap-2 text-muted mb-2 certificate-issuer">
                          <Building size={16} />
                          <span>{certificate.issuer}</span>
                        </div>
                        <div className="d-flex align-items-center gap-2 text-cyan-600 mb-3 certificate-date">
                          <Calendar size={16} />
                          <span className="fw-semibold">{certificate.date}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="card-text text-muted mb-4 certificate-description">
                      {certificate.description}
                    </p>
                    
                    <div className="d-flex gap-2">
                      <button
                        onClick={() => setSelectedCertificate(certificate)}
                        className="btn btn-gradient btn-sm d-flex align-items-center gap-2"
                      >
                        <Eye size={16} />
                        View Certificate
                      </button>
                      <button
                        onClick={() => handleOriginalLinkClick(certificate.credentialUrl)}
                        className="btn btn-outline-cyan btn-sm d-flex align-items-center gap-2"
                      >
                        <ExternalLink size={16} />
                        Original Link
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-5">
            <div className="display-1 text-muted mb-4">🏆</div>
            <h4 className="text-dark dark:text-white mb-3">Certificates Coming Soon</h4>
            <p className="lead text-muted">
              Currently working on obtaining professional certifications. 
              This section will be updated as I complete various certification programs.
            </p>
          </div>
        )}

        {selectedCertificate && (
          <CertificateModal 
            certificate={selectedCertificate} 
            onClose={() => setSelectedCertificate(null)} 
          />
        )}
      </div>
    </section>
  );
};

export default Certificates;