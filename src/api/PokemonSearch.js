/* eslint-disable no-console */

function logError(err) {
  console.log('Error ', err);
}

function getJson(response) {
  return response.json();
}

let lolCache = {};

export default function pokemonSearch(name, callback) {
  if (!lolCache.hasOwnProperty(name)) {
    lolCache[name] = fetch(`http://localhost:5000/api/pokemon/${name}/`)
      .then(getJson)
      .then(data => {lolCache[name] = data; callback(data); return data })
      .catch(logError);
  } else {
    callback(lolCache[name]);
  }
}
