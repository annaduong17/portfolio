import Menu from './Menu';

function Navbar({ scrolled, isMobile, showMenu, toggleMenu }) {

  return (
    
    <div className="navbar-container">
      {isMobile ? (
        <nav className={`navbar mobile ${scrolled ? "cherry-bg" : ""}`}>
          <button onClick={toggleMenu} className='menu-icon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/></svg>
          </button>
        </nav>) : (
        <nav className={`navbar ${scrolled ? "cherry-bg" : ""}`}>
          <a href='#app' className="navlink">HOME</a>
          <a href="#portfolio-page" className="navlink">PROJECTS</a>
          <a href="#contact-page" className="navlink">CONTACT</a>
        </nav>)  
      }

        {showMenu && <Menu toggleMenu={toggleMenu}/>}
    </div>
  )
}

export default Navbar;