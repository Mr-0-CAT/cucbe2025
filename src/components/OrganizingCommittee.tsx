const OrganizingCommittee = () => {
  const committeeData = [
    {
      title: "Chief Patrons",
      members: [
        {
          name: "Mr. Satish R Shetty",
          designation: "Managing Trustee, RN Shetty Trust"
        },
        {
          name: "Mr. Karan Shetty", 
          designation: "CEO, RN Shetty Group of Institutions"
        }
      ]
    },
    {
      title: "Patrons",
      members: [
        {
          name: "Mr. Murali Krishna K Mysore",
          designation: "CTO, RNS Group of Institutions"
        },
        {
          name: "Dr. M K Venkatesha",
          designation: "Director, RNSIT"
        },
       
        {
          name: "Dr. Ramesh Babu H S",
          designation: "Principal, RNSIT"
        }
      ]
    },
    {
      title: "General Chair",
      members: [
        {
          name: "Dr. Vipula Singh",
          designation: "Professor, ECE Dept., RNSIT "
        },
        {
          name: "Dr. S Sumathi",
          designation: "Dean and Professor, EEE Dept., RNSIT "
        },
        {
          name: "Prof. Anandi Giridharan",
          designation: "Principal Research Scientist, IISc, Bangalore"
        }
      ]
    },
    {
      title: "Publication Chair",
      members: [
        {
          name: "Dr. Rajini V Honnungar",
          designation: "HoD & Professor, ECE Dept., RNSIT"
        }
      ]
    },
    {
      title: "Finance Chair", 
      members: [
        {
          name: "Dr. Roopa Nayak",
          designation: "HoD & Associate Professor, EEE Dept., RNSIT"
        }
      ]
    },
    {
      title: "Technical Program Committee",
      members: [
        {
          name: "Dr. T. Srinivas",
          designation: "Professor in ECE Dept, IISc, Bangalore"
        },
        {
          name: "Dr. Navin Kumar",
          designation: "Professor, ECE Dept., Amrita School of Engg., Bangalore"
        },
        {
          name: "Dr. Abhishek Appaji",
          designation: "Associate Professor, B.M.S. College of Engineering, Bangalore"
        },
        {
          name: "Dr. Parameshachari B D",
          designation: "HoD & Professor, NMIT, Bangalore"
        }
      ]
    },
    {
      title: "Technical Chair",
      members: [
        {
          name: "Dr. Ibrar Jahan M A",
          designation: "Associate Professor, ECE Dept., RNSIT"
        },
        {
          name: "Dr. Leena Chandrashekar",
          designation: "Associate Professor, ECE Dept., RNSIT"
        }
      ]
    }
  ];

  return (
    <div className="organizing-committee-page" style={{ background: '#f8f9fa', minHeight: '100vh' }}>
      {/* Header Section */}
      <div className="committee-header">
        <div className="container py-5">
          <div className="text-center">
            <p className="section-title text-secondary justify-content-center">
              <span></span>Meet Our Team<span></span>
            </p>
            <h1 className="display-4 fw-bold mb-4" style={{color: '#1a237e'}}>
              Organizing Committee
            </h1>
            <p className="lead text-muted mb-0" style={{fontSize: '1.3rem', maxWidth: '800px', margin: '0 auto'}}>
              Distinguished leaders and experts driving CCUBE 2025 to excellence
            </p>
          </div>
        </div>
      </div>

      {/* Committee Sections */}
      <div className="container py-5">
        <div className="committee-sections">
          {committeeData.map((section, index) => (
            <div key={index} className="committee-section-wrapper mb-4">
              <div className="committee-card-aligned" style={{ border: '1px solid #e0e0e0', borderRadius: 8, background: '#fff', boxShadow: '0 1px 4px rgba(0,0,0,0.03)' }}>
                <div className="committee-header-card" style={{ background: '#e3eafc', borderBottom: '1px solid #e0e0e0', borderTopLeftRadius: 8, borderTopRightRadius: 8, padding: '12px 24px' }}>
                  <h3 className="committee-title-aligned" style={{ color: '#1a237e', margin: 0, fontWeight: 600 }}>{section.title}</h3>
                </div>
                <div className="committee-members-aligned" style={{ padding: '16px 24px' }}>
                  {section.members.map((member, memberIndex) => (
                    <div key={memberIndex} className="member-item-aligned" style={{ marginBottom: 12, borderBottom: memberIndex !== section.members.length - 1 ? '1px solid #f0f0f0' : 'none', paddingBottom: 12 }}>
                      <div className="member-info-aligned">
                        <h4 className="member-name-aligned" style={{ margin: 0, fontSize: '1.1rem', fontWeight: 500, color: '#222' }}>{member.name}</h4>
                        {member.designation && (
                          <p className="member-designation-aligned" style={{ margin: 0, color: '#555', fontSize: '0.98rem' }}>{member.designation}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="committee-contact-section">
        <div className="container py-5">
          <div className="text-center">
            <h3 className="mb-4" style={{color: '#1a237e'}}>Get in Touch</h3>
            <p className="text-muted mb-4">
              For any queries regarding the conference organization, please feel free to contact our organizing committee.
            </p>
            <a href="#contact" className="btn btn-primary btn-lg rounded-pill px-5">
              <i className="fas fa-envelope me-2"></i>
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizingCommittee;