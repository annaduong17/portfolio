function Phone() {
  const playlist = [
    'Currently learning Next.js',
    'Currently working on a Restaurant Online Ordering App',
    'Currently reading A Quiet Life by Ethan Joella'
  ]

  return (
    <div className="phone">
      <div className="phone-display">
        <img height={180}
        width={180} 
        className="avatar" src="/images/avatar.jpeg" alt="avatar" />
        <h2>ANNA DUONG</h2>
      </div>

      <div className="phone-control">
        <p>Currently learning Next.js</p>

        {/* <div className="progress-meter">
          <img width={50} height={50} src="/images/icons/icon-dot.svg" alt="dot svg" />
        </div> */}

        <input type="range" min="0" max="2" />
        
        <div className="control-buttons">
          <button>
            <img width={30} height={30} src="/images/icons/icon-previous.svg" alt="previous icon" />
          </button>
          <button>
            <img width={40} height={40} src="/images/icons/icon-play.svg" alt="play icon" />
          </button>
          <button>
            <img width={30} height={30} src="/images/icons/icon-next.svg" alt="next icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Phone;