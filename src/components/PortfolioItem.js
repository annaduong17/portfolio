import Slider from './Slider';
import Details from './Details';
import TechStack from './TechStack';
import Button from './Button';

function PortfolioItem({ type, name, description, features, images, techStack, button }) {
  return (
    <div className='portfolio-item'>
      <div className='slider-container'>
        <Slider 
          type={type} 
          name={name}
          images={images}
        />
      </div>

      <div className='info-container'>
        <Details 
          type={type}
          name={name}
          description={description}
          features={features}
        />
        <TechStack techStack={techStack} />
        <Button className="btn primary-btn" >{button}</Button>
      </div>
    </div>
  );
}

export default PortfolioItem;