/* eslint-disable no-console */

function logError(err) {
  console.log('Error ', err);
}

function getJson(response) {
  return response.json();
}

let lolCache = {};

export default function pokemonSearch(name, page, callback) {
  let url = name ?
    `http://localhost:5000/api/pokemon/${name}/`
    : 'http://localhost:5000/api/pokemon/';
  url = page === 1 ? url : url + `?offset=${20*(page-1)}`;
  if (!lolCache.hasOwnProperty(name + page)) {
    lolCache[name] = fetch(url)
      .then(getJson)
      .then(data => {lolCache[name] = data; callback(data); return data })
      .catch(logError);
  } else {
    callback(lolCache[name]);
  }
}
