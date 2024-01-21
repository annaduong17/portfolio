function Phone() {
  const playlist = [
    'Currently learning Next.js',
    'Currently working on a Restaurant Online Ordering App',
    'Currently reading A Quiet Life by Ethan Joella'
  ]

  return (
    <div className="phone">
      <div className="phone-display">
        <img height={200}
        width={200} 
        className="avatar" src="/images/avatar.jpeg" alt="avatar" />
        <h2>ANNA DUONG</h2>
        <p>Currently learning Next.js</p>
      </div>

      <div className="phone-control">
        <button>
          <img src="/images/icons/icon-previous.svg" alt="previous icon" />
        </button>
        <button>
          <img src="/images/icons/icon-play.svg" alt="play icon" />
        </button>
        <button>
          <img src="/images/icons/icon-next.svg" alt="next icon" />
        </button>
      </div>
    </div>
  );
}

export default Phone;