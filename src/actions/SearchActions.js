import * as types from '../constants/SearchActionTypes';
import pokemonSearch from '../api/PokemonSearch';

function searchWithPokemonAPI(keyword, page, dispatch) {
  if (page >= 2) {
    dispatch({
      type: types.SEARCH_PENDING_FOR_NEXT,
    });
  } else {
    dispatch({
      type: types.SEARCH_PENDING,
    });
  }

  pokemonSearch(keyword, (data) => {
    dispatch({
      type: types.SEARCH_DONE,
      pokemons: data.pokemons,
      keyword,
    });
  });
}

export function searchNextPageAction() {
  return (dispatch, getState) =>{
    const page = getState().pokemons.page + 1;
    const keyword = getState().pokemons.keyword;
    searchWithPokemonAPI(keyword, page, dispatch);
  };
}

export function searchPokemonAction(keyword, page = 1) {
  return (dispatch) => {
    searchWithPokemonAPI(keyword, page, dispatch);
  };
}
