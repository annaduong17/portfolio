function ProjectDetails({ description, features, techStack, button, link }) {

  const renderedFeatures = features.map((feature, i) => {
    return (
      <li key={i}>{feature}</li>
    );
  });

  const renderedTechStack = techStack.map((tech, i) => {
    return (
      <span key={i} className="tech">{tech}</span>
    );
  });

  return (
    <div className="project-details">
      <p className="description">{description}</p>
      <ul className="features">
        {renderedFeatures}
      </ul>
      <div className="tech-stack">{renderedTechStack}</div>
      <a href={link}>{button}</a>
    </div>
  );
} 

export default ProjectDetails;