import * as types from '../constants/SearchActionTypes';
import pokemonSearch from '../api/PokemonSearch';

function searchWithPokemonAPI(keyword, page, dispatch) {

  keyword = keyword ? keyword.toLowerCase() : keyword;
  console.log(`function searchWithPokemonAPI(${keyword}, ${page}, ${dispatch}) {`)
  if (page >= 2) {
    dispatch({
      type: types.SEARCH_PENDING_FOR_NEXT,
      query: keyword,
    });
  } else {
    dispatch({
      type: types.SEARCH_PENDING,
      query: keyword,
    });
  }

  pokemonSearch(keyword, page, (data) => {
    dispatch({
      type: types.SEARCH_DONE,
      pokemons: data.pokemon ? data.pokemon : data,
      page: page,
      query: keyword,
    });
  });
}

export function searchNextPageAction() {
  return (dispatch, getState) =>{
    const page = getState().pokemons.page + 1;
    const keyword = getState().pokemons.query;
    searchWithPokemonAPI(keyword, page, dispatch);
  };
}

export function searchPokemonAction(keyword, page = 1) {
  return (dispatch) => {
    searchWithPokemonAPI(keyword, page, dispatch);
  };
}

export function getPokemons(page = 1) {
  return (dispatch) => {
    searchWithPokemonAPI('', page, dispatch);
  };
}