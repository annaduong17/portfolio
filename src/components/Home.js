function Home() {
  return (
    <div className="home">
      <div className="home-heading">
        <h1 className="heading bold">Welcome to My Portfolio</h1>
      </div>

      <div className="home-description">
        <p>Hello, I'm Anna, a full-stack web developer. I find joy in translating goals and visions into both functional and visually appealing user interfaces. Feel free to explore my work and let me know how I can help or contribute to your next project.</p>
      </div>

      <div className="home-buttons">
        <a className="btn primary-btn no-underline bold" href="#portfolio-page">See My Work</a>
        <a className="btn secondary-btn no-underline bold" href="#contact-page">Contact Me</a>
      </div>
    </div>
  );
}
export default Home;