import React from 'react';

const Welcome = () => {
  return (
    <div id="about" className="container-xxl py-5">
      <div className="container py-5 px-lg-5">
        <div className="text-center fade-in-up mb-5">
          <p className="section-title text-secondary justify-content-center">
            <span></span>Welcome to<span></span>
          </p>
          <h1 className="display-4 fw-bold mb-4" style={{color: '#004080'}}>
            CCUBE 2025
          </h1>
          <p className="lead text-muted mb-0" style={{fontSize: '1.3rem', maxWidth: '800px', margin: '0 auto'}}>
            4th IEEE International Conference on Circuits, Controls and Communication
          </p>
        </div>

        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="welcome-content">
              <div className="welcome-badge mb-4">
                <span className="badge bg-primary bg-gradient px-4 py-2 rounded-pill">
                  <i className="fas fa-calendar-alt me-2"></i>
                  October 24-25, 2025
                </span>
              </div>
              
              <h2 className="h3 fw-bold mb-4" style={{color: '#004080'}}>
                Dear Researcher,
              </h2>
              
         <p className="text-muted mb-4" style={{fontSize: '1.1rem', lineHeight: '1.8'}}>
  The 4th IEEE International Conference on Circuits, Controls and Communication (CCUBE 2025) provides an excellent platform for researchers and students to present their work and interact with global experts in electronics and electrical engineering.
</p>

<p className="text-muted mb-4" style={{fontSize: '1.1rem', lineHeight: '1.8'}}>
  Organized every four years by the ECE and EEE departments of RNS Institute of Technology, Bangalore, CCUBE has seen great success in 2013, 2017, and 2021, with technical co-sponsorship from IEEE Bangalore Section and societies.
</p>

<p className="text-muted mb-4" style={{fontSize: '1.1rem', lineHeight: '1.8'}}>
  The conference features invited talks, panel discussions, and paper presentations, with accepted papers submitted to IEEE Xplore. It fosters collaboration between academia and industry through technological and theoretical advancements.
</p>


              <div className="d-flex flex-wrap gap-3 mt-4">
                <a 
                  href="https://cmt3.research.microsoft.com/CCUBE2025/Submission/Index" 
                  className="btn btn-primary btn-lg rounded-pill px-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-user-plus me-2"></i>
                  Register Now
                </a>
                <a href="#" className="btn btn-outline-primary btn-lg rounded-pill px-4">
                  <i className="fas fa-file-download me-2"></i>
                  Download Brochure
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="welcome-stats">
              <div className="row g-4">
                <div className="col-6">
                  <div className="stat-card text-center p-4 rounded-4 bg-light border-0 shadow-sm h-100">
                    <div className="stat-icon mb-3">
                      <i className="fas fa-users fa-2x text-primary"></i>
                    </div>
                    <h3 className="h2 fw-bold text-primary mb-2">500+</h3>
                    <p className="text-muted mb-0">Expected Participants</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="stat-card text-center p-4 rounded-4 bg-light border-0 shadow-sm h-100">
                    <div className="stat-icon mb-3">
                      <i className="fas fa-globe fa-2x text-success"></i>
                    </div>
                    <h3 className="h2 fw-bold text-success mb-2">25+</h3>
                    <p className="text-muted mb-0">Countries</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="stat-card text-center p-4 rounded-4 bg-light border-0 shadow-sm h-100">
                    <div className="stat-icon mb-3">
                      <i className="fas fa-award fa-2x text-warning"></i>
                    </div>
                    <h3 className="h2 fw-bold text-warning mb-2">IEEE</h3>
                    <p className="text-muted mb-0">Co-sponsored</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="stat-card text-center p-4 rounded-4 bg-light border-0 shadow-sm h-100">
                    <div className="stat-icon mb-3">
                      <i className="fas fa-book fa-2x text-info"></i>
                    </div>
                    <h3 className="h2 fw-bold text-info mb-2">IEEE</h3>
                    <p className="text-muted mb-0">Xplore Published</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;