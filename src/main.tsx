import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Add scroll animations
window.addEventListener('scroll', function() {
  const elements = document.querySelectorAll('.modern-card, .timeline-item, .col-box, .card3');
  
  elements.forEach(element => {
    const position = element.getBoundingClientRect();
    
    // If element is in viewport
    if(position.top < window.innerHeight && position.bottom >= 0) {
      if (!element.classList.contains('fade-in')) {
        element.classList.add('fade-in');
      }
    }
  });
});

// Back to top button functionality
window.addEventListener('scroll', function() {
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    if (window.scrollY > 100) {
      backToTop.style.display = 'flex';
    } else {
      backToTop.style.display = 'none';
    }
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
