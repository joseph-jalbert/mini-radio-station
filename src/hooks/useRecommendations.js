import { useState } from 'react';

const useRecommendations = stations => {
  const [preferenceScores, updatePreferenceScores] = useState(
    {
      'hip hop': 0,
      'music': 0,
      'latin': 0,
      'pop latino': 0,
      'news': 0,
      'public radio': 0,
      'current affairs': 0,
      'jazz': 0,
      'chicago': 0,
      'top': 0,
      'classic rock': 0,
      'pop': 0,
      'top hits': 0,
      'country hits': 0,
      'world news': 0,
    }
  );
  
  const updatePreferences = selectedStationTags => {
    let cachedPreferenceScores = preferenceScores;
    selectedStationTags.forEach(tag => {
      cachedPreferenceScores = {
        ...cachedPreferenceScores,
        [tag]: ['news', 'music'].includes(tag) ? 
          preferenceScores[tag] + 3 :
          preferenceScores[tag] + 2,
      };
    });
    updatePreferenceScores(cachedPreferenceScores);
  };

  const getRecommendations = () => {
    if (stations.length < 1) return;
    const scoredStations = stations.map(station => {
      const {
        id,
        popularity,
        reliability,
      } = station;
      let preferenceScore = 0;
      station.tags.forEach(tag => {
        preferenceScore += preferenceScores[tag]
      });

      return {
        id,
        score: preferenceScore + popularity + Math.floor(reliability/10),
      }
    });

    const topThree = scoredStations.sort((a, b) => b.score - a.score).slice(0, 3);
    return topThree;
  };

  return [updatePreferences, getRecommendations];
}

export default useRecommendations;