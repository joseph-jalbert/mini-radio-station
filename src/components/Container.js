import React, { useState } from 'react';
import { Fetch } from 'react-request';
import createStationFromRawData from '../models/station';
import Player from './Player';
import StationsList from './StationsList';

const Container = () => {
  const [selectedStation, setSelectedStation] = useState(false);
  const [stations, setStations] = useState([]);
  const [isError, setError] = useState(false);

  const stationError = () => {
    setSelectedStation(false);
  };

  const STATIONS_URL = 'https://s3-us-west-1.amazonaws.com/cdn-web.tunein.com/stations.json';
  const failureMessage = <div className="message">Sorry, something is wrong with TuneIn lite. Please try again later.</div>;

  return (
    <Fetch
      url={STATIONS_URL}
      responseType="json"
      onResponse={(error, response) => {
        const { data } = response;
        // if data was successfully parsed (it will be null if not), grab the stations data
        const { data: stationsRaw = undefined } = data ? data : { data: undefined};
        // if parsed data is an array, pass each station object through factory function
        const stations = Array.isArray(stationsRaw) ? stationsRaw.map(station => createStationFromRawData(station)): undefined;
        if (stations) {
          setStations(stations);
        }
        else {
          setError(true);
        }
      }}
    >
      {({ fetching, failed, data }) => {
          if (fetching) {
            return <div className="message">Loading stations! sit tight...</div>;
          }

          if (failed || isError) {
            return failureMessage;
          }

          if (data) {
            return (
              <>
                {selectedStation ? 
                  <Player 
                    station={stations.find((station) => station.id === selectedStation)}
                    stationError={stationError}
                  /> :
                  <h4 className="message">Welcome to TuneIn radio lite! Please select a station below:</h4>
                }
                <StationsList stations={stations} setSelectedStation={setSelectedStation} />
              </>
            );
          }

          return failureMessage;
        }
      }
    </Fetch>
  );
};

export default Container;