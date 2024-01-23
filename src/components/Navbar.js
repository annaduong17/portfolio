import { NavLink } from 'react-router-dom';

function Navbar({ scrolled }) {
  return (
    <nav className={`navbar ${scrolled ? "white-bg" : ""}`}>
      <NavLink className="navlink" to="/">HOME</NavLink>
      <NavLink className="navlink" to="/portfolio">PORTFOLIO</NavLink>
      <NavLink className="navlink" to="/contact">CONTACT</NavLink>
    </nav>
  )
}

export default Navbar;