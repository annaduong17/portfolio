import { useState, useEffect } from 'react';
import {NavLink} from 'react-router-dom';

function BackToTop() {
  const [ showComponent, setShowComponent ] = useState(false);

  const handleBackToTopClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 500;
      const shouldShowComponent = window.scrollY > scrollThreshold;
      setShowComponent(shouldShowComponent);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div>
      {showComponent && <button className='back-to-top-btn' onClick={handleBackToTopClick}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>
      </svg><p>Back to top</p></button>}
    </div>
  )
}

export default BackToTop;