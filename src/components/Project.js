import Slider from './Slider';
import Details from './Details';
import TechStack from './TechStack';
import Button from './Button';

function Project({ type, name, description, features, images, techStack, button }) {
  return (
    <div>
      <Slider 
        type={type} 
        name={name}
        images={images}
      />
      <Details 
        type={type}
        name={name}
        description={description}
        features={features}
      />
      <TechStack techStack={techStack} />
      <Button type={type}>{button}</Button>
    </div>
  );
}

export default Project;