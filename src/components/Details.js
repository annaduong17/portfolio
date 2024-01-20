function Details({ type, name, description, features }) {
  let classes;
  type === "experience" ? classes = "experience" : classes = "project";

  const renderedItems = features.map((feature, index) => {
    return (
      <li key={index} className="feature">{feature}</li>
    );
  })

  return (
    <div className={classes}>
      <h3>{name}</h3>
      <p>{description}</p>
      <ul className="features">
        {renderedItems}
      </ul>
    </div>
  );
}

export default Details;