function TechStack({ techStack }) {
  const renderedItems = techStack.map((tech, index) => {
    return (
      <span key={index} className="tech" >{tech}</span>
    )
  })
  return (
    <div>{renderedItems}</div>
  );
}

export default TechStack;