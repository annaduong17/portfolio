import Home from './Home';
import Phone from './Phone';

function HomePage({ isMobile }) {
  return (
    <div id='home-page' className='home-page'>
      <Phone isMobile={isMobile}/> 
      {!isMobile && <Home />}
    </div>
  );
}

export default HomePage;