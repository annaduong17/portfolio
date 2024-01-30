import { useState } from 'react';
import ToggleDetails from './ToggleDetails';
import ProjectDetails from './ProjectDetails';

function PortfolioItem({ name, description, features, techStack, button, link, images }) {
  const [ showDetails, setShowDetails ] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className='portfolio-item flex-column-center'>
      <ToggleDetails handleToggle={toggleDetails}/>
      <ProjectDetails 
        showDetails={showDetails}
        name={name}
        description={description}
        features={features}
        techStack={techStack}
        button={button}
        link={link}
        images={images}
      />
    </div>
  );
}

export default PortfolioItem;