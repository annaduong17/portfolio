import ProjectInfo from './ProjectInfo';
import ImageSlider from './ImageSlider';

function ProjectDetails({ name, description, features, techStack, button, link, images, showDetails }) {

  return (
    <div className='project-details flex-column-center'>
      {showDetails ? <ProjectInfo
        name={name} 
        description={description}
        features={features} 
        techStack={techStack}
        button={button}
        link={link}/> : <ImageSlider 
        images={images} /> 
      }
    </div>
  );
} 

export default ProjectDetails;