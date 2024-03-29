import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import PortfolioPage from './components/PortfolioPage';
import TestimonialsPage from './components/TestimonialsPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';

function App () {
  const [ scrolled, setScrolled ] = useState(false);
  const [ isMobile, setIsMobile] = useState(window.innerWidth < 600);
  const [ showMenu, setShowMenu ] = useState(false);
  const [ activeLink, setActiveLink ] = useState("");

  const handleNavClick = (e) => {
    setActiveLink(e.target.textContent);
  }

  const toggleMenu = (e) => {
    setShowMenu(!showMenu);
    if (e.target.textContent) {
      setActiveLink(e.target.textContent);
    }
  }

  const handleResize = () => {
    setIsMobile(window.innerWidth < 600);
  }

  useEffect(() => {
    const handleScroll = window.addEventListener('scroll', () => {
      setScrolled(true);
      
      if (window.scrollY === 0) {
        setScrolled(false);
      }
    });

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled, activeLink]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  });

  return(
        <div id='home-page' className='app'>
          <Navbar 
            scrolled={scrolled} 
            isMobile={isMobile}
            showMenu={showMenu}
            toggleMenu={toggleMenu}
            handleResize={handleResize}
            handleNavClick={handleNavClick}
            activeLink={activeLink}
          />

          <HomePage isMobile={isMobile} />
          <PortfolioPage />
          <TestimonialsPage />
          <ContactPage setActiveLink={setActiveLink}/>

          <BackToTopButton setActiveLink={setActiveLink}/>
          <Footer />
        </div>
  )
}

export default App;