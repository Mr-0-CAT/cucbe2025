import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import About from './components/About';
import OrganizingCommittee from './components/OrganizingCommittee';
import SubmissionGuidelines from './components/SubmissionGuidelines';
import Gallery from './components/Gallery';
import ImportantDates from './components/ImportantDates';
import CallForPapers from './components/CallForPapers';
import Tracks from './components/Tracks';
import Registration from './components/Registration';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';
import Speakers from './components/Speakers';

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'organizing-committee':
        return <OrganizingCommittee />;
      case 'submission-guidelines':
        return <SubmissionGuidelines />;
      case 'gallery':
        return <Gallery />;
      case 'speakers':
        return <Speakers />;
      case 'call-for-papers':
        return <CallForPapers />;
      case 'important-dates':
        return <ImportantDates />;
      default:
        return (
          <>
            <Hero />
            <Welcome />
            <About />
            <ImportantDates />
            <CallForPapers />
            <Tracks />
            <Registration />
            <Sponsors />
          </>
        );
    }
  };

  return (
    <div className="container-xxl bg-white p-0">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
      
      {/* Back to top button */}
      <a 
        href="#" 
        className="back-to-top"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        <i className="bi bi-arrow-up"></i>
      </a>
    </div>
  );
}

export default App;