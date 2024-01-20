import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/portfolio">PORTFOLIO</NavLink>
      <NavLink to="/contact">CONTACT</NavLink>
    </nav>
  )
}

export default Navbar;