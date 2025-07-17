import React, { useState, useEffect } from 'react';
import logo from '../SPS_Logo_Color_RGB_Chapter_Lockup_Live.png';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleNavClick = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`header-container ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="header-nav">
        {/* Logo */}
        <div className="header-logo">
          <img src={logo} alt="IEEE SPS Bangalore - CCUBE 2025" />
        </div>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle" 
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        {/* Navigation Menu */}
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a 
              href="#" 
              className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
            >
              Home
            </a>
          </li>
        
          <li className="nav-item">
            <a 
              href="#" 
              className={`nav-link ${currentPage === 'organizing-committee' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNavClick('organizing-committee'); }}
            >
              Organizing Committee
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#" 
              className={`nav-link ${currentPage === 'speakers' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNavClick('speakers'); }}
            >
              Speakers
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#" 
              className={`nav-link ${currentPage === 'gallery' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNavClick('gallery'); }}
            >
              Gallery
            </a>
          </li>
          <li className="nav-item dropdown">
            <a 
              href="#" 
              className="nav-link dropdown-toggle" 
              onClick={(e) => {
                e.preventDefault();
                toggleDropdown();
              }}
            >
              Authors
            </a>
            <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
              <a 
                className="dropdown-item" 
                href="#" 
                onClick={(e) => { e.preventDefault(); handleNavClick('call-for-papers'); }}
              >
                Call For Papers
              </a>
              <a 
                className="dropdown-item" 
                href="#" 
                onClick={(e) => { e.preventDefault(); handleNavClick('submission-guidelines'); }}
              >
                Submission Guidelines
              </a>
              <a 
                className="dropdown-item" 
                href="#" 
                onClick={(e) => { e.preventDefault(); handleNavClick('important-dates'); }}
              >
                Important Dates
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a 
              href="https://cmt3.research.microsoft.com/CCUBE2025/Submission/Index" 
              className="register-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register Now
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;