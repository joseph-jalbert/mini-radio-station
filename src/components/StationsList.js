import React, { useMemo } from 'react';
import useRecommendations from '../hooks/useRecommendations';

const StationsList = ({stations, setSelectedStation}) => {
  const [updatePreferences, getRecommendations] = useRecommendations(stations);
  const recommendations = getRecommendations();

  const renderStation = station => (
    <button 
      className="station"
      onClick={() => {
        updatePreferences(station.tags);
        setSelectedStation(station.id)
      }}
      key={station.id}
    >
      {station.name}
    </button>
  );

  const stationsSortedByPopularity = useMemo(() => {
    return stations.sort((a, b) => b.popularity - a.popularity);
  }, [stations]);

  return (
    <div className="list">
      <h4><i>-------------suggested stations------------</i></h4>
      <div>
      {recommendations && recommendations.map(({id}) => {
        const station = stations.find(station => id === station.id)
        return renderStation(station);
      })}
      </div>
      <br/>
      <h4>----------All Stations-----------</h4>
      <div>
        {stationsSortedByPopularity.map(station => (
          renderStation(station)
        ))}
      </div>
    </div>
  );
}

export default StationsList;





