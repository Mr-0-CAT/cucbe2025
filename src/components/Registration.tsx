import React from 'react';

const Registration = () => {
  return (
    <div id="register" className="container-xxl newsletter py-5 fade-in-up" style={{marginBottom: '2%'}}>
      <div className="container py-5 px-lg-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <p className="section-title text-white justify-content-center"><span></span>Join Us<span></span></p>
            <h1 className="text-center text-white mb-5" style={{fontSize: '2.8rem'}}>Registration Fees</h1>
            <div className="table-responsive">
              <table className="custom-table" style={{background: 'white', color: '#333'}}>
                <thead>
                  <tr>
                    <th style={{verticalAlign: 'middle', textAlign: 'left'}}>Delegate Category</th>
                    <th style={{textAlign: 'center'}}>In Rupees</th>
                    <th style={{textAlign: 'center'}}>In Dollars</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>IEEE Student Members</strong></td>
                    <td style={{textAlign: 'center'}}>₹7,000</td>
                    <td style={{textAlign: 'center'}}>TBA</td>
                  </tr>
                  <tr>
                    <td><strong>IEEE Professional Members</strong></td>
                    <td style={{textAlign: 'center'}}>₹8,000</td>
                    <td style={{textAlign: 'center'}}>TBA</td>
                  </tr>
                  <tr>
                    <td><strong>Non IEEE Research Scholars</strong></td>
                    <td style={{textAlign: 'center'}}>₹9,000</td>
                    <td style={{textAlign: 'center'}}>TBA</td>
                  </tr>
                  <tr>
                    <td><strong>Non-IEEE Professionals</strong></td>
                    <td style={{textAlign: 'center'}}>₹10,000</td>
                    <td style={{textAlign: 'center'}}>TBA</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-4 p-4 rounded" style={{background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)'}}>
              <h5 className="text-white mb-3">
                <i className="fas fa-info-circle me-2"></i>
                Registration Information
              </h5>
              <div className="row text-start">
                <div className="col-md-6">
                  <p className="text-white mb-2">
                    <i className="fas fa-check-circle me-2 text-success"></i>
                    IEEE membership verification required
                  </p>
                  <p className="text-white mb-2">
                    <i className="fas fa-check-circle me-2 text-success"></i>
                    Student ID verification for student rates
                  </p>
                </div>
            
              </div>
            </div>

            <div className="mt-5">
              <a 
                href="https://cmt3.research.microsoft.com/CCUBE2025/Submission/Index" 
                className="btn btn-light btn-lg rounded-pill pulse me-3" 
                style={{fontSize: '1.2rem', padding: '12px 30px'}}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-user-plus me-2"></i>
                Register Now
              </a>
              <a 
                href="#contact" 
                className="btn btn-outline-light btn-lg rounded-pill" 
                style={{fontSize: '1.2rem', padding: '12px 30px'}}
              >
                <i className="fas fa-envelope me-2"></i>
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;