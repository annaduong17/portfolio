import Slider from './Slider';
import Details from './Details';
import TechStack from './TechStack';
import Button from './Button';

function Project({ type, name, description, features, images, techStack, button }) {
  return (
    <div>
      <Slider 
        type={type} 
        images={images}
      />
      <Details 
        type={type}
        name={name}
        description={description}
        features={features}
      />
      <TechStack techStack={techStack} />
      <Button button={button} />
    </div>
  );
}

export default Project;