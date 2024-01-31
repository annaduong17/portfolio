import { useState, useEffect, useRef } from 'react';
import Home from './Home';

function Phone({ isMobile }) {
  const [ index, setIndex ] = useState(0);
  const [ playing, setPlaying ] = useState(false);
  const rangeRef = useRef(null);
  
  const handlePlay = () => {
      console.log(index);
      setPlaying(true);
      console.log('rangeRef in handlePlay',rangeRef.current.value);
  } 

  const handlePause = () => {
    setPlaying(false);
  }

  const handleNext = () => {
    setIndex(prev => {
      return prev === playlist.length - 1 ? 0 : prev + 1;
    });
  }

  const handlePrevious = () => {
    setIndex(prev => {
      return prev === 0 ? playlist.length - 1 : prev - 1;
    });
  }

  const handleRangeChange = (e) => {
    setPlaying(false);
    setIndex(Number.parseInt(e.target.value));
  }

  const playlist = [
    'aduong9417@gmail.com',
    'github.com/annaduong17',
    'linkedin.com/in/annaduong17',
    'Learning Next.js',
    'Working on a Quiz App'
  ]

  useEffect(() => {
    rangeRef.current.value = index;

    let intervalId;

    if (playing) {
      
      intervalId = setInterval(() => {
        setIndex((prev) => (prev === playlist.length - 1 ? 0 : prev + 1));
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [index, playing, playlist.length]);

  const renderedItems = playlist.map((item, i) => {
    return (
      <p key={i} className="song flex-row-center">{item}</p>
    );
  })

  return (
    <div className='phone-container flex-row-center'>
      <div className="phone">
      <div className="phone-display flex-column-center">
        <img height={180}
        width={180} 
        className="avatar" src="/images/avatar.jpeg" alt="avatar" />
        <div>
          <h2 className='name'>Anna Duong</h2>
          <h3 className='title'>Web Developer</h3>
        </div>
      </div>
      {isMobile && <Home />}

      <div className="phone-control flex-column-center">
        {renderedItems[index]}

        <input ref={rangeRef} onChange={handleRangeChange} type="range" min="0" max={playlist.length - 1} />
        
        <div className="control-buttons flex-row-center">
          <button onClick={handlePrevious}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="previous bi bi-skip-start-fill" viewBox="0 0 16 16">
            <path d="M4 4a.5.5 0 0 1 1 0v3.248l6.267-3.636c.54-.313 1.232.066 1.232.696v7.384c0 .63-.692 1.01-1.232.697L5 8.753V12a.5.5 0 0 1-1 0z"/>
            </svg>
          </button>

          { playing ? 
            <button className='pause-btn' onClick={handlePause}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="pause bi bi-pause-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5"/>
              </svg>
            </button> :
            <button onClick={handlePlay}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="play bi bi-play-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
                </svg>
            </button>
            }

          <button onClick={handleNext}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="next bi bi-skip-end-fill" viewBox="0 0 16 16">
            <path d="M12.5 4a.5.5 0 0 0-1 0v3.248L5.233 3.612C4.693 3.3 4 3.678 4 4.308v7.384c0 .63.692 1.01 1.233.697L11.5 8.753V12a.5.5 0 0 0 1 0z"/>
          </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Phone;