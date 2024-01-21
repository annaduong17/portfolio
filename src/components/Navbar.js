import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar'>
      <NavLink className="navlink" to="/">HOME</NavLink>
      <NavLink className="navlink" to="/portfolio">PORTFOLIO</NavLink>
      <NavLink className="navlink" to="/contact">CONTACT</NavLink>
    </nav>
  )
}

export default Navbar;