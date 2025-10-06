import React from 'react';

const Speakers = () => {
  return (
    <div id="speakers" className="container-xxl py-5">
      <div className="container py-5 px-lg-5">
        <div className="text-center fade-in-up mb-5">
          <p className="section-title text-secondary justify-content-center">
            <span></span>Speakers<span></span>
          </p>
          <h1 className="display-4 fw-bold mb-4" style={{color: '#004080'}}>
            Speakers
          </h1>
          <p className="lead text-muted mb-0" style={{fontSize: '1.3rem', maxWidth: '800px', margin: '0 auto'}}>
            Following are the speakers for CCUBE 2025
          </p>
        </div>

        {/* Day 1 Speakers */}
        <div className="row g-4 mb-5">
          <div className="col-12">
            <h2 className="text-center mb-4" style={{color: '#1976d2'}}>
              <i className="fas fa-calendar-day me-2"></i>
              Day 1
            </h2>
          </div>
          
          {/* Keynote Speaker */}
          <div className="col-12">
            <div className="speaker-card h-100 d-flex align-items-center" style={{
              backgroundColor: '#f8f9fa',
              borderRadius: '12px',
              padding: '1.5rem',
              boxShadow: '0 4px 6px rgba(0,0,0,0.08)',
              border: '1px solid #e3f2fd'
            }}>
              <div className="flex-shrink-0 me-4" style={{width: '140px'}}>
                <img 
                  src="/src/speaker img/WhatsApp Image 2025-10-06 at 09.39.04.jpeg" 
                  alt="Jairam Sukumar"
                  className="img-fluid rounded"
                  style={{
                    width: '140px',
                    height: '140px',
                    objectFit: 'cover',
                    border: '3px solid #1976d2'
                  }}
                />
              </div>
              <div className="flex-grow-1">
                <div className="d-flex justify-content-between align-items-start flex-wrap">
                  <h4 className="mb-2" style={{color: '#1565c0'}}>Jairam Sukumar</h4>
                  <span className="badge bg-primary fs-6 px-3 py-2 mb-2">
                    <i className="fas fa-star me-1"></i>
                    Keynote Speaker
                  </span>
                </div>
                <p className="text-muted mb-0">
                  <strong>Senior Director Technology</strong>, Qualcomm
                </p>
              </div>
            </div>
          </div>

          {/* Day 1 Plenary Speaker */}
          <div className="col-12">
            <div className="speaker-card h-100 d-flex align-items-center" style={{
              backgroundColor: '#f8f9fa',
              borderRadius: '12px',
              padding: '1.5rem',
              boxShadow: '0 4px 6px rgba(0,0,0,0.08)',
              border: '1px solid #e3f2fd'
            }}>
              <div className="flex-shrink-0 me-4" style={{width: '140px'}}>
                <img 
                  src="/src/speaker img/WhatsApp Image 2025-10-06 at 09.52.02.jpeg" 
                  alt="Dr T Srinivas"
                  className="img-fluid rounded"
                  style={{
                    width: '140px',
                    height: '140px',
                    objectFit: 'cover',
                    border: '3px solid #1976d2'
                  }}
                />
              </div>
              <div className="flex-grow-1">
                <div className="d-flex justify-content-between align-items-start flex-wrap">
                  <h4 className="mb-2" style={{color: '#1565c0'}}>Dr T Srinivas</h4>
                  <span className="badge bg-info fs-6 px-3 py-2 mb-2">
                    <i className="fas fa-microphone me-1"></i>
                    Day 1 Plenary Talk
                  </span>
                </div>
                <p className="text-muted mb-2">
                  <strong>Associate Professor</strong>, Department of ECE, IISc
                </p>
                <p className="mb-0">
                  <i className="fas fa-clock me-2" style={{color: '#1976d2'}}></i>
                  <strong>Time:</strong> 2:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Day 2 Speakers */}
        <div className="row g-4">
          <div className="col-12">
            <h2 className="text-center mb-4" style={{color: '#1976d2'}}>
              <i className="fas fa-calendar-day me-2"></i>
              Day 2
            </h2>
          </div>
          
          {/* Day 2 Plenary Speaker */}
          <div className="col-12">
            <div className="speaker-card h-100 d-flex align-items-center" style={{
              backgroundColor: '#f8f9fa',
              borderRadius: '12px',
              padding: '1.5rem',
              boxShadow: '0 4px 6px rgba(0,0,0,0.08)',
              border: '1px solid #e3f2fd'
            }}>
              <div className="flex-shrink-0 me-4" style={{width: '140px'}}>
                <img 
                  src="/src/speaker img/WhatsApp Image 2025-09-30 at 11.05.23.jpeg" 
                  alt="Dr Praveen C Ramamurthy"
                  className="img-fluid rounded"
                  style={{
                    width: '140px',
                    height: '140px',
                    objectFit: 'cover',
                    border: '3px solid #1976d2'
                  }}
                />
              </div>
              <div className="flex-grow-1">
                <div className="d-flex justify-content-between align-items-start flex-wrap">
                  <h4 className="mb-2" style={{color: '#1565c0'}}>Dr Praveen C Ramamurthy</h4>
                  <span className="badge bg-info fs-6 px-3 py-2 mb-2">
                    <i className="fas fa-microphone me-1"></i>
                    Day 2 Plenary Talk
                  </span>
                </div>
                <p className="text-muted mb-2">
                  <strong>Professor</strong>, Department of Materials Engineering<br />
                  <strong>Chair, Interdisciplinary Centre for Water Research</strong>, IISc
                </p>
                <p className="mb-0">
                  <i className="fas fa-clock me-2" style={{color: '#1976d2'}}></i>
                  <strong>Time:</strong> 9:30 AM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers; 