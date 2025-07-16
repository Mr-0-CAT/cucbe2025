import React from 'react';

const SubmissionGuidelines = () => {
  return (
    <div className="submission-guidelines-page">
      {/* Header Section */}
      <div className="guidelines-header">
        <div className="container py-5">
          <div className="text-center fade-in-up">
            <p className="section-title text-secondary justify-content-center">
              <span></span>Author Information<span></span>
            </p>
            <h1 className="display-4 fw-bold mb-4" style={{color: '#004080'}}>
              Guidelines to Authors
            </h1>
            <p className="lead text-muted mb-0" style={{fontSize: '1.3rem', maxWidth: '800px', margin: '0 auto'}}>
              Below are some useful instructions to assist the authors to submit their papers for IEEE CCUBE 2025
            </p>
          </div>
        </div>
      </div>

      {/* Guidelines Content */}
      <div className="container py-5">
        <div className="guidelines-content">
          
          {/* Originality Section */}
          <div className="guideline-section fade-in-up" style={{animationDelay: '0.1s'}}>
            <div className="guideline-card">
              <div className="guideline-header bg-gradient-to-r from-red-600 to-red-800">
                <h3 className="guideline-title">
                  <i className="fas fa-shield-alt me-3"></i>
                  Originality of Submitted Papers
                </h3>
              </div>
              <div className="guideline-content-body">
                <p>
                  Papers submitted to IEEE CCUBE 2025 shall contain original work by the author(s) that have not been published or submitted for publication elsewhere. The IEEE anti-plagiarism policy is applicable to all submissions. The author(s) are solely responsible for any plagiarized submission.
                </p>
              </div>
            </div>
          </div>

          {/* Paper Submission Section */}
          <div className="guideline-section fade-in-up" style={{animationDelay: '0.2s'}}>
            <div className="guideline-card">
              <div className="guideline-header bg-gradient-to-r from-blue-600 to-blue-800">
                <h3 className="guideline-title">
                  <i className="fas fa-file-alt me-3"></i>
                  Paper Submission
                </h3>
              </div>
              <div className="guideline-content-body">
                <ul className="guidelines-list">
                  <li>
                    <i className="fas fa-check-circle text-success me-2"></i>
                    All papers are required to be prepared and submitted in the IEEE Standard two-column conference format of A4 size in English.
                  </li>
                  <li>
                    <i className="fas fa-check-circle text-success me-2"></i>
                    Papers must be four to six pages in length, including texts, Figures, photographs and references. Literature review only papers are not accepted.
                  </li>
                  <li>
                    <i className="fas fa-exclamation-triangle text-warning me-2"></i>
                    Any submitted paper that exceeds six pages will be rejected.
                  </li>
                  <li>
                    <i className="fas fa-user-secret text-info me-2"></i>
                    Do not include the author name, email ids or affiliations in the paper submission, as they will be double-blind reviewed.
                  </li>
                  <li>
                    <i className="fas fa-times-circle text-danger me-2"></i>
                    Failing to conform to the standard format will result in rejection.
                  </li>
                </ul>
                
                <div className="template-links mt-4">
                  <h5 className="mb-3" style={{color: '#004080'}}>
                    <i className="fas fa-download me-2"></i>
                    Template Downloads
                  </h5>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <a 
                        href="https://www.ieee.org/conferences/publishing/templates" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary btn-lg w-100"
                      >
                        <i className="fas fa-external-link-alt me-2"></i>
                        IEEE Conference Templates
                      </a>
                    </div>
                    <div className="col-md-6">
                      <a 
                        href="https://www.ieee.org/conferences/publishing/templates" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-outline-secondary btn-lg w-100"
                      >
                        <i className="fas fa-info-circle me-2"></i>
                        Detailed Format Information
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Paper Upload Section */}
          <div className="guideline-section fade-in-up" style={{animationDelay: '0.3s'}}>
            <div className="guideline-card">
              <div className="guideline-header bg-gradient-to-r from-green-600 to-green-800">
                <h3 className="guideline-title">
                  <i className="fas fa-cloud-upload-alt me-3"></i>
                  Paper Upload
                </h3>
              </div>
              <div className="guideline-content-body">
                <ul className="guidelines-list">
                  <li>
                    <i className="fas fa-file-pdf text-danger me-2"></i>
                    All papers must be submitted in PDF Document via CMT Platform
                  </li>
                  <li>
                    <i className="fas fa-user-plus text-primary me-2"></i>
                    The submitting authors may be required to create a CMT account before uploading the paper (if the submitting author does not have a CMT account).
                  </li>
                  <li>
                    <i className="fas fa-edit text-info me-2"></i>
                    While uploading the paper, the authors should provide the title of the paper, an abstract of no more than 250 words in the respective text boxes in the paper submission page.
                  </li>
                  <li>
                    <i className="fas fa-database text-warning me-2"></i>
                    Please note that all accepted papers that are registered and presented in the conference will be sent for possible inclusion in IEEE Xplore.
                  </li>
                  <li>
                    <i className="fas fa-copyright text-secondary me-2"></i>
                    The authors must agree to the IEEE copyright conditions and sign the IEEE copyright form as part of the online submission process. All submitted papers will be peer reviewed by the Technical Program Committees (TPC).
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Submit Paper CTA */}
          <div className="submission-cta fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="cta-card">
              <div className="text-center">
                <h3 className="mb-4" style={{color: '#004080'}}>
                  <i className="fas fa-paper-plane me-3"></i>
                  Ready to Submit Your Paper?
                </h3>
                <p className="text-muted mb-4" style={{fontSize: '1.1rem'}}>
                  Submit your research paper through the official CMT platform for IEEE CCUBE 2025
                </p>
                <a 
                  href="https://cmt3.research.microsoft.com/CCUBE2025/Submission/Index" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg rounded-pill px-5 pulse"
                  style={{fontSize: '1.2rem'}}
                >
                  <i className="fas fa-upload me-2"></i>
                  Submit Your Paper
                </a>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="important-notes fade-in-up" style={{animationDelay: '0.5s'}}>
            <div className="alert-card">
              <h4 className="mb-3">
                <i className="fas fa-exclamation-circle text-warning me-2"></i>
                Important Notes
              </h4>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="note-item">
                    <i className="fas fa-clock text-primary me-2"></i>
                    <strong>Submission Deadline:</strong> August 1st, 2025
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="note-item">
                    <i className="fas fa-eye text-info me-2"></i>
                    <strong>Review Process:</strong> Double-blind peer review
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="note-item">
                    <i className="fas fa-file-contract text-success me-2"></i>
                    <strong>Copyright:</strong> IEEE copyright agreement required
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="note-item">
                    <i className="fas fa-award text-warning me-2"></i>
                    <strong>Publication:</strong> IEEE Xplore inclusion for accepted papers
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

export default SubmissionGuidelines;