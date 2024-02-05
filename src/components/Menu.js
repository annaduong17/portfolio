import '../styles/Menu.scss';

function Menu({ toggleMenu, activeLink }) {
  console.log(activeLink);
  return (
    <div className='menu'>
      <button onClick={toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/></svg>
      </button>
      <ul className="flex-column-center">
        <li>
          <a className={`no-underline ${activeLink === "HOME" ? "bold" : ""}`} onClick={toggleMenu} href="#home-page">HOME</a>
        </li>
        <li>
        <a className={`no-underline ${activeLink === "PROJECTS" ? "bold" : ""}`} onClick={toggleMenu} href="#portfolio-page">PROJECTS</a>
        </li>
        <li>
        <a className={`no-underline ${activeLink === "TESTIMONIALS" ? "bold" : ""}`} onClick={toggleMenu} href="#testimonials-page">TESTIMONIALS</a>
        </li>
        <li>
        <a className={`no-underline ${activeLink === "CONTACT" ? "bold" : ""}`} onClick={toggleMenu} href="#contact-page">CONTACT</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;