import Home from './Home';
import Phone from './Phone';

function HomePage({ isMobile }) {
  return (
    <div id='home-page' className='home-page page-margin'>
      <Phone isMobile={isMobile}/> 
      {!isMobile && <Home isMobile={isMobile}/>}
    </div>
  );
}

export default HomePage;