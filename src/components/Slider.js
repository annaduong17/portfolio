function Slider({ type, name, images }) {
  const renderedImages = images.map((image, index) => {
    return (
      <img 
        key={index}
        src={image} 
        alt={name} 
      />
    );
  });

  const renderedDots = images.map((image, index) => {
    return (
      <img 
        key={index}
        src="/images/icons/icon-dot.svg"
        alt="dot icon"
      />
    );
  });

  return (
    <div className="slider">
      <div className="slider-images">
        {renderedImages}
      </div>
      <div className="slider-dots">
        {renderedDots}
      </div>
    </div>
  );
}

export default Slider;