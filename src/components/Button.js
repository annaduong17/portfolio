function Button({ className, children, link }) {

  return (
    <a className="link" href={link} target="_blank" rel="noreferrer">
      <button className={className}>
        {children}
      </button>
    </a>
  );
}

export default Button;