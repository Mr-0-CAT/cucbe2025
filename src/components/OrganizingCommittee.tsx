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
      ],
      color: "from-purple-600 to-purple-800"
    },
    {
      title: "Patrons",
      members: [
        {
          name: "Dr. M K Venkatesha",
          designation: "Director, RNSIT"
        },
        {
          name: "Mr. Murali Krishna K Mysore",
          designation: "CTO, RNS Group of Institutions"
        },
        {
          name: "Dr. Ramesh Babu H S",
          designation: "Principal, RNSIT"
        }
      ],
      color: "from-blue-600 to-blue-800"
    },
    {
      title: "General Chair",
      members: [
        {
          name: "Dr. Vipula Singh",
          designation: ""
        },
        {
          name: "Dr. S Sumathi",
          designation: ""
        },
        {
          name: "Prof. Anandi Giridharan",
          designation: ""
        }
      ],
      color: "from-green-600 to-green-800"
    },
    {
      title: "Publication Chair",
      members: [
        {
          name: "Dr. Rajini V Honnungar",
          designation: ""
        }
      ],
      color: "from-orange-600 to-orange-800"
    },
    {
      title: "Finance Chair", 
      members: [
        {
          name: "Dr. Roopa Nayak",
          designation: ""
        }
      ],
      color: "from-red-600 to-red-800"
    },
    {
      title: "Technical Program Committee",
      members: [
        {
          name: "Dr. T. Srinivas",
          designation: ""
        },
        {
          name: "Dr. Navin Kumar",
          designation: ""
        },
        {
          name: "Dr. Abhishek Appaji",
          designation: ""
        },
        {
          name: "Dr. Parameshachari B D",
          designation: ""
        }
      ],
      color: "from-indigo-600 to-indigo-800"
    },
    {
      title: "Technical Chair",
      members: [
        {
          name: "Dr. Ibrar Jahan M A",
          designation: ""
        },
        {
          name: "Dr. Leena Chandrashekar",
          designation: ""
        }
      ],
      color: "from-teal-600 to-teal-800"
    }
  ];

  return (
    <div className="organizing-committee-page">
      {/* Header Section */}
      <div className="committee-header">
        <div className="container py-5">
          <div className="text-center fade-in-up">
            <p className="section-title text-secondary justify-content-center">
              <span></span>Meet Our Team<span></span>
            </p>
            <h1 className="display-4 fw-bold mb-4" style={{color: '#004080'}}>
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
            <div key={index} className="committee-section-wrapper fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="committee-card-aligned">
                <div className={`committee-header-card bg-gradient-to-r ${section.color}`}>
                  <h3 className="committee-title-aligned">{section.title}</h3>
                </div>
                <div className="committee-members-aligned">
                  {section.members.map((member, memberIndex) => (
                    <div key={memberIndex} className="member-item-aligned">
                      <div className="member-info-aligned">
                        <h4 className="member-name-aligned">{member.name}</h4>
                        {member.designation && (
                          <p className="member-designation-aligned">{member.designation}</p>
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
            <h3 className="mb-4" style={{color: '#004080'}}>Get in Touch</h3>
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