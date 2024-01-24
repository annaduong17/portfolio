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
      <button
        key={i}
        className={`slider-dot${isSelected ? ' cherry' : ''}`}
        onClick={() => handleDotClick(i)}>
    </button>
    );
  });

  return (
    <div className="slider">
      <div className="img-btn-container">
        <button onClick={() => handleImagePrevious()}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
          </svg>
        </button>
        <div className="images">
          {renderedImages}
        </div>
        <button onClick={handleImageNext}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
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