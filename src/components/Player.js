import React, { useRef, useEffect } from 'react';

const ERROR_TEXT = 'Sorry, there was a problem trying to play this station. Please try another.';

const Player = ({station, stationError}) => {
  const playerRef = useRef(null);

  useEffect(() => {
    const htmlPlayer = playerRef.current;
    return () => {
      // stop audio stream on unmount
      htmlPlayer.src='';
    };
  }, [station]);

  return (
    <div  className="player" key={station.id}>
      <h3>{station.name}</h3>
      <div>{station.description}</div>
      <br/>
      <div><b>Categories:</b> {station.tags.join(', ')}</div>
      <br/>
      <div><img alt={station.name} src={station.imgUrl} /></div>
      <audio
        ref={playerRef}
        autoPlay={true}
        controls
        onError={() => {
          alert(ERROR_TEXT);
          stationError();
        }}
        src={station.streamUrl}>
      </audio>
    </div>
  );
}


export default Player;