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
        width={30}
      />
    );
  });

  return (
    <div className="slider">
      <div className="img-btn-container">
        <button>
          <img src="/images/icons/icon-arrow-left-circle.svg" alt="arrow left icon" />
        </button>
        <div className="images">
          {renderedImages}
        </div>
        <button>
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