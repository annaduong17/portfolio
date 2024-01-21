import Home from './Home';
import Phone from './Phone';

function HomePage() {
  return (
    <div className='home-page'>
      <Phone /> 
      <Home />
    </div>
  );
}

export default HomePage;