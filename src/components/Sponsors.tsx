import React from 'react';
import logo1 from '../sponsors/image.png';
import logo2 from '../SPSJPA.png';
import whatsappImage1 from '../WhatsApp Image 2025-07-09 at 16.57.54.jpeg';
import whatsappImage2 from '../WhatsApp Image 2025-07-11 at 20.27.39.jpeg';
import sponsor1 from '../sponsors/download (3).png';
import sponsor2 from '../sponsors/download (2).png';
import sponsor3 from '../sponsors/CAS-WHITE-BG.webp';
import sponsor4 from '../sponsors/IMG-20220607-WA0017-removebg-preview-pq9krfnqom5dtk76fcxckg2o5wbvy2vkfqza21iyts-1.png';
import sponsor5 from '../sponsors/ieee-logo.webp';

const Sponsors = () => {
  const sponsors = [
   {
      id: 5,
      name: "IEEE Sponsor",
      logo: sponsor5,
    },
         {
      id: 1,
      name: "Primary Sponsor",
      logo: logo1,
    },
    {
      id: 2,
      name: "IEEE SPS Bangalore",
      logo: logo2,
    },
    {
      id: 7,
      name: "Industry Partner",
      logo: sponsor4,
    },
    {
      id: 6,
      name: "CAS Sponsor",
      logo: sponsor3,
    },
    
 
    {
      id: 8,
      name: "Supporting Organization",
      logo: sponsor1,
    },
    {
      id: 9,
      name: "Technical Sponsor",
      logo: sponsor2,
    },

     {
      id: 3,
      name: "Conference Partner",
      logo: whatsappImage1,
    },
    {
      id: 4,
      name: "Technology Partner",
      logo: whatsappImage2,
    }
  ];

  return (
    <section className="sponsors-section py-5">
      <div className="container py-5">
        <div className="text-center mb-5 fade-in-up">
          <p className="section-title text-secondary justify-content-center">
            <span></span>CCUBE 2025<span></span>
          </p>
          <h1 className="display-5 fw-bold mb-4" style={{color: '#004080'}}>
            Our Sponsors & Partners
          </h1>
          <p className="lead text-muted max-w-3xl mx-auto">
            We are proud to collaborate with leading organizations in technology, research, and innovation
          </p>
        </div>

        {/* Sponsor Logo Grid */}
        <div className="row justify-content-center align-items-center g-4">
          {sponsors.map(sponsor => (
            <div key={sponsor.id} className="col-lg-3 col-md-4 col-sm-6 text-center">
              <div className="sponsor-logo-simple">
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name}
                  className="img-fluid"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Become a Sponsor CTA */}
        <div className="text-center mt-5">
          <div className="become-sponsor-simple mx-auto">
            <h4 className="mb-3">Join Our Prestigious Sponsor Network</h4>
            <p className="text-muted mb-4">
              Partner with CCUBE 2025 and showcase your organization to leading researchers and industry professionals.
            </p>
            <a href="#contact" className="btn btn-primary btn-lg rounded-pill px-5">
              <i className="fas fa-handshake me-2"></i>
              Become a Sponsor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;