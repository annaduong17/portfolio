function Button({ type, children }) {
  let classes; 
  type ? classes = "btn primary btn" : classes = "btn";

  return (
    <button className={classes}>{children}</button>
  );
}

export default Button;