/* eslint-disable no-console */

function logError(err) {
  console.log('Error ', err);
}

function getJson(response) {
  return response.json();
}

export default function pokemonSearch(name, callback) {
  fetch(`http://pokeapi.co/api/v2/pokemon/${name}/`)
    .then(getJson)
    .then(callback)
    .catch(logError);
}
