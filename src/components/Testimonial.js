function Testimonial({ name, title, image, recommendation }) {
  return (
    <div className="testimonial">
      <div className="recommender-container">
        <img src={image} alt="avatar" />
        <h2>{name}</h2>
        <h3>{title}</h3>
        </div>
      
      <div className="recommendation-container">
        <p>{recommendation}</p>
      </div>
    </div>
  );
}

export default Testimonial;