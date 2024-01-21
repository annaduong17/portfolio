import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import PortfolioPage from './components/PortfolioPage';
import ContactPage from './components/ContactPage';
import NotFound from './components/NotFound';

function App () {
  return(
    <BrowserRouter>
      <div className='app'>
        <img className='background' width={900} height={600}src="/images/background.jpg" alt="workspace with coffee, cherries, and keyboard" />
        <Navbar />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/portfolio' element={<PortfolioPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;