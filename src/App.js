import { useState, useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import PortfolioPage from './components/PortfolioPage';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import ScrollToTop from './components/ScrollToTop';
import BackToTopButton from './components/BackToTopButton';

function App () {
  const [ scrolled, setScrolled ] = useState(false);
  const [ isDesktop, setIsDesktop ] = useState(window.innerWidth > 600);
  const [ showMenu, setShowMenu ] = useState(false);
  const navbarRef = useRef();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  const handleResize = () => {
    setIsDesktop(window.innerWidth > 600);
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
  }, [scrolled]);

  return(
        <div className='app'>
          <Navbar 
            scrolled={scrolled} 
            ref={navbarRef}
            isDesktop={isDesktop}
            showMenu={showMenu}
            toggleMenu={toggleMenu}
            handleResize={handleResize}
          />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/portfolio' element={<PortfolioPage />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<NotFound />} />
          </Routes>

          <BackToTopButton />
          <Footer />
          
          <ScrollToTop />
        </div>
  )
}

export default App;