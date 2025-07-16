import React, { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Conference photos organized by year
  const galleryData = [
    {
      year: "2021",
      title: "CCUBE 2021 - Recent Highlights",
      photos: [
        { src: "https://firebasestorage.googleapis.com/v0/b/dbms-d5864.appspot.com/o/IEEE%2F2021%2F5K4B5868.JPG?alt=media&token=493cf3cb-227f-437e-b5a0-3534c0b7695c", alt: "CCUBE 2021 Conference Session" },
        { src: "https://firebasestorage.googleapis.com/v0/b/dbms-d5864.appspot.com/o/IEEE%2F2021%2F5K4B5927.JPG?alt=media&token=427ecfd4-79d0-4a92-8839-4102f7661b39", alt: "CCUBE 2021 Keynote Speaker" },
        { src: "https://firebasestorage.googleapis.com/v0/b/dbms-d5864.appspot.com/o/IEEE%2F2021%2F5K4B6041.JPG?alt=media&token=5a9dd0ab-5388-4738-87f2-fea103c639bbm ", alt: "CCUBE 2021 Participants" },
        { src: "https://firebasestorage.googleapis.com/v0/b/dbms-d5864.appspot.com/o/IEEE%2F2021%2F5K4B6020.JPG?alt=media&token=c78e2743-a8ba-4478-a603-6ad11b6dd6d3", alt: "CCUBE 2021 Award Ceremony" },
        { src: "https://firebasestorage.googleapis.com/v0/b/dbms-d5864.appspot.com/o/IEEE%2F2021%2F5K4B5936.JPG?alt=media&token=e65715cf-d81a-4eb4-aacc-b1e64cb47e40", alt: "CCUBE 2021 Technical Session" },
        { src: "https://firebasestorage.googleapis.com/v0/b/dbms-d5864.appspot.com/o/IEEE%2F2021%2F5K4B5914.JPG?alt=media&token=26d75da4-7fd0-4adc-af39-275b52c83b7e", alt: "CCUBE 2021 Networking" }
      ],
      color: "from-blue-600 to-blue-800"
    },
    {
      year: "2017",
      title: "CCUBE 2017 - Innovation Showcase",
      photos: [
        { src: "https://firebasestorage.googleapis.com/v0/b/dbms-d5864.appspot.com/o/IEEE%2F2017%2FSAR_1959.JPG?alt=media&token=19749947-c1e2-4f62-ad06-f0db6a61fd36", alt: "CCUBE 2017 Opening Ceremony" },
        { src: "https://firebasestorage.googleapis.com/v0/b/dbms-d5864.appspot.com/o/IEEE%2F2017%2F_SDG9409.JPG?alt=media&token=5087cf7b-5e8e-40ef-9734-0e49458fd144", alt: "CCUBE 2017 Research Presentation" },
        { src: "https://firebasestorage.googleapis.com/v0/b/dbms-d5864.appspot.com/o/IEEE%2F2017%2F_SDG9437.JPG?alt=media&token=beef1f72-f1cc-42c0-a053-8b23a64f0081", alt: "CCUBE 2017 Panel Discussion" },
        { src: "https://firebasestorage.googleapis.com/v0/b/dbms-d5864.appspot.com/o/IEEE%2F2017%2FSAR_1988.JPG?alt=media&token=24283e43-5332-431d-9c74-fef33957c996", alt: "CCUBE 2017 Poster Session" },
        { src: "https://firebasestorage.googleapis.com/v0/b/dbms-d5864.appspot.com/o/IEEE%2F2017%2FSAR_1966.JPG?alt=media&token=d4fc1b26-fa42-4926-a66a-6db5bc708336", alt: "CCUBE 2017 Delegates" },
        { src: "https://firebasestorage.googleapis.com/v0/b/dbms-d5864.appspot.com/o/IEEE%2F2017%2F_SDG9477.JPG?alt=media&token=61cb2980-cdd2-4d4b-8f2b-44297c38a8ff", alt: "CCUBE 2017 Technical Demo" }
      ],
      color: "from-green-600 to-green-800"
    },
    {
      year: "2013",
      title: "CCUBE 2013 - Foundation Year",
      photos: [
        { src: "https://firebasestorage.googleapis.com/v0/b/dbms-d5864.appspot.com/o/IEEE%2F2013%2FDSC_0465.JPG?alt=media&token=defd8001-714c-413e-b8df-24f16dd7af01", alt: "CCUBE 2013 Inaugural Session" },
        { src: "https://firebasestorage.googleapis.com/v0/b/dbms-d5864.appspot.com/o/IEEE%2F2013%2FDSC_0563.JPG?alt=media&token=ee042772-2657-4a67-a761-2df2f72770d4", alt: "CCUBE 2013 Distinguished Guests" },
        { src: "https://firebasestorage.googleapis.com/v0/b/dbms-d5864.appspot.com/o/IEEE%2F2013%2FDSC_0539.JPG?alt=media&token=f1c7ac68-b4d7-4b85-8250-cfd0f6a557b1", alt: "CCUBE 2013 Conference Hall" },
        { src: "https://firebasestorage.googleapis.com/v0/b/dbms-d5864.appspot.com/o/IEEE%2F2013%2FDSC_0500.JPG?alt=media&token=ca8f4e01-3dd3-4a17-a047-1eb4c2cd236e", alt: "CCUBE 2013 Research Showcase" },
        { src: "https://firebasestorage.googleapis.com/v0/b/dbms-d5864.appspot.com/o/IEEE%2F2013%2FDSC_0778.JPG?alt=media&token=0095f69b-ac64-44e8-be8a-340e0b0ed532", alt: "CCUBE 2013 Participants" },
        { src: "https://firebasestorage.googleapis.com/v0/b/dbms-d5864.appspot.com/o/IEEE%2F2013%2FDSC_0578.JPG?alt=media&token=d28c2bfd-4739-4879-aeef-b6b052be27ad", alt: "CCUBE 2013 Closing Ceremony" }
      ],
      color: "from-purple-600 to-purple-800"
    }
  ];

  // Flatten all photos for lightbox navigation
  const allPhotos = galleryData.flatMap(year => year.photos);

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setCurrentIndex(allPhotos.findIndex(photo => photo.src === imageSrc));
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % allPhotos.length
      : (currentIndex - 1 + allPhotos.length) % allPhotos.length;
    
    setCurrentIndex(newIndex);
    setSelectedImage(allPhotos[newIndex].src);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateImage('prev');
    if (e.key === 'ArrowRight') navigateImage('next');
  };

  return (
    <div className="gallery-page">
      {/* Header Section */}
      <div className="gallery-header">
        <div className="container py-5">
          <div className="text-center fade-in-up">
            <p className="section-title text-secondary justify-content-center">
              <span></span>Conference Memories<span></span>
            </p>
            <h1 className="display-4 fw-bold mb-4" style={{color: '#004080'}}>
              CCUBE Gallery
            </h1>
            <p className="lead text-muted mb-0" style={{fontSize: '1.3rem', maxWidth: '800px', margin: '0 auto'}}>
              Explore the journey of CCUBE conferences through the years - from groundbreaking research presentations to memorable networking moments
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Sections */}
      <div className="container py-5">
        {galleryData.map((yearData, yearIndex) => (
          <div key={yearData.year} className="gallery-year-section mb-5" style={{animationDelay: `${yearIndex * 0.2}s`}}>
            {/* Year Header */}
            <div className={`year-header bg-gradient-to-r ${yearData.color} mb-4`}>
              <div className="year-header-content">
                <h2 className="year-title">{yearData.year}</h2>
                <p className="year-subtitle">{yearData.title}</p>
              </div>
            </div>

            {/* Photo Grid */}
            <div className="photo-grid">
              {yearData.photos.map((photo, photoIndex) => (
                <div 
                  key={photoIndex} 
                  className="photo-item"
                  onClick={() => openLightbox(photo.src)}
                  style={{animationDelay: `${(yearIndex * 0.2) + (photoIndex * 0.1)}s`}}
                >
                  <div className="photo-container">
                    <img 
                      src={photo.src} 
                      alt={photo.alt}
                      className="gallery-image"
                      loading="lazy"
                    />
                    <div className="photo-overlay">
                      <div className="photo-overlay-content">
                        <i className="fas fa-search-plus"></i>
                        <p>{photo.alt}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="lightbox-overlay"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              <i className="fas fa-times"></i>
            </button>
            
            <button className="lightbox-nav lightbox-prev" onClick={() => navigateImage('prev')}>
              <i className="fas fa-chevron-left"></i>
            </button>
            
            <img 
              src={selectedImage} 
              alt={allPhotos[currentIndex]?.alt || "Conference Photo"}
              className="lightbox-image"
            />
            
            <button className="lightbox-nav lightbox-next" onClick={() => navigateImage('next')}>
              <i className="fas fa-chevron-right"></i>
            </button>
            
            <div className="lightbox-caption">
              <p>{allPhotos[currentIndex]?.alt}</p>
              <span className="lightbox-counter">
                {currentIndex + 1} of {allPhotos.length}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div className="gallery-cta-section">
        <div className="container py-5">
          <div className="text-center">
            <h3 className="mb-4" style={{color: '#004080'}}>Be Part of CCUBE 2025</h3>
            <p className="text-muted mb-4">
              Join us for the next chapter in CCUBE's journey and create new memories at CCUBE 2025.
            </p>
            <a 
              href="https://cmt3.research.microsoft.com/CCUBE2025/Submission/Index" 
              className="btn btn-primary btn-lg rounded-pill px-5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-calendar-plus me-2"></i>
              Register for CCUBE 2025
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;