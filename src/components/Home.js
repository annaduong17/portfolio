import Button from './Button';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <div className="home-heading">
        <h1>Hello there, I'm Anna.</h1>
        <h2>FRONT END DEVELOPER</h2>
      </div>

      <div className="home-socials">
        <img src="/images/icons/icon-github.svg" alt="github icon" />
        <img src="/images/icons/icon-linkedin.svg" alt="linkedin icon" />
      </div>

      <div className="home-description">
        <p>I find joy in turning goals and visions into aesthetically pleasing user interfaces with satisfying user experience. Let me know how I can help.</p>
      </div>

      <div className="home-buttons">
        <Button primary>HIRE ME</Button>
        <Button secondary>HIRE ME</Button>
      </div>

      <div>
        <NavLink>
          <p>View my portfolio</p>
          <img src="/images/icons/icon-arrow-right.svg" alt="right arrow icon" />
        </NavLink>
      </div>
    </div>
  );
}

export default Home;