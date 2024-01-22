function Details({ type, name, description, features }) {

  const renderedItems = features.map((feature, index) => {
    return (
      <li key={index} className="feature">{feature}</li>
    );
  })

  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <ul className="features">
        {renderedItems}
      </ul>
    </div>
  );
}

export default Details;