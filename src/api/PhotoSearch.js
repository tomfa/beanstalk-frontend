/* eslint-disable no-console */

function logError(err) {
  console.log('Error ', err);
}

function getJson(response) {
  return response.json();
}

export default function photoSearch(keyword, page, callback) {
  fetch(`https://api.500px.com/v1/photos/search?term=${keyword}&page=${page}&rpp=20&image_size=440&sort=highest_rating&consumer_key=sPvXEpW2sFrch65rpyZQf01lBHuRGkEDDROTG1r4`)
    .then(getJson)
    .then(callback)
    .catch(logError);
}
