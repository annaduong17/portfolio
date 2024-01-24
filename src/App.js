import { useState, useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import PortfolioPage from './components/PortfolioPage';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './BackToTop';

function App () {
  const [ scrolled, setScrolled ] = useState(false);
  const navbarRef = useRef();

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
          <Navbar scrolled={scrolled} ref={navbarRef} />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/portfolio' element={<PortfolioPage />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<NotFound />} />
          </Routes>

          <BackToTop />
          <Footer />
          

          <ScrollToTop />
        </div>
  )
}

export default App;