import { useState, useEffect, useRef } from 'react';

function Phone() {
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
    setIndex(parseInt(e.target.value));
  }


  const playlist = [
    'Currently learning Github Actions',
    'Currently working on a Restaurant Online Ordering App',
    'Currently reading A Quiet Life by Ethan Joella'
  ]

  useEffect(() => {
    rangeRef.current.value = index;

    let intervalId;

    if (playing) {
      
      intervalId = setInterval(() => {
        setIndex((prev) => (prev === playlist.length - 1 ? 0 : prev + 1));
      }, 2000);
    }

    return () => clearInterval(intervalId);
  }, [index, playing, playlist.length]);

  const renderedItems = playlist.map((item, i) => {
    return (
      <p key={i} className="song">{item}</p>
    );
  })

  return (
    <div className="phone">
      <div className="phone-display">
        <img height={180}
        width={180} 
        className="avatar" src="/images/avatar.jpeg" alt="avatar" />
        <h2>ANNA DUONG</h2>
      </div>

      <div className="phone-control">
        {renderedItems[index]}

        <input ref={rangeRef} onChange={handleRangeChange} type="range" min="0" max="2" />
        
        <div className="control-buttons">
          <button onClick={handlePrevious}>
            <img width={30} height={30} src="/images/icons/icon-previous.svg" alt="previous icon" />
          </button>

          { playing ? 
            <button onClick={handlePause}>
              <img width={40} src="/images/icons/icon-pause.svg" alt="pause button" />
            </button> : 
            <button onClick={handlePlay}>
              <img width={40} height={40} src="/images/icons/icon-play.svg" alt="play icon" />
            </button>
            }

          <button onClick={handleNext}>
            <img width={30} height={30} src="/images/icons/icon-next.svg" alt="next icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Phone;