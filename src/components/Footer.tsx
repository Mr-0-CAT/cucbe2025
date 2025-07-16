import React from 'react';

const Footer = () => {
  return (
    <div className="container-fluid bg-primary text-light footer fade-in" style={{marginBottom: '0%', marginTop: '0%'}}>
      <div className="container py-5 px-lg-5">
        <div className="row g-5 position-relative">
          <div className="col-md-6 col-lg-3">
            <p className="section-title text-white h5 mb-4">Get In Touch<span></span></p>
            <p><i className="fa fa-map-marker-alt me-3"></i></p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
              <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-instagram"></i></a>
              <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
              <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <p className="section-title text-white h5 mb-4">CONNECT WITH IEEE<span></span></p>
            <a className="btn btn-link" href="">IEEE Collaborate</a>
            <a className="btn btn-link" href="">Careers at IEEE</a>
            <a className="btn btn-link" href="">IEEE Newsroom</a>
            <a className="btn btn-link" href="">IEEE Media Kit</a>
            <a className="btn btn-link" href="">IEEE Learning Network</a>
          </div>
          <div className="col-md-6 col-lg-3">
            <p className="section-title text-white h5 mb-4">MEMBERSHIP<span></span></p>
            <a className="btn btn-link" href="https://www.ieee.org/membership/join/index.html">Join</a>
            <a className="btn btn-link" href="https://www.ieee.org/membership/renew.html">Renew</a>
            <a className="btn btn-link" href="https://www.ieee.org/membership/benefits/index.html">Benefits</a>
            <a className="btn btn-link" href="https://ieee-collabratec.ieee.org/">IEEE Collaborate</a>
            <a className="btn btn-link" href="https://ieeebangalore.org/guide-to-join-ieee/">Guide to Join IEEE</a>
          </div>
          <div className="col-md-6 col-lg-3">
            <p className="section-title text-white h5 mb-4">QUICK LINKS<span></span></p>
            <a className="btn btn-link" href="">Home</a>
            <a className="btn btn-link" href="">About-Us</a>
            <a className="btn btn-link" href="#">Best Paper Awards</a>
            <a className="btn btn-link" href="">Early Registrations</a>
            <a className="btn btn-link" href="">Previous Proceedings</a>
          </div>
        </div>
      </div>
      <div className="container px-lg-5">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <a className="border-bottom" href="ieeebangalore.org">IEEE Bangalore Section - 2023</a>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;