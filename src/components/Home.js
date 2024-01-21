import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div className="home">

      <div className="home-heading">
        <h1>Hello there, I'm <span>Anna</span>.</h1>
        <h2>FRONT END DEVELOPER</h2>
      </div>

      <div className='socials-description'>
        <div className="home-socials">
          <img width={30} height={30} src="/images/icons/icon-github.svg" alt="github icon" />
          <img width={35} height={25} src="/images/icons/icon-linkedin.svg" alt="linkedin icon" />
        </div>

        <div className="home-description">
          <p>I find joy in turning goals and visions into aesthetically pleasing user interfaces with satisfying user experience. Let me know how I can help.</p>
        </div>
      </div>
      <div className="home-buttons">
        <NavLink to="/contact" className="btn primary-btn">Hire Me</NavLink>
        <a download href="/files/anna-duong-resume.pdf" className="btn secondary-btn">Download Resume</a>
      </div>

      <div className='view-portfolio-container'>
        <NavLink to="/portfolio">
          <p>View my portfolio</p>
          <img width={30} height={30} src="/images/icons/icon-arrow-right.svg" alt="right arrow icon" />
        </NavLink>
      </div>
    </div>
  );
}

export default Home;