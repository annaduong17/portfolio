function ProjectInfo({ showDetails, name, description, features, techStack, button, link }) {
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
    
      <div className="project-info">
        <h2 className="project-name">{name}</h2>
        <p className="description">{description}</p>
        <ul className="features">
          {renderedFeatures}
        </ul>
        <div className="tech-stack flex-wrap">{renderedTechStack}</div>
        <a target="_blank" rel="noreferrer" href={link} className="project-link no-underline">
          <span>{button}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
          </svg>
        </a>
      </div>
    
  )
}

export default ProjectInfo;