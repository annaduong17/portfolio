import { NavLink } from 'react-router-dom';
import Menu from './Menu';

function Navbar({ scrolled, isDesktop, showMenu, toggleMenu, handleResize }) {

  return (
    <div className="navbar-container">
      {isDesktop ? (
        <nav className={`navbar ${scrolled ? "cherry-bg" : ""}`}>
          <NavLink className="navlink" to="/">HOME</NavLink>
          <NavLink className="navlink" to="/portfolio">PORTFOLIO</NavLink>
          <NavLink className="navlink" to="/contact">CONTACT</NavLink>
        </nav>) : (
        <nav className={`navbar mobile ${scrolled ? "cherry-bg" : ""}`}>
          <button onClick={toggleMenu} className='menu-icon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/></svg>
          </button>
        </nav>)
        }

        {showMenu && <Menu toggleMenu={toggleMenu}/>}
    </div>
  )
}

export default Navbar;