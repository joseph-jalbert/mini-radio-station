import React from 'react';

const ERROR_TEXT = 'Sorry, there was a problem trying to play this station. Please try another.';

const Player = ({station, stationError}) => (
  <div className="player" key={station.id}>
    <h3>{station.name}</h3>
    <div>{station.description}</div>
    <br/>
    <div><b>Categories:</b> {station.tags.join(', ')}</div>
    <br/>
    <div><img alt={station.name} src={station.imgUrl} /></div>
    <audio
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


export default Player;