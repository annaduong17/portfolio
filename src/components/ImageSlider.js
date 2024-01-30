import { useState } from 'react';

function ImageSlider({ name, images }) {
  const [ index, setIndex ] = useState(0);
  const [ selectedIndex, setSelectedIndex ] = useState(0);

  const handleDotClick = (i) => {
    setIndex(i);
    setSelectedIndex(i);
  }

  const handleImageClick = () => {
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
        className={`slider-dot ${isSelected ? 'fill' : ''}`}
        onClick={() => handleDotClick(i)}>
      </span>
    );
  });

  return (
    <div className="image-slider flex-column-center">
      <div onClick={handleImageClick} className='images-container'>
        <div className="images">
          {renderedImages}
        </div>
      </div>
      
      <div className="slider-dots flex-row-center">
        {renderedDots}
      </div>
    </div>
  );
}

export default ImageSlider;