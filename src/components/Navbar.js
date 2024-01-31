import Menu from './Menu';
import '../styles/Navbar.scss';

function Navbar({ scrolled, isMobile, showMenu, toggleMenu, handleNavClick, activeLink }) {

  return (
    
    <div className="navbar-container">
      {isMobile ? (
        <nav className={`navbar mobile ${scrolled ? "cherry-bg" : ""}`}>
          <button onClick={toggleMenu} className='menu-icon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/></svg>
          </button>
        </nav>) : (
        <nav className={`navbar ${scrolled ? "cherry-bg" : ""}`}>
          <a onClick={handleNavClick} href='#app' className={`navlink no-underline ${activeLink === "HOME" ? "active" : ""}`}>HOME</a>
          <a onClick={handleNavClick} href="#portfolio-page" className={`navlink no-underline ${activeLink === "PROJECTS" ? "active" : ""}`}>PROJECTS</a>
          <a onClick={handleNavClick} href="#testimonials-page" className={`navlink no-underline ${activeLink === "TESTIMONIALS" ? "active" : ""}`}>TESTIMONIALS</a>
          <a onClick={handleNavClick} href="#contact-page" className={`navlink no-underline ${activeLink === "CONTACT" ? "active" : ""}`}>CONTACT</a>
        </nav>)  
      }

        {showMenu && <Menu activeLink={activeLink} toggleMenu={toggleMenu}/>}
    </div>
  )
}

export default Navbar;