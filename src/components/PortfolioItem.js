import { useState } from 'react';
import ToggleDetails from './ToggleDetails';
import ImageSlider from './ImageSlider';
import ProjectDetails from './ProjectDetails';

function PortfolioItem({ type, name, description, features, images, techStack, button, link }) {
  const [ showDetails, setShowDetails ] = useState(false);
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className='portfolio-item'>
      <h2 className='project-name'>{name}</h2>
      <ToggleDetails handleToggle={toggleDetails}/>
      {showDetails ? <ProjectDetails 
        description={description}
        features={features} 
        techStack={techStack}
        button={button}
        link={link}/> : <ImageSlider 
        name={name}
        images={images} /> 
      }
    </div>
  );
}

export default PortfolioItem;