import React from 'react';

const ImportantDates = () => {
  return (
    <div className="container-xxl py-5 bg-light" style={{borderRadius: '20px', margin: '2rem auto', maxWidth: '1320px'}}>
      <div className="container py-5 px-lg-5">
        <div className="fade-in-up">
          <p className="section-title text-secondary justify-content-center"><span></span>Mark Your Calendar<span></span></p>
          <h1 className="text-center mb-5" style={{color: '#004080'}}>Important Dates</h1>
        </div>
        
        <div className="timeline">
          <div className="timeline-item timeline-left">
            <div className="timeline-content">
              <h4>Submission of Papers</h4>
              <p>July 1st 2025</p>
            </div>
          </div>
          <div className="timeline-item timeline-right">
            <div className="timeline-content">
              <h4>Notification of Acceptance	</h4>
              <p>Sept 15, 2025</p>
            </div>
          </div>
          <div className="timeline-item timeline-left">
            <div className="timeline-content">
              <h4>Camera Ready Papers	</h4>
              <p>Sept 30, 2025</p>
            </div>
          </div>
          <div className="timeline-item timeline-right">
            <div className="timeline-content">
              <h4>Registration	</h4>
              <p>Sept 30, 2025</p>
            </div>
          </div>
          <div className="timeline-item timeline-left">
            <div className="timeline-content">
              <h4>Conference Date</h4>
              <p>Oct 24-25 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportantDates;