import Home from './Home';
import Phone from './Phone';
import '../styles/HomePage.scss';

function HomePage({ isMobile }) {
  return (
    <div id='home-page' className='home-page page-margin flex-row-center'>
      <Phone isMobile={isMobile}/> 
      {!isMobile && <Home isMobile={isMobile}/>}
    </div>
  );
}

export default HomePage;