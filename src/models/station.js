const createStationFromRawData = rawStation => {
  const {
    id,
    description,
    name,
    imgUrl,
    streamUrl,
    reliability,
    popularity,
    tags,
  } = rawStation;

  const isNonEmptyString = str => typeof str === 'string' && str.length > 0;
  const isNumber = num => typeof num === 'number';
  
  return {
    id: isNonEmptyString(id) ? id: String(Date.now()),
    description: isNonEmptyString(description) ? description : 'no description found',
    name: isNonEmptyString(name) ? name : 'no name found',
    imgUrl: isNonEmptyString(imgUrl) ? imgUrl : 'https://via.placeholder.com/145',
    streamUrl: isNonEmptyString(streamUrl) ? streamUrl : '',
    reliability: isNumber(reliability) ? reliability : 0,
    popularity: isNumber(popularity) ? popularity : 0,
    tags: Array.isArray(tags) ? tags : [],
  }
};

export default createStationFromRawData;