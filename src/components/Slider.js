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
          <img src="/images/icons/icon-arrow-left-circle.svg" alt="arrow left icon" />
        </button>
        <div className="images">
          {renderedImages}
        </div>
        <button onClick={handleImageNext}>
          <img src="/images/icons/icon-arrow-right-circle.svg" alt="arrow right icon" />
        </button>
      </div>
      
      <div className="slider-dots">
        {renderedDots}
      </div>
    </div>
  );
}

export default Slider;