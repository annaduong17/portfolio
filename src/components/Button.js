function Button({ className, children, link }) {

  return (
    <a className="link" href={link}>
      <button className={className}>
        {children}
      </button>
    </a>
  );
}

export default Button;