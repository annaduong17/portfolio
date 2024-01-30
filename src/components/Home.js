function Home() {
  return (
    <div className="home">
      <div className="home-heading">
        <h1>Welcome to My Portfolio</h1>
        <h2>ANNA DUONG</h2>
      </div>

      <div className="home-description">
        <p>Hello, I'm Anna, a front-end focused full-stack developer. I find joy in turning goals and visions into functional and aesthetically pleasing user interfaces that provide satisfying user experience. Let me know how I can help.</p>
      </div>

      <div className="home-buttons">
        <a className="btn primary-btn no-underline" href="#portfolio-page">View Projects</a>
        <a className="btn secondary-btn no-underline" href="#contact-page">Hire Me</a>
      </div>
    </div>
  );
}
export default Home;