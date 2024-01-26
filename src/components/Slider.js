import { useState } from 'react';

function Slider({ type, name, images }) {
  const [ index, setIndex ] = useState(0);
  const [ selectedIndex, setSelectedIndex ] = useState(0);

  const handleDotClick = (i) => {
    setIndex(i);
    setSelectedIndex(i);
  }

  const handleImagePrevious = () => {
    setSelectedIndex(prev => {
      return prev === 0 ? images.length - 1 : prev - 1;
    });

    setIndex(prev => {
      return prev === 0 ? images.length - 1 : prev - 1;
    });
  };

  const handleImageNext = () => {
    setSelectedIndex(prev => {
      return prev === images.length - 1 ? 0 : prev + 1;
    });

    setIndex(prev => {
      return prev === images.length - 1 ? 0 : prev + 1;
    });
  };

  const renderedImages = images.map((image, i) => {
    return (
      <img 
        key={i}
        src={image} 
        alt={name}
        style={{ translate: `${-100 * index}%` }}
      />
    );
  });

  const renderedDots = images.map((image, i) => {
    const isSelected = i === selectedIndex;

    return (
      <span
        key={i}
        className={`slider-dot${isSelected ? ' cherry' : ''}`}
        onClick={() => handleDotClick(i)}>
      </span>
    );
  });

  return (
    <div className="slider">
      <div className="img-btn-container">
        <button onClick={() => handleImagePrevious()}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16"><path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
          </svg>
        </button>
        <div className="images">
          {renderedImages}
        </div>
        <button onClick={handleImageNext}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16"><path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
          </svg>
        </button>
      </div>
      
      <div className="slider-dots">
        {renderedDots}
      </div>
    </div>
  );
}

export default Slider;